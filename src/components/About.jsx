import React, { useEffect } from 'react';
import { Send, Eye } from 'lucide-react';
import './About.css';

export default function About() {
  useEffect(() => {
    // Check if the URL has a hash for the services section
    const hash = window.location.hash;
    if (hash === '#services-section') {
      const element = document.getElementById('services-section');
      if (element) {
        // Delay slightly to allow the layout to mount completely
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  const services = [
    {
      title: 'Event Planning & Coordination',
      desc: 'End-to-end planning and professional coordination that keeps every detail under control.',
    },
    {
      title: 'Space Transformation',
      desc: 'Transform ordinary spaces into visually stunning environments.',
    },
    {
      title: 'Booth & Pavilion Fabrication',
      desc: 'Custom-built installations designed to elevate your brand presence.',
    },
    {
      title: 'Tent Installation',
      desc: 'Premium structures built for comfort, style, and functionality.',
    },
    {
      title: 'Environmental Branding',
      desc: 'Create immersive brand experiences through strategic visual storytelling.',
    },
    {
      title: 'Venue Selection & Management',
      desc: 'Find and manage the perfect location for your event.',
    },
  ];

  const team = [
    {
      img: '/team-pic 1.jpeg',
      name: 'Mrs. Oge Kingsley Ibe',
      role: 'Creative Director \\ Lead Planner',
    },
    {
      img: '/team-pic 2.png',
      name: 'Mr. Kingsley Nnamdi Ajah',
      role: 'Executive Director \\ Lead Coordinator',
    },
    {
      img: '/team-pic 3.jpeg',
      name: 'Chidinma Queen Oruh',
      role: 'Customer experience manager',
    },
  ];

  return (
    <main className="about-page">
      {/* Banner Section */}
      <div className="about-banner-container">
        <div className="about-banner-bg"></div>
        <div className="about-banner-overlay"></div>
        <div className="about-banner-content">
          <h1 className="about-banner-title">
            Creating Experiences That <br />
            Leave <span className="about-title-hand">Lasting</span> Impressions
          </h1>
          <p className="about-banner-desc">
            LM Eventz Plus Limited is an event management company dedicated to creating memorable and seamless event experiences.
            We specialize in event planning, space transformation, booth and pavilion fabrication, environmental branding,
            tent installation, and complete coordination services.
          </p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="mission-vision-container">
        <div className="mission-vision-grid">
          {/* Mission */}
          <div className="mission-vision-card">
            <div className="mv-icon-box">
              <Send className="mv-icon" />
            </div>
            <h2 className="mv-title">
              Our <span className="mv-title-hand">Mission</span>
            </h2>
            <p className="mv-text">
              To deliver exceptional event experiences through innovation, professionalism, and attention to every detail.
            </p>
          </div>

          {/* Vision */}
          <div className="mission-vision-card">
            <div className="mv-icon-box">
              <Eye className="mv-icon" />
            </div>
            <h2 className="mv-title">
              Our <span className="mv-title-hand">Vision</span>
            </h2>
            <p className="mv-text">
              To become a leading event management company known for excellence, creativity, and unforgettable experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="featured-projects-container">
        <div className="about-section-header">
          <h2 className="about-section-title">
            Featured <span className="about-section-title-hand">Projects.</span>
          </h2>
        </div>
        <div className="featured-projects-grid">
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

      {/* Services Section */}
      <div id="services-section" className="about-services-container">
        <div className="about-section-header">
          <h2 className="about-section-title">
            Our <span className="about-section-title-hand">Services.</span>
          </h2>
        </div>
        <div className="about-services-grid">
          {/* Service Image */}
          <div className="services-img-col">
            <div className="services-img-wrapper">
              <img 
                src="/service-pic.jpg" 
                alt="LM Eventz services setup" 
                className="services-img"
              />
            </div>
          </div>

          {/* Service Timeline */}
          <div className="services-timeline-col">
            <div className="services-timeline">
              {services.map((service, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">{service.title}</h3>
                    <p className="timeline-desc">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="about-team-container">
        <div className="about-section-header">
          <h2 className="about-section-title">
            The <span className="about-section-title-hand">Team</span> That Makes It Happen
          </h2>
        </div>
        <div className="about-team-grid">
          {team.map((member, idx) => (
            <div key={idx} className="team-card">
              <div className="team-card-img-wrapper">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="team-card-img"
                />
              </div>
              <h3 className="team-card-name">{member.name}</h3>
              <p className="team-card-role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
