import React from 'react';

const AboutSection = ({ personal }) => {
  const researchInterests = [
    'Real Analysis',
    'Linear Algebra',
    'Probability Theory',
    'Mathematical Modeling',
    'Numerical Methods'
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden about-section"
      style={{
        paddingTop: '3rem',
        paddingBottom: '3rem',
        backgroundColor: '#fafbfc'
      }}
    >
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #cbd5e1 1px, transparent 0)',
          backgroundSize: '40px 40px',
          zIndex: 0
        }}
      />

      {/* Container */}
      <div
        className="relative mx-auto about-container"
        style={{
          maxWidth: '1400px',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          zIndex: 10
        }}
      >
        {/* Editorial Header */}
        <header
          className="about-header"
          style={{
            borderBottom: '3px solid #0f172a',
            paddingBottom: '2rem',
            marginBottom: '2rem'
          }}
        >
          <div
            className="flex items-baseline gap-4 mb-2"
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '0.75rem',
              marginBottom: '0.5rem'
            }}
          >
            <span
              className="profile-label"
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#d97706',
                fontFamily: 'serif'
              }}
            >
              Profile
            </span>
            <div
              style={{
                flex: 1,
                height: '1px',
                backgroundColor: '#cbd5e1'
              }}
            />
          </div>
          <h2
            style={{
              fontSize: 'clamp(2rem, 8vw, 4rem)',
              fontWeight: 900,
              color: '#0f172a',
              lineHeight: 1.1,
              fontFamily: 'serif',
              marginBottom: '1rem',
              letterSpacing: '-0.02em'
            }}
          >
            About Me
          </h2>
          <p
            className="about-subtitle"
            style={{
              fontSize: '1rem',
              color: '#475569',
              lineHeight: 1.6,
              maxWidth: '42rem',
              fontStyle: 'italic'
            }}
          >
            A passionate mathematics student exploring the elegant intersections of theory and application
          </p>
        </header>

        {/* Two-Column Editorial Layout */}
        <div
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '2rem'
          }}
        >
          {/* Left Column - Primary Narrative */}
          <div
            className="about-left-column"
            style={{
              gridColumn: 'span 1'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem'
              }}
            >
              {/* Main Biography Article */}
              <article
                className="biography-card"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '0.5rem',
                  padding: '1.5rem',
                  boxShadow: '0 1px 3px rgba(15, 23, 42, 0.08)',
                  position: 'relative'
                }}
              >
                {/* Article Header */}
                <div
                  className="article-header"
                  style={{
                    borderBottom: '2px solid #f1f5f9',
                    paddingBottom: '1rem',
                    marginBottom: '1.5rem'
                  }}
                >
                  <div
                    className="flex items-center gap-3 mb-3"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      marginBottom: '0.5rem'
                    }}
                  >
                    <div
                      style={{
                        width: '2rem',
                        height: '2rem',
                        backgroundColor: '#0f172a',
                        borderRadius: '0.25rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <svg
                        style={{ width: '1rem', height: '1rem', color: '#ffffff' }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <h3
                      className="article-title"
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: '#0f172a',
                        fontFamily: 'serif'
                      }}
                    >
                      Background & Journey
                    </h3>
                  </div>
                  <p
                    className="article-subtitle"
                    style={{
                      fontSize: '0.8125rem',
                      color: '#64748b',
                      fontWeight: 500
                    }}
                  >
                    Understanding the mathematician behind the work
                  </p>
                </div>

                {/* Biography Content */}
                <div
                  className="biography-content"
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.75,
                    color: '#334155',
                    fontFamily: 'Georgia, serif',
                    textAlign: 'justify'
                  }}
                >
                  <p
                    style={{
                      marginBottom: '1rem'
                    }}
                  >
                    {personal?.longBio}
                  </p>
                </div>

                {/* Decorative Quote Mark */}
                <div
                  className="quote-decoration"
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    fontSize: '4rem',
                    fontFamily: 'serif',
                    color: '#f1f5f9',
                    lineHeight: 1,
                    userSelect: 'none',
                    pointerEvents: 'none'
                  }}
                >
                  "
                </div>
              </article>

              {/* Philosophy & Quote Row */}
              <div
                className="philosophy-quote-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(1, 1fr)',
                  gap: '1.5rem'
                }}
              >
                {/* Philosophy Card */}
                {personal?.philosophy && (
                  <article
                    className="philosophy-card"
                    style={{
                      backgroundColor: '#0f172a',
                      border: '1px solid #1e293b',
                      borderRadius: '0.5rem',
                      padding: '2rem',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: '1rem',
                        left: '0',
                        width: '4px',
                        height: '3rem',
                        backgroundColor: '#d97706'
                      }}
                    />
                    <div
                      className="mb-4"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        marginBottom: '1rem'
                      }}
                    >
                      <svg
                        style={{ width: '1.25rem', height: '1.25rem', color: '#d97706' }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                      <h3
                        style={{
                          fontSize: '0.875rem',
                          fontWeight: 700,
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase',
                          color: '#94a3b8'
                        }}
                      >
                        Philosophy
                      </h3>
                    </div>
                    <p
                      style={{
                        fontSize: '1rem',
                        lineHeight: 1.7,
                        color: '#e2e8f0',
                        fontStyle: 'italic',
                        fontFamily: 'Georgia, serif'
                      }}
                    >
                      "{personal.philosophy}"
                    </p>
                  </article>
                )}

                {/* Favorite Quote */}
                {personal?.quote && (
                  <article
                    className="quote-card"
                    style={{
                      backgroundColor: '#ffffff',
                      border: '3px solid #0f172a',
                      borderRadius: '0.5rem',
                      padding: '2rem',
                      position: 'relative'
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: '-1rem',
                        left: '2rem',
                        width: '3rem',
                        height: '3rem',
                        backgroundColor: '#d97706',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        color: '#ffffff',
                        fontFamily: 'serif',
                        fontWeight: 700
                      }}
                    >
                      "
                    </div>
                    <blockquote
                      style={{
                        fontSize: '1rem',
                        lineHeight: 1.7,
                        color: '#334155',
                        fontStyle: 'italic',
                        fontFamily: 'Georgia, serif',
                        paddingTop: '1rem'
                      }}
                    >
                      {personal.quote}
                    </blockquote>
                  </article>
                )}
              </div>

              {/* Research Interests */}
              <article
                className="research-interests-card"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '0.5rem',
                  padding: '1.5rem',
                  boxShadow: '0 1px 3px rgba(15, 23, 42, 0.08)'
                }}
              >
                <div
                  className="research-header"
                  style={{
                    borderBottom: '2px solid #f1f5f9',
                    paddingBottom: '1rem',
                    marginBottom: '1.5rem'
                  }}
                >
                  <div
                    className="flex items-center gap-3"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem'
                    }}
                  >
                    <div
                      style={{
                        width: '2rem',
                        height: '2rem',
                        backgroundColor: '#0f172a',
                        borderRadius: '0.25rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <svg
                        style={{ width: '1rem', height: '1rem', color: '#ffffff' }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        />
                      </svg>
                    </div>
                    <h3
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: '#0f172a',
                        fontFamily: 'serif'
                      }}
                    >
                      Research Interests
                    </h3>
                  </div>
                </div>

                <div
                  className="flex flex-wrap gap-3"
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.75rem'
                  }}
                >
                  {researchInterests.map((interest, idx) => (
                    <span
                      key={idx}
                      style={{
                        padding: '0.625rem 1.25rem',
                        backgroundColor: '#f8fafc',
                        border: '2px solid #e2e8f0',
                        color: '#0f172a',
                        borderRadius: '0.25rem',
                        fontSize: '0.9375rem',
                        fontWeight: 600,
                        letterSpacing: '0.01em'
                      }}
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          </div>

          {/* Right Column - Supporting Content (Sidebar) */}
          <aside
            className="about-sidebar"
            style={{
              gridColumn: 'span 1'
            }}
          >
            <div
              className="sidebar-content"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}
            >
              {/* Quick Info Card */}
              <div
                className="quick-info-card"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '0.5rem',
                  padding: '1.5rem',
                  boxShadow: '0 1px 3px rgba(15, 23, 42, 0.08)'
                }}
              >
                <h3
                  className="mb-6 pb-4"
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#0f172a',
                    borderBottom: '2px solid #0f172a',
                    paddingBottom: '1rem',
                    marginBottom: '1.5rem',
                    fontFamily: 'serif'
                  }}
                >
                  Quick Facts
                </h3>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem'
                  }}
                >
                  {/* Name */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.375rem',
                      paddingBottom: '1rem',
                      borderBottom: '1px solid #f1f5f9'
                    }}
                  >
                    <dt
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        color: '#64748b'
                      }}
                    >
                      Name
                    </dt>
                    <dd
                      style={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: '#0f172a'
                      }}
                    >
                      {personal?.name}
                    </dd>
                  </div>

                  {/* Location */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.375rem',
                      paddingBottom: '1rem',
                      borderBottom: '1px solid #f1f5f9'
                    }}
                  >
                    <dt
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        color: '#64748b'
                      }}
                    >
                      Location
                    </dt>
                    <dd
                      style={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: '#0f172a'
                      }}
                    >
                      {personal?.location}
                    </dd>
                  </div>

                  {/* Email */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.375rem'
                    }}
                  >
                    <dt
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        color: '#64748b'
                      }}
                    >
                      Email
                    </dt>
                    <dd>
                      <a
                        href={`mailto:${personal?.email}`}
                        style={{
                          fontSize: '0.9375rem',
                          fontWeight: 600,
                          color: '#1e40af',
                          textDecoration: 'underline',
                          textDecorationColor: '#93c5fd',
                          textUnderlineOffset: '3px'
                        }}
                      >
                        {personal?.email}
                      </a>
                    </dd>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div
                className="grid grid-cols-2 gap-4"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1rem'
                }}
              >
                {/* GPA */}
                <div
                  style={{
                    backgroundColor: '#0f172a',
                    border: '1px solid #1e293b',
                    borderRadius: '0.5rem',
                    padding: '2rem 1.5rem',
                    textAlign: 'center'
                  }}
                >
                  <div
                    style={{
                      fontSize: '2.5rem',
                      fontWeight: 900,
                      color: '#ffffff',
                      lineHeight: 1,
                      marginBottom: '0.5rem',
                      fontFamily: 'serif'
                    }}
                  >
                    3.88
                  </div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      color: '#94a3b8'
                    }}
                  >
                    GPA
                  </div>
                </div>

                {/* Papers */}
                <div
                  style={{
                    backgroundColor: '#d97706',
                    border: '1px solid #b45309',
                    borderRadius: '0.5rem',
                    padding: '2rem 1.5rem',
                    textAlign: 'center'
                  }}
                >
                  <div
                    style={{
                      fontSize: '2.5rem',
                      fontWeight: 900,
                      color: '#ffffff',
                      lineHeight: 1,
                      marginBottom: '0.5rem',
                      fontFamily: 'serif'
                    }}
                  >
                    2+
                  </div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      color: 'rgba(255, 255, 255, 0.9)'
                    }}
                  >
                    Papers
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div
                className="cta-card"
                style={{
                  backgroundColor: '#f8fafc',
                  border: '2px solid #e2e8f0',
                  borderRadius: '0.5rem',
                  padding: '2rem',
                  textAlign: 'center'
                }}
              >
                <div
                  style={{
                    width: '3.5rem',
                    height: '3.5rem',
                    backgroundColor: '#0f172a',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    marginBottom: '1.25rem'
                  }}
                >
                  <svg
                    style={{ width: '1.75rem', height: '1.75rem', color: '#ffffff' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h4
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#0f172a',
                    marginBottom: '0.75rem',
                    fontFamily: 'serif'
                  }}
                >
                  Let's Connect
                </h4>
                <p
                  style={{
                    fontSize: '0.9375rem',
                    color: '#475569',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem'
                  }}
                >
                  Open to research collaborations and graduate opportunities
                </p>
                <a
                  href="#contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '0.875rem 2rem',
                    backgroundColor: '#0f172a',
                    color: '#ffffff',
                    fontSize: '0.9375rem',
                    fontWeight: 700,
                    borderRadius: '0.25rem',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                    border: '2px solid #0f172a'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#1e293b';
                    e.currentTarget.style.borderColor = '#1e293b';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#0f172a';
                    e.currentTarget.style.borderColor = '#0f172a';
                  }}
                >
                  Get In Touch
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* Responsive Styles */}
        <style>
          {`
            /* Desktop and larger tablets */
            @media (min-width: 1024px) {
              .about-grid {
                grid-template-columns: 2fr 1fr !important;
                gap: 3rem !important;
              }

              .sidebar-content {
                position: sticky !important;
                top: 8rem !important;
              }

              .biography-card,
              .research-interests-card {
                padding: 2.5rem !important;
              }

              .biography-content {
                column-count: 2 !important;
                column-gap: 3rem !important;
                text-indent: 2em !important;
              }

              .quote-decoration {
                font-size: 8rem !important;
                top: 2rem !important;
                right: 2rem !important;
              }

              .about-container {
                padding-left: 2rem !important;
                padding-right: 2rem !important;
              }

              .about-section {
                padding-top: 4rem !important;
                padding-bottom: 4rem !important;
              }

              .about-header {
                padding-bottom: 3rem !important;
                margin-bottom: 4rem !important;
              }

              .profile-label {
                font-size: 0.875rem !important;
              }

              .about-subtitle {
                font-size: 1.25rem !important;
              }

              .article-title {
                font-size: 1.5rem !important;
              }

              .biography-content {
                font-size: 1.125rem !important;
              }

              .philosophy-card,
              .quote-card {
                padding: 2.5rem !important;
              }

              .quick-info-card,
              .cta-card {
                padding: 2.5rem !important;
              }
            }

            /* Tablet */
            @media (min-width: 768px) and (max-width: 1023px) {
              .about-grid {
                grid-template-columns: 1fr !important;
              }

              .about-container {
                padding-left: 1.5rem !important;
                padding-right: 1.5rem !important;
              }

              .biography-card,
              .research-interests-card {
                padding: 2rem !important;
              }

              .biography-content {
                column-count: 2 !important;
                column-gap: 2rem !important;
              }

              .quote-decoration {
                font-size: 6rem !important;
              }
            }

            /* Mobile */
            @media (max-width: 767px) {
              .about-grid {
                grid-template-columns: 1fr !important;
              }

              .biography-content {
                column-count: 1 !important;
                text-indent: 0 !important;
              }
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default AboutSection;
