import React, { useState, useEffect, useRef } from 'react';
import './EventPages.css';
import { cooperateGalleryVideos } from '../lib/videoAssets';

// Sub-component for individual video cards to manage hover playback cleanly
function VideoCard({ videoSrc, idx, onClick }) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => { });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // reset to beginning
    }
  };

  return (
    <div
      className="event-gallery-card"
      onClick={() => onClick(videoSrc)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="button"
      tabIndex={0}
      aria-label={`Play corporate event video ${idx + 1}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick(videoSrc);
        }
      }}
    >
      <div className="event-gallery-img-wrapper">
        <video
          ref={videoRef}
          src={videoSrc}
          className="event-gallery-video"
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="video-card-overlay">
          <div className="video-play-btn">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CooperateEvents() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Close lightbox on escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedVideo(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const galleryVideos = cooperateGalleryVideos;

  return (
    <main className="event-page">
      {/* Banner Section */}
      <div className="event-banner-container">
        <div className="event-banner-bg cooperate-banner-bg"></div>
        <div className="event-banner-overlay"></div>
        <div className="event-banner-content">
          <h1 className="event-banner-title">
            Cooperate <span className="event-title-hand">events</span>
          </h1>
          <p className="event-banner-desc">
            Explore a selection of events, installations, and transformations delivered by LM Eventz Plus.
            Every project reflects our commitment to creativity, precision, and exceptional execution.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="event-gallery-container">
        <div className="event-gallery-grid">
          {galleryVideos.map((videoSrc, idx) => (
            <VideoCard
              key={idx}
              videoSrc={videoSrc}
              idx={idx}
              onClick={setSelectedVideo}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <div
        className={`event-lightbox ${selectedVideo ? 'is-open' : ''}`}
        onClick={() => setSelectedVideo(null)}
        aria-hidden={!selectedVideo}
        role="dialog"
      >
        <button
          className="event-lightbox-close"
          onClick={(e) => {
            e.stopPropagation();
            setSelectedVideo(null);
          }}
          aria-label="Close Lightbox"
        >
          &times;
        </button>
        <div
          className="event-lightbox-content"
          onClick={(e) => e.stopPropagation()}
        >
          {selectedVideo && (
            <video
              src={selectedVideo}
              className="event-lightbox-video"
              controls
              autoPlay
              muted
              playsInline
            />
          )}
        </div>
      </div>
    </main>
  );
}
