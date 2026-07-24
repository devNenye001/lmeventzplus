
import { Briefcase, Users, Sparkles } from 'lucide-react';
import './Home.css';
import { homeGalleryVideos, homeHeroVideo } from '../lib/videoAssets';

export default function Home() {
  const logos = [
    '/logo1.PNG',
    '/logo2.PNG',
    '/logo3.WEBP',
    '/logo4.PNG',
    '/logo5.PNG',
    '/logo6.JPG',
    '/logo7.PNG',
    '/logo9.JPG',
    '/logo10.JPG'
  ];
  // Duplicate array once for infinite seamless scrolling marquee
  const marqueeLogos = [...logos, ...logos];


  const services = [
    {
      title: 'Event Planning & Coordination',
      desc: 'End-to-end planning and professional coordination that keeps every detail under control.',
      img: '/service-pic.jpg',
    },
    {
      title: 'Space Transformation',
      desc: 'Transform ordinary spaces into visually stunning environments.',
      img: '/social-event-cover.jpg',
    },
    {
      title: 'Booth & Pavilion Fabrication',
      desc: 'Custom-built installations designed to elevate your brand presence.',
      img: '/booth-install.jpeg',
    },
    {
      title: 'Venue Selection & Management',
      desc: 'Find and manage the perfect location for your event.',
      img: '/venue-pic.jpeg',
    },
  ];

  const testimonials = [
    {
      quote: 'LM Eventz Plus transformed our annual corporate conference into a masterpiece. Their team managed the venue setup, booth fabrication, and timeline coordination flawlessly. Our guests were thoroughly impressed!',
      name: 'Olamide Benson',
      role: 'Marketing Director, Prime Group',
    },
    {
      quote: "For our daughter's wedding, LM Eventz Plus exceeded all our expectations. The space transformation was magical, and the coordination was completely stress-free. Highly recommended!",
      name: 'Dr. Chioma Nwachukwu',
      role: 'Parent / Host',
    },
    {
      quote: 'Excellent coordination and attention to detail. They designed a custom exhibition booth that stood out and attracted massive engagement. Truly a top-tier event management company.',
      name: 'Emeka Okafor',
      role: 'Event Sponsor',
    },
  ];

  const steps = [
    {
      number: '1',
      title: 'Discovery',
      desc: 'First, we learn about your vision, goals, and event scope.',
    },
    {
      number: '2',
      title: 'Concept & Planning',
      desc: 'We design custom proposals, layouts, and planning schedules.',
    },
    {
      number: '3',
      title: 'Fabrication & Setup',
      desc: 'We build the installations, fabricate booths, and transform the space.',
    },
    {
      number: '4',
      title: 'Execution & Handover',
      desc: 'Our coordinators manage every detail on event day for a seamless experience.',
    },
  ];

  return (
    <main className="home-page">
      {/* Hero Section */}
      <div className="home-hero-container">
        <div className="home-hero-bg"></div>
        <div className="home-hero-overlay"></div>
        <div className="home-hero-content">
          <h1 className="home-hero-title">
            Creating Mermorable Experiences <br />
            for Every <span className="home-hero-title-hand">Guest</span> and Occasion
          </h1>
          <p className="home-hero-desc">
            Whether it's a grand corporate event or an intimate social gathering, we bring your vision to life with creativity, precision, and exceptional execution.
          </p>
          <a
            href="https://wa.me/2348033536551"
            target="_blank"
            rel="noopener noreferrer"
            className="home-hero-btn"
          >
            Book Consultation
          </a>
        </div>
      </div>

      {/* Trusted By Logos Marquee */}
      <div className="logos-section">
        <h2 className="logos-header">
          Trusted by Over <span className="trusted-clients">50+</span> clients who value creativity, quality, and excellence.
        </h2>
        <div className="marquee-container">
          <div className="marquee-track">
            {marqueeLogos.map((logoSrc, idx) => (
              <div key={idx} className="marquee-logo-wrapper">
                <img
                  src={logoSrc}
                  alt={`logo ${idx + 1}`}
                  className="marquee-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid (We Create Experiences) */}
      <div className="home-section-container">
        <div className="home-section-header">
          <h2 className="home-section-title">
            We Dont Just Organize Events — <br />
            We Create <span className="home-section-title-hand">Experiences.</span>
          </h2>
        </div>
        <div className="home-services-grid">
          {services.map((service, idx) => (
            <div key={idx} className="service-card">
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.desc}</p>
              <div className="service-card-img-wrapper">
                <img
                  src={service.img}
                  alt={service.title}
                  className="service-card-img"
                />
                <div className="service-card-overlay">
                  <a href="/about#services-section" className="service-card-learn-more">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="home-section-container" style={{ paddingTop: 0 }}>
        <div className="home-section-header">
          <h2 className="home-section-title">
            Featured <span className="home-section-title-hand">Projects.</span>
          </h2>
        </div>
        <div className="home-featured-grid">
          {/* Cooperate Events Card */}
          <a href="/cooperate-events" className="project-card">
            <h3 className="project-card-title">Cooperate Events</h3>
            <p className="project-card-desc">
              Business-focused events such as conferences, seminars, meetings, and product launches.
            </p>
            <div className="project-card-img-wrapper">
              <img
                src="/cooperate-event-cover.jpg"
                alt="Cooperate Events"
                className="project-card-img"
              />
            </div>
          </a>

          {/* Social Events Card */}
          <a href="/social-events" className="project-card">
            <h3 className="project-card-title">Social Events</h3>
            <p className="project-card-desc">
              Celebratory gatherings such as weddings, birthdays, parties, and community events.
            </p>
            <div className="project-card-img-wrapper">
              <img
                src="/social-event-cover.jpg"
                alt="Social Events"
                className="project-card-img"
              />
            </div>
          </a>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-section">
        <div className="home-section-container">
          <div className="home-section-header">
            <h2 className="home-section-title">
              Why Choose Us. <br />
              Let Eventz <span className="home-section-title-hand">Plan.</span>
            </h2>
          </div>
          <div className="why-grid">
            {/* Card 1 */}
            <div className="why-card">
              <div className="why-icon-box">
                <Briefcase className="why-icon" />
              </div>
              <h3 className="why-card-title">Experienced Event Professionals</h3>
              <p className="why-card-desc">
                Years of experience delivering world-class events that meet and exceed expectations.
              </p>
            </div>

            {/* Card 2 */}
            <div className="why-card">
              <div className="why-icon-box">
                <Users className="why-icon" />
              </div>
              <h3 className="why-card-title">Personalized Client Experience</h3>
              <p className="why-card-desc">
                We tailor every detail to match your unique brand identity and styling.
              </p>
            </div>

            {/* Card 3 */}
            <div className="why-card">
              <div className="why-icon-box">
                <Sparkles className="why-icon" />
              </div>
              <h3 className="why-card-title">Exceptional Attention to Detail</h3>
              <p className="why-card-desc">
                From planning to execution, we ensure every aspect of your event is flawless.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Experience The Energy (3-video gallery) */}
      <div className="home-section-container">
        <div className="home-section-header">
          <h2 className="home-section-title">
            Experience The <span className="home-section-title-hand">Energy.</span> Feel The Moment.
          </h2>
        </div>
        <div className="video-gallery-grid">
          {homeGalleryVideos.map((videoSrc, idx) => (
            <div key={idx} className="video-card">
              <video
                src={videoSrc}
                controls
                autoPlay
                preload="metadata"
                className="home-video"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <div className="home-section-container">
          <div className="home-section-header">
            <h2 className="home-section-title">
              What Our <span className="home-section-title-hand">Clients</span> Say
            </h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, idx) => (
              <div key={idx} className="testimonial-card">
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="testimonial-author">
                  <h4 className="testimonial-name">{t.name}</h4>
                  <span className="testimonial-role">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Large Video Showcase (Middle-Bottom) */}
      <div className="large-video-container">
        <div className="large-video-wrapper">
          <video
            src={homeHeroVideo}
            controls
            autoPlay
            preload="metadata"
            className="home-large-video"
          />
        </div>
      </div>

      {/* Disco CTA Banner Section */}
      <div className="disco-cta-section">
        <div className="disco-bg"></div>
        <div className="disco-overlay"></div>
        <div className="disco-content">
          <h2 className="disco-title">
            Creating Moments That <span className="disco-title-hand">Stay</span> With People
          </h2>
          <p className="disco-desc">
            Let us help you plan your next event. Contact us today to speak with an event specialist.
          </p>
          <a
            href="https://wa.me/2348159261778"
            target="_blank"
            rel="noopener noreferrer"
            className="home-hero-btn"
          >
            Book Your Event
          </a>
        </div>
      </div>

      {/* How We Do It (Horizontal Process Timeline) */}
      <div className="home-section-container">
        <div className="home-section-header">
          <h2 className="home-section-title">
            How We Do It. In 4 <span className="home-section-title-hand">Steps.</span>
          </h2>
        </div>
        <div className="steps-timeline">
          {steps.map((step, idx) => (
            <div key={idx} className="step-node">
              <div className="step-number-box">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
