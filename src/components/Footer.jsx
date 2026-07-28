
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-card">
        {/* Upper CTA Section */}
        <div className="footer-cta">
          <h2 className="footer-cta-title">
            Let's turn your vision into an <br /> mermorable experience.
          </h2>
          <a 
            href="https://wa.me/2348033536551" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-cta-btn"
          >
            Book Your Event
          </a>
        </div>

        <hr className="footer-divider" />

        {/* Footer Grid Info */}
        <div className="footer-grid">
          {/* Column 1: Logo */}
          <div className="footer-col logo-col">
            <img src="/white-logo.png" alt="LM EVENTZ" className="footer-logo" />
          </div>

          {/* Column 2: Company */}
          <div className="footer-col">
            <h3 className="footer-col-title">COMPANY</h3>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Working Hours */}
          <div className="footer-col">
            <h3 className="footer-col-title">WORKING HOURS</h3>
            <ul className="footer-info-list">
              <li>
                <span className="info-label">Monday – Friday:</span>
                <span className="info-val">8:00 AM – 6:00 PM</span>
              </li>
              <li>
                <span className="info-label">Saturday:</span>
                <span className="info-val">9:00 AM – 4:00 PM</span>
              </li>
              <li>
                <span className="info-label">Sunday:</span>
                <span className="info-val">By Appointment</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div className="footer-col support-col">
            <h3 className="footer-col-title">SUPPORT</h3>
            <ul className="footer-info-list support-list">
              <li>
                <span className="support-icon">📞</span>
                <div>
                  <span className="info-label">Call Us:</span>
                  <a href="tel:+2348033536551" className="support-link">+234 803 353 6551</a> | <a href="tel:+2348159261778" className="support-link">+234 815 926 1778</a>
                </div>
              </li>
              <li>
                <span className="support-icon">✉️</span>
                <div>
                  <span className="info-label">Email:</span>
                  <a href="mailto:customercaare@lmeventzplus.com" className="support-link">customercaare@lmeventzplus.com</a>, <a href="mailto:Sales@lmeventzplus.com" className="support-link">Sales@lmeventzplus.com</a>
                </div>
              </li>
              <li>
                <span className="support-icon">📍</span>
                <div>
                  <span className="info-label">Head Office:</span>
                  <span className="support-text">Ojels Mall, Thinker's Corner, Enugu State, Nigeria.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="footer-bottom">
          <p className="copyright-text">
            © 2026 LM Eventz Plus Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
