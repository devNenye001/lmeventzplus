import React, { useState, useEffect, useRef } from 'react';
import './EventPages.css';
import { socialGalleryVideos } from '../lib/videoAssets';

// Sub-component to manage interactive hover/click behavior for image vs video social cards
function SocialEventCard({ item, idx, onClick }) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (item.type === 'video' && videoRef.current) {
      videoRef.current.play().catch(() => { });
    }
  };

  const handleMouseLeave = () => {
    if (item.type === 'video' && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // reset to beginning
    }
  };

  return (
    <div
      className="event-gallery-card"
      onClick={() => onClick(item)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="button"
      tabIndex={0}
      aria-label={`View social event ${item.type} ${idx + 1}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick(item);
        }
      }}
    >
      <div className="event-gallery-img-wrapper">
        {item.type === 'video' ? (
          <>
            <video
              ref={videoRef}
              src={item.src}
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
          </>
        ) : (
          <>
            <img
              src={item.src}
              alt={`Social Event Setup ${idx + 1}`}
              className="event-gallery-img"
              loading="lazy"
            />
            <div className="event-gallery-overlay"></div>
          </>
        )}
      </div>
    </div>
  );
}

export default function SocialEvents() {
  const [selectedItem, setSelectedItem] = useState(null);

  // Close lightbox on escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedItem(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const galleryItems = [
    { type: 'video', src: socialGalleryVideos[0] },
    { type: 'image', src: '/social1.jpg' },
    { type: 'video', src: socialGalleryVideos[1] },
    { type: 'image', src: '/social2.jpeg' },
    { type: 'video', src: socialGalleryVideos[2] },
    { type: 'image', src: '/social3.jpeg' },
    { type: 'video', src: socialGalleryVideos[3] },
    { type: 'image', src: '/social4.jpeg' },
    { type: 'video', src: socialGalleryVideos[4] },
    { type: 'video', src: socialGalleryVideos[5] },
    { type: 'video', src: socialGalleryVideos[6] },
    { type: 'video', src: socialGalleryVideos[7] },
    { type: 'video', src: socialGalleryVideos[8] },
  ];

  return (
    <main className="event-page">
      {/* Banner Section */}
      <div className="event-banner-container">
        <div className="event-banner-bg social-banner-bg"></div>
        <div className="event-banner-overlay"></div>
        <div className="event-banner-content">
          <h1 className="event-banner-title">
            Social <span className="event-title-hand">events</span>
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
          {galleryItems.map((item, idx) => (
            <SocialEventCard
              key={idx}
              item={item}
              idx={idx}
              onClick={setSelectedItem}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <div
        className={`event-lightbox ${selectedItem ? 'is-open' : ''}`}
        onClick={() => setSelectedItem(null)}
        aria-hidden={!selectedItem}
        role="dialog"
      >
        <button
          className="event-lightbox-close"
          onClick={(e) => {
            e.stopPropagation();
            setSelectedItem(null);
          }}
          aria-label="Close Lightbox"
        >
          &times;
        </button>
        <div
          className="event-lightbox-content"
          onClick={(e) => e.stopPropagation()}
        >
          {selectedItem && selectedItem.type === 'video' && (
            <video
              src={selectedItem.src}
              className="event-lightbox-video"
              controls
              autoPlay
              playsInline
            />
          )}
          {selectedItem && selectedItem.type === 'image' && (
            <img
              src={selectedItem.src}
              alt="Zoomed Event Setup"
              className="event-lightbox-img"
            />
          )}
        </div>
      </div>
    </main>
  );
}
