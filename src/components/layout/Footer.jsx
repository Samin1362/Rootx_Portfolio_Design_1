import React from 'react';

const Footer = ({ socialLinks }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Research', href: '#research' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const socials = [
    { name: 'GitHub', url: socialLinks?.github, icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' },
    { name: 'LinkedIn', url: socialLinks?.linkedin, icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
    { name: 'ResearchGate', url: socialLinks?.researchGate, icon: 'M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 00-.112.437 8.365 8.365 0 00-.078.53 9 9 0 00-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.121 0 00.014 1.017 9 9 0 00.05.727 7.946 7.946 0 00.077.53h-.005a3.334 3.334 0 00.113.438c.245.743.65 1.303 1.214 1.68.564.376 1.254.564 2.072.564.8 0 1.487-.188 2.06-.564.576-.377.988-.937 1.236-1.68.063-.186.11-.406.14-.66.03-.254.056-.55.077-.888a10.5 10.5 0 00.035-.888c.007-.354.011-.764.011-1.23 0-.467-.004-.877-.011-1.231a10.5 10.5 0 00-.035-.888 7.89 7.89 0 00-.077-.888 2.977 2.977 0 00-.14-.66c-.248-.743-.66-1.303-1.236-1.68C21.073.188 20.386 0 19.586 0z' },
    { name: 'Google Scholar', url: socialLinks?.googleScholar, icon: 'M12 24a7 7 0 110-14 7 7 0 010 14zm0-24L0 9.5l4.838 3.94A8 8 0 0112 9a8 8 0 017.162 4.44L24 9.5z' },
  ];

  return (
    <footer
      className="relative overflow-hidden footer-section"
      style={{
        backgroundColor: '#0f172a',
        color: '#ffffff'
      }}
    >
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #475569 1px, transparent 0)',
          backgroundSize: '40px 40px',
          zIndex: 0
        }}
      />

      {/* Decorative Element */}
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          right: '0',
          fontSize: '20rem',
          fontFamily: 'serif',
          color: 'rgba(255, 255, 255, 0.01)',
          userSelect: 'none',
          pointerEvents: 'none',
          lineHeight: 1
        }}
      >
        ∞
      </div>

      {/* Container */}
      <div
        className="relative footer-container"
        style={{
          maxWidth: '1400px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          zIndex: 10
        }}
      >
        {/* Top Border */}
        <div
          style={{
            borderTop: '3px solid #d97706',
            paddingTop: '3rem'
          }}
        />

        {/* Main Footer Content */}
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '2rem',
            paddingTop: '1rem',
            paddingBottom: '3rem'
          }}
        >
          {/* Brand Section */}
          <div
            className="footer-brand"
            style={{
              gridColumn: 'span 1'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}
            >
              <div
                style={{
                  width: '3.5rem',
                  height: '3.5rem',
                  backgroundColor: '#d97706',
                  borderRadius: '0.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <span
                  style={{
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '1.5rem',
                    fontFamily: 'serif'
                  }}
                >
                  AS
                </span>
              </div>
              <div>
                <h3
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    fontFamily: 'serif',
                    lineHeight: 1.2,
                    marginBottom: '0.25rem'
                  }}
                >
                  Aarav Sen
                </h3>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: '#94a3b8',
                    fontWeight: 500
                  }}
                >
                  Mathematics Student
                </p>
              </div>
            </div>

            <p
              style={{
                fontSize: '0.9375rem',
                color: '#cbd5e1',
                lineHeight: 1.7,
                maxWidth: '28rem',
                marginBottom: '1.5rem'
              }}
            >
              Passionate about exploring the beauty of mathematics and its applications.
              Always open to research collaborations and academic discussions.
            </p>

            {/* Social Links */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.75rem'
                }}
              >
                <div
                  style={{
                    width: '1.5rem',
                    height: '1.5rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '0.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <svg
                    style={{ width: '0.875rem', height: '0.875rem', color: '#94a3b8' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </div>
                <p
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: '#94a3b8'
                  }}
                >
                  Connect with me
                </p>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.75rem'
                }}
              >
                {socials.map((social) => (
                  social.url && (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      style={{
                        width: '2.75rem',
                        height: '2.75rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '0.25rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.2s',
                        color: '#cbd5e1'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#d97706';
                        e.currentTarget.style.borderColor = '#d97706';
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.color = '#cbd5e1';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <svg style={{ width: '1.125rem', height: '1.125rem' }} fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                    </a>
                  )
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div
            className="footer-links"
            style={{
              gridColumn: 'span 1'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1.5rem',
                paddingBottom: '1rem',
                borderBottom: '2px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div
                style={{
                  width: '1.5rem',
                  height: '1.5rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '0.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <svg
                  style={{ width: '0.875rem', height: '0.875rem', color: '#94a3b8' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h4
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  fontFamily: 'serif'
                }}
              >
                Quick Links
              </h4>
            </div>
            <ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}
            >
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      fontSize: '0.9375rem',
                      color: '#cbd5e1',
                      textDecoration: 'none',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#d97706';
                      e.currentTarget.style.paddingLeft = '0.5rem';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#cbd5e1';
                      e.currentTarget.style.paddingLeft = '0';
                    }}
                  >
                    <span
                      style={{
                        width: '0.375rem',
                        height: '0.375rem',
                        backgroundColor: '#d97706',
                        borderRadius: '50%',
                        flexShrink: 0
                      }}
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div
            className="footer-contact"
            style={{
              gridColumn: 'span 1'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1.5rem',
                paddingBottom: '1rem',
                borderBottom: '2px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div
                style={{
                  width: '1.5rem',
                  height: '1.5rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '0.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <svg
                  style={{ width: '0.875rem', height: '0.875rem', color: '#94a3b8' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h4
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  fontFamily: 'serif'
                }}
              >
                Contact Info
              </h4>
            </div>
            <ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem'
              }}
            >
              <li
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem'
                }}
              >
                <div
                  style={{
                    width: '2rem',
                    height: '2rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '0.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '0.125rem'
                  }}
                >
                  <svg
                    style={{ width: '1rem', height: '1rem', color: '#d97706' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      color: '#94a3b8',
                      marginBottom: '0.25rem'
                    }}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:aarav.sen.math@gmail.com"
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: '#cbd5e1',
                      textDecoration: 'none',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#d97706';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#cbd5e1';
                    }}
                  >
                    aarav.sen.math@gmail.com
                  </a>
                </div>
              </li>
              <li
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem'
                }}
              >
                <div
                  style={{
                    width: '2rem',
                    height: '2rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '0.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '0.125rem'
                  }}
                >
                  <svg
                    style={{ width: '1rem', height: '1rem', color: '#d97706' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      color: '#94a3b8',
                      marginBottom: '0.25rem'
                    }}
                  >
                    Location
                  </p>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: '#cbd5e1'
                    }}
                  >
                    Dhaka, Bangladesh
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="footer-bottom"
          style={{
            borderTop: '2px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '1.5rem',
            paddingBottom: '1.5rem'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem'
            }}
          >
            <p
              style={{
                fontSize: '0.875rem',
                color: '#94a3b8',
                textAlign: 'center'
              }}
            >
              © {currentYear} Aarav Sen. All rights reserved.
            </p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <p
                style={{
                  fontSize: '0.875rem',
                  color: '#94a3b8',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  flexWrap: 'wrap',
                  justifyContent: 'center'
                }}
              >
                Crafted with
                <svg
                  style={{ width: '1rem', height: '1rem', color: '#ef4444' }}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                using
                <span style={{ color: '#60a5fa' }}>React</span>
                &
                <span style={{ color: '#d97706' }}>Tailwind</span>
              </p>
              <p
                style={{
                  fontSize: '0.875rem',
                  color: '#94a3b8',
                  textAlign: 'center'
                }}
              >
                Developed by{' '}
                <span
                  style={{
                    color: '#d97706',
                    fontWeight: 600
                  }}
                >
                  Rootx Softwares Limited
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>
        {`
          /* Desktop and larger tablets */
          @media (min-width: 1024px) {
            .footer-container {
              padding-left: 2rem !important;
              padding-right: 2rem !important;
            }

            .footer-grid {
              grid-template-columns: 2fr 1fr 1fr !important;
              gap: 4rem !important;
            }

            .footer-bottom {
              padding-top: 2rem !important;
              padding-bottom: 2rem !important;
            }

            .footer-bottom > div {
              flex-direction: row !important;
              justify-content: space-between !important;
            }

            .footer-bottom > div > div {
              flex-direction: row !important;
              align-items: center !important;
            }
          }

          /* Tablet */
          @media (min-width: 768px) and (max-width: 1023px) {
            .footer-container {
              padding-left: 1.5rem !important;
              padding-right: 1.5rem !important;
            }

            .footer-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 3rem !important;
            }

            .footer-brand {
              grid-column: span 2 !important;
            }
          }

          /* Mobile */
          @media (max-width: 767px) {
            .footer-grid {
              gap: 2.5rem !important;
            }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
