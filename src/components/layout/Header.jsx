import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'education', 'research', 'projects', 'skills', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Research', href: '#research' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className="header-main"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s',
        backgroundColor: isScrolled ? '#ffffff' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: isScrolled ? '2px solid #e2e8f0' : '1px solid rgba(226, 232, 240, 0.5)',
        boxShadow: isScrolled ? '0 4px 12px rgba(15, 23, 42, 0.08)' : '0 2px 8px rgba(15, 23, 42, 0.04)'
      }}
    >
      <nav
        className="header-nav"
        style={{
          maxWidth: '1400px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '1rem',
          paddingRight: '1rem'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '5rem'
          }}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              const badge = e.currentTarget.querySelector('.logo-badge');
              if (badge) {
                badge.style.transform = 'scale(1.05)';
              }
            }}
            onMouseLeave={(e) => {
              const badge = e.currentTarget.querySelector('.logo-badge');
              if (badge) {
                badge.style.transform = 'scale(1)';
              }
            }}
          >
            <div
              className="logo-badge"
              style={{
                width: '2.75rem',
                height: '2.75rem',
                backgroundColor: '#d97706',
                borderRadius: '0.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                transition: 'transform 0.2s',
                boxShadow: '0 2px 8px rgba(217, 119, 6, 0.3)'
              }}
            >
              <span
                style={{
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '1.125rem',
                  fontFamily: 'serif'
                }}
              >
                AS
              </span>
            </div>
            <span
              className="logo-text"
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#0f172a',
                fontFamily: 'serif',
                display: 'none'
              }}
            >
              Aarav<span style={{ color: '#d97706' }}>.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul
            className="desktop-nav"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.5rem',
              margin: 0,
              padding: 0,
              listStyle: 'none'
            }}
          >
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{
                    position: 'relative',
                    display: 'inline-block',
                    padding: '0.625rem 1rem',
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    color: activeSection === link.href.replace('#', '') ? '#d97706' : '#475569',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    borderRadius: '0.25rem'
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== link.href.replace('#', '')) {
                      e.currentTarget.style.color = '#0f172a';
                      e.currentTarget.style.backgroundColor = '#f8fafc';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== link.href.replace('#', '')) {
                      e.currentTarget.style.color = '#475569';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  {link.label}
                  {activeSection === link.href.replace('#', '') && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '0.25rem',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '1.5rem',
                        height: '0.125rem',
                        backgroundColor: '#d97706',
                        borderRadius: '9999px'
                      }}
                    />
                  )}
                </a>
              </li>
            ))}
            <li
              style={{
                marginLeft: '1rem'
              }}
            >
              <a
                href="/assets/documents/aarav_sen_cv.pdf"
                download
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.625rem 1.25rem',
                  backgroundColor: '#d97706',
                  color: '#ffffff',
                  fontSize: '0.9375rem',
                  fontWeight: 700,
                  borderRadius: '0.25rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  border: '2px solid #d97706',
                  boxShadow: '0 2px 8px rgba(217, 119, 6, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#b45309';
                  e.currentTarget.style.borderColor = '#b45309';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(217, 119, 6, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#d97706';
                  e.currentTarget.style.borderColor = '#d97706';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(217, 119, 6, 0.3)';
                }}
              >
                <svg
                  style={{ width: '1rem', height: '1rem' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Resume
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '2.75rem',
              height: '2.75rem',
              backgroundColor: 'transparent',
              border: '2px solid #e2e8f0',
              borderRadius: '0.25rem',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f8fafc';
              e.currentTarget.style.borderColor = '#d97706';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderColor = '#e2e8f0';
            }}
          >
            <svg
              style={{
                width: '1.5rem',
                height: '1.5rem',
                color: '#0f172a',
                transition: 'transform 0.2s',
                transform: isMobileMenuOpen ? 'rotate(90deg)' : 'rotate(0)'
              }}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className="mobile-menu"
          style={{
            overflow: 'hidden',
            transition: 'all 0.3s ease-in-out',
            maxHeight: isMobileMenuOpen ? '500px' : '0',
            opacity: isMobileMenuOpen ? 1 : 0
          }}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '0.5rem',
              padding: '1rem',
              marginTop: '0.75rem',
              marginBottom: '1rem',
              boxShadow: '0 4px 12px rgba(15, 23, 42, 0.08)'
            }}
          >
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}
            >
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.875rem 1rem',
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      color: activeSection === link.href.replace('#', '') ? '#ffffff' : '#334155',
                      backgroundColor: activeSection === link.href.replace('#', '') ? '#d97706' : 'transparent',
                      border: activeSection === link.href.replace('#', '') ? 'none' : '1px solid #e2e8f0',
                      borderRadius: '0.25rem',
                      textDecoration: 'none',
                      transition: 'all 0.2s'
                    }}
                  >
                    <span
                      style={{
                        width: '0.375rem',
                        height: '0.375rem',
                        backgroundColor: activeSection === link.href.replace('#', '') ? '#ffffff' : '#d97706',
                        borderRadius: '50%',
                        flexShrink: 0
                      }}
                    />
                    {link.label}
                  </a>
                </li>
              ))}
              <li
                style={{
                  paddingTop: '0.75rem',
                  marginTop: '0.75rem',
                  borderTop: '1px solid #e2e8f0'
                }}
              >
                <a
                  href="/assets/documents/aarav_sen_cv.pdf"
                  download
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    width: '100%',
                    padding: '0.875rem 1.25rem',
                    backgroundColor: '#0f172a',
                    color: '#ffffff',
                    fontSize: '0.9375rem',
                    fontWeight: 700,
                    borderRadius: '0.25rem',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                    border: '2px solid #0f172a'
                  }}
                >
                  <svg
                    style={{ width: '1.125rem', height: '1.125rem' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Responsive Styles */}
      <style>
        {`
          /* Desktop */
          @media (min-width: 1024px) {
            .header-nav {
              padding-left: 2rem !important;
              padding-right: 2rem !important;
            }

            .logo-text {
              display: inline !important;
            }

            .desktop-nav {
              display: flex !important;
            }

            .mobile-menu-btn {
              display: none !important;
            }

            .mobile-menu {
              display: none !important;
            }
          }

          /* Tablet */
          @media (min-width: 768px) and (max-width: 1023px) {
            .header-nav {
              padding-left: 1.5rem !important;
              padding-right: 1.5rem !important;
            }

            .logo-text {
              display: inline !important;
            }
          }

          /* Mobile - Logo text hidden by default (inline style) */
          @media (max-width: 767px) {
            .mobile-menu {
              display: block !important;
            }
          }

          /* Prevent body scroll when mobile menu is open */
          body.mobile-menu-open {
            overflow: hidden;
          }
        `}
      </style>
    </header>
  );
};

export default Header;
