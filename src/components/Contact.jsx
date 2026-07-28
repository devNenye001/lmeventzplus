
import { MapPin, Mail, Phone, Share2 } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <main className="contact-page">
      {/* Banner Section */}
      <div className="contact-banner-container">
        <div className="contact-banner-overlay"></div>
        <div className="contact-banner-content">
          <h1 className="contact-banner-title">
            Contact <span className="contact-title-hand">Us</span>
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="contact-content-container">
        <div className="contact-grid">

          {/* Left Column: Info */}
          <div className="contact-info-col">
            <h2 className="contact-heading">Let's Bring Your Vision To Life</h2>
            <p className="contact-subtext">
              Whether you're planning a corporate event, exhibition, celebration, or branded experience, our team is ready to help.
            </p>

            <div className="contact-info-list">
              {/* Head Office */}
              <div className="contact-info-item">
                <div className="contact-icon-box">
                  <MapPin className="contact-icon" />
                </div>
                <div className="contact-info-text">
                  <h3 className="contact-info-label">Head Office</h3>
                  <p className="contact-info-val">Ojels Mall, Thinker's Corner, Enugu State, Nigeria.</p>
                </div>
              </div>

              {/* Email */}
              <div className="contact-info-item">
                <div className="contact-icon-box">
                  <Mail className="contact-icon" />
                </div>
                <div className="contact-info-text">
                  <h3 className="contact-info-label">Email</h3>
                  <p className="contact-info-val">
                    <a href="mailto:customercaare@lmeventzplus.com" className="contact-link">customercare@lmeventzplus.com</a>
                    <br />
                    <a href="mailto:Sales@lmeventzplus.com" className="contact-link">Sales@lmeventzplus.com</a>
                  </p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="contact-info-item">
                <div className="contact-icon-box">
                  <Phone className="contact-icon" />
                </div>
                <div className="contact-info-text">
                  <h3 className="contact-info-label">Phone Numbers</h3>
                  <p className="contact-info-val">
                    <a href="tel:+2348033536551" className="contact-link">+234 803 353 6551</a>
                    <br />
                    <a href="tel:+2348159261778" className="contact-link">+234 815 926 1778</a>
                  </p>
                </div>
              </div>

              {/* Instagram */}
              <div className="contact-info-item">
                <div className="contact-icon-box">
                  <Share2 className="contact-icon" />
                </div>
                <div className="contact-info-text">
                  <h3 className="contact-info-label">Instagram</h3>
                  <p className="contact-info-val">
                    <a href="https://instagram.com/lmeventz" className="contact-link">@lmeventz</a>
                    <br />
                    <a href="https://instagram.com/boothsbylmeventzplus" className="contact-link">@boothsbylmeventzplus</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Map */}
          <div className="contact-map-col">
            <div className="contact-map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15857.664417655977!2d7.529338909118808!3d6.468857167309282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a55d4b3580ef%3A0xaa60d811a79a5876!2sLmeventz!5e0!3m2!1sen!2sng!4v1782917867627!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Lmeventz Location Map"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
