import React, { useState, useEffect, useRef } from 'react';
import './EventPages.css';
import { portfolioVideos } from '../lib/videoAssets';

// Sub-component to manage interactive hover/click behavior for image vs video portfolio cards
function PortfolioCard({ item, idx, onClick }) {
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
      aria-label={`View portfolio ${item.type} ${idx + 1}`}
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
              alt={`Portfolio Setup ${idx + 1}`}
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

export default function Portfolio() {
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

  // Showcase of corporate & social event videos
  const portfolioItems = portfolioVideos.map((src) => ({ type: 'video', src }));

  return (
    <main className="event-page">
      {/* Banner Section */}
      <div className="event-banner-container">
        <div className="event-banner-bg portfolio-banner-bg portflio-banner-bg"></div>
        <div className="event-banner-overlay"></div>
        <div className="event-banner-content">
          <h1 className="event-banner-title">
            Turning Ideas Into <span className="event-title-hand">Memorable</span> Experiences
          </h1>
          <p className="event-banner-desc">
            Explore a selection of events, installations, and transformations delivered by LM Eventz Plus.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="event-gallery-container">
        <div className="event-gallery-grid">
          {portfolioItems.map((item, idx) => (
            <PortfolioCard
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
