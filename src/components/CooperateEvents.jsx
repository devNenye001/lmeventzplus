import React, { useState, useEffect } from 'react';
import './EventPages.css';

export default function CooperateEvents() {
  const [selectedImg, setSelectedImg] = useState(null);

  // Close lightbox on escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedImg(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const galleryImages = [
    '/cooperate-event-cover.jpg',
    '/social-event-cover.jpg',
    '/social-event-cover.jpg',
    '/cooperate-event-cover.jpg',
    '/social-event-cover.jpg',
    '/social-event-cover.jpg',
    '/cooperate-event-cover.jpg',
    '/social-event-cover.jpg',
    '/social-event-cover.jpg',
  ];

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
          {galleryImages.map((imgSrc, idx) => (
            <div 
              key={idx} 
              className="event-gallery-card"
              onClick={() => setSelectedImg(imgSrc)}
              role="button"
              tabIndex={0}
              aria-label={`View cooperate event image ${idx + 1}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedImg(imgSrc);
                }
              }}
            >
              <div className="event-gallery-img-wrapper">
                <img 
                  src={imgSrc} 
                  alt={`Cooperate Event Setup ${idx + 1}`} 
                  className="event-gallery-img"
                  loading="lazy"
                />
                <div className="event-gallery-overlay"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <div 
        className={`event-lightbox ${selectedImg ? 'is-open' : ''}`}
        onClick={() => setSelectedImg(null)}
        aria-hidden={!selectedImg}
        role="dialog"
      >
        <button 
          className="event-lightbox-close" 
          onClick={(e) => {
            e.stopPropagation();
            setSelectedImg(null);
          }}
          aria-label="Close Lightbox"
        >
          &times;
        </button>
        <div 
          className="event-lightbox-content"
          onClick={(e) => e.stopPropagation()}
        >
          {selectedImg && (
            <img 
              src={selectedImg} 
              alt="Zoomed Event Setup" 
              className="event-lightbox-img" 
            />
          )}
        </div>
      </div>
    </main>
  );
}
