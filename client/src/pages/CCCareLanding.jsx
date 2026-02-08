import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './CCCareLanding.css';

export default function CCCareLanding() {
  const baseFontPx = useRef(16);
  const [scale, setScale] = useState(1);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const root = document.documentElement;
    const computed = getComputedStyle(root).fontSize || '16px';
    const px = parseFloat(computed) || 16;
    baseFontPx.current = px;
    root.style.fontSize = `${px * scale}px`;
  }, []);

  useEffect(() => {
    document.documentElement.style.fontSize = `${baseFontPx.current * scale}px`;
  }, [scale]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function increaseFont() {
    setScale((s) => Math.min(1.6, +(s + 0.1).toFixed(2)));
  }

  function decreaseFont() {
    setScale((s) => Math.max(0.8, +(s - 0.1).toFixed(2)));
  }

  const programs = [
    {
      icon: "❤️",
      title: "UW WELL-FIT Cancer Exercise",
      description: "Evidence-based exercise programs for individuals during and after cancer treatment, including START-FIT and STAY-FIT programs.",
      gradient: "linear-gradient(135deg, #f43f5e 0%, #ec4899 100%)"
    },
    {
      icon: "👥",
      title: "STEPS for Stroke Recovery",
      description: "Specialized exercise program designed to help individuals living with the effects of stroke regain function and independence.",
      gradient: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)"
    },
    {
      icon: "🧬",
      title: "Brain & Body Program",
      description: "Comprehensive program for individuals experiencing dementia or mild cognitive impairment and their care partners.",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)"
    }
  ];

  const stats = [
    { number: "20+", label: "Years of Excellence" },
    { number: "1000+", label: "Research Participants" },
    { number: "50+", label: "Published Studies" },
    { number: "100%", label: "Community Focused" }
  ];

  const researchAreas = [
    "Cancer survivorship and exercise oncology",
    "Stroke rehabilitation and recovery",
    "Cognitive health and dementia prevention",
    "Health optimization and performance",
    "Clinical exercise physiology"
  ];

  return (
    <div className="cccare-landing">
      {/* Navigation */}
      <nav className={`cccare-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-content">
            <div className="nav-brand">
              {/* <div className="brand-logo">
                <span>C³</span>
              </div>
              <div className="brand-text">
                <h1>CCCare</h1>
                <p>University of Waterloo</p>
              </div> */}
              <img
                        src="/logo-placeholder.png"
                        alt="Logo"
                        className="app-logo"
                        width="230"
                        height="40"
                    />
            </div>
            
            <div className="nav-links desktop-only">
              <div className="font-controls">
                <Button variant="" size="sm" onClick={decreaseFont} aria-label="Decrease font" >
                  <span className="btn-a small">- A</span>
                </Button>
                <Button variant="" size="sm" onClick={increaseFont} aria-label="Increase font">
                  <span className="btn-a large">A +</span>
                </Button>
              </div>
              <a href="#programs">Programs</a>
              <a href="#research">Research</a>
              <a href="#about">About</a>
              <button className="btn-primary" onClick={() => navigate('/login')}>
                Get Started
              </button>
            </div>

            <button 
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu">
            <a href="#programs">Programs</a>
            <a href="#research">Research</a>
            <a href="#about">About</a>
            <div className="font-controls mobile-font-controls">
              <Button variant="outline-secondary" size="sm" onClick={decreaseFont} aria-label="Decrease font">
                <span className="btn-a small">- A</span>
              </Button>
              <Button variant="outline-secondary" size="sm" onClick={increaseFont} aria-label="Increase font">
                <span className="btn-a large">A +</span>
              </Button>
            </div>
            <button className="btn-primary" onClick={() => navigate('/signup')}>
              Get Started
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg"></div>
        <div className="hero-blob hero-blob-1"></div>
        <div className="hero-blob hero-blob-2"></div>
        
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">
                🏆 20 Years of Research Excellence
              </div>
              <h1 className="hero-title">
                Advancing Health Through
                <span className="hero-gradient">Research & Community</span>
              </h1>
              <p className="hero-description">
                CCCare is a multidisciplinary research centre dedicated to improving health outcomes through innovative programs, cutting-edge research, and community engagement.
              </p>
              <div className="hero-buttons">
                <button className="btn-hero-primary" onClick={() => navigate('/signup')}>
                  <span>Explore Programs</span>
                  <span className="arrow">→</span>
                </button>
                <button className="btn-hero-secondary">
                  View Research
                </button>
              </div>
            </div>

            <div className="hero-image-wrapper">
              <div className="hero-image-container">
                <div className="hero-image-frame">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=800&fit=crop" 
                    alt="Research Excellence"
                  />
                </div>
              </div>
              <div className="hero-card">
                <div className="hero-card-header">
                  <div className="hero-card-icon">✓</div>
                  <div className="hero-card-text">
                    <p className="hero-card-title">Latest Study</p>
                    <p className="hero-card-subtitle">Exercise & Colon Cancer</p>
                  </div>
                </div>
                <p className="hero-card-description">
                  Structured exercise significantly improves survival rates
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="programs-section">
        <div className="section-container">
          <div className="section-header">
            <h2>Evidence-Based Programs</h2>
            <p>
              Our specialized programs combine research excellence with compassionate care to support individuals on their health journey
            </p>
          </div>

          <div className="programs-grid">
            {programs.map((program, index) => (
              <div key={index} className="program-card">
                <div className="program-icon" style={{ background: program.gradient }}>
                  <span>{program.icon}</span>
                </div>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <button className="program-link">
                  <span>Learn More</span>
                  <span>→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="research-section">
        <div className="section-container">
          <div className="research-grid">
            <div className="research-content">
              <div className="research-badge">
                🔬 Cutting-Edge Research
              </div>
              <h2>Leading Innovation in Applied Health Research</h2>
              <p className="research-intro">
                Our multidisciplinary research team advances understanding in prevention, management, and treatment of clinical conditions through rigorous scientific investigation.
              </p>
              
              <div className="research-areas">
                {researchAreas.map((area, index) => (
                  <div key={index} className="research-area">
                    <span className="checkmark">✓</span>
                    <p>{area}</p>
                  </div>
                ))}
              </div>

              <button className="btn-research">
                <span>View Current Studies</span>
                <span>→</span>
              </button>
            </div>

            <div className="research-cards">
              <div className="featured-study">
                <div className="featured-header">
                  <div className="featured-icon">🏆</div>
                  <span className="featured-badge">Featured</span>
                </div>
                <h3>Exercise & Colon Cancer Survival</h3>
                <p>
                  Landmark study demonstrates structured exercise significantly improves survival rates in colon cancer patients
                </p>
                <a href="#" className="featured-link">
                  <span>Read Publication</span>
                  <span>→</span>
                </a>
              </div>

              <div className="join-research">
                <h3>Join Our Research</h3>
                <p>
                  Participate in groundbreaking studies and contribute to advancing health science
                </p>
                <button className="btn-join">Become a Participant</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education-section">
        <div className="section-container">
          <div className="section-header">
            <h2>Education & Training</h2>
            <p>
              Developing the next generation of health professionals through experiential learning and research opportunities
            </p>
          </div>

          <div className="education-grid">
            <div className="education-card blue">
              <div className="education-icon">🔬</div>
              <h3>Volunteer Opportunities</h3>
              <p>
                Gain hands-on experience in exercise management and clinical research while supporting our community programs
              </p>
              <ul className="education-list">
                <li><span>✓</span> Practical clinical experience</li>
                <li><span>✓</span> Research participation</li>
                <li><span>✓</span> Professional mentorship</li>
              </ul>
              <button className="education-link blue">
                <span>Apply Now</span>
                <span>→</span>
              </button>
            </div>

            <div className="education-card amber">
              <div className="education-icon">📚</div>
              <h3>Seminars & Workshops</h3>
              <p>
                Join our educational events featuring leading researchers and practitioners in applied health sciences
              </p>
              <ul className="education-list">
                <li><span>✓</span> Expert-led sessions</li>
                <li><span>✓</span> Networking opportunities</li>
                <li><span>✓</span> Continuing education credits</li>
              </ul>
              <button className="education-link amber">
                <span>View Events</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-bg"></div>
        <div className="cta-blob"></div>
        
        <div className="cta-content">
          <h2>Ready to Transform Your Health?</h2>
          <p>
            Join our community programs, participate in research, or explore educational opportunities at CCCare
          </p>
          <div className="cta-buttons">
            <button className="btn-cta-primary" onClick={() => navigate('/signup')}>
              Get Started Today
            </button>
            <button className="btn-cta-secondary" onClick={() => navigate('/login')}>
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="footer-logo-icon">C³</div>
                <div className="footer-logo-text">
                  <h3>CCCare</h3>
                  <p>UWaterloo</p>
                </div>
              </div>
              <p className="footer-description">
                Centre for Community, Clinical and Applied Research Excellence
              </p>
            </div>

            <div className="footer-links">
              <h4>Programs</h4>
              <ul>
                <li><a href="#">UW WELL-FIT</a></li>
                <li><a href="#">STEPS Program</a></li>
                <li><a href="#">Brain & Body</a></li>
                <li><a href="#">Faculty Fitness</a></li>
              </ul>
            </div>

            <div className="footer-links">
              <h4>Research</h4>
              <ul>
                <li><a href="#">Current Studies</a></li>
                <li><a href="#">Past Research</a></li>
                <li><a href="#">Publications</a></li>
                <li><a href="#">Participate</a></li>
              </ul>
            </div>

            <div className="footer-links">
              <h4>Connect</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Directions</a></li>
                <li><a href="#">Volunteer</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 CCCare, University of Waterloo. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}