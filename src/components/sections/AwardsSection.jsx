import React from 'react';

const AwardsSection = ({ awards }) => {
  if (!awards || awards.length === 0) return null;

  // Category configurations with colors
  const categoryConfig = {
    'Academic': {
      bgColor: '#0f172a',
      icon: '∫',
      lightBg: '#f8fafc'
    },
    'Competition': {
      bgColor: '#d97706',
      icon: '★',
      lightBg: '#fef3c7'
    },
    'Research': {
      bgColor: '#0f172a',
      icon: '∂',
      lightBg: '#f8fafc'
    },
    'Leadership': {
      bgColor: '#d97706',
      icon: '∑',
      lightBg: '#fef3c7'
    }
  };

  return (
    <section
      id="awards"
      className="relative overflow-hidden awards-section"
      style={{
        paddingTop: '3rem',
        paddingBottom: '3rem',
        backgroundColor: '#ffffff'
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
        className="relative mx-auto awards-container"
        style={{
          maxWidth: '1400px',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          zIndex: 10
        }}
      >
        {/* Editorial Header */}
        <header
          className="awards-header"
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
              className="awards-label"
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#d97706',
                fontFamily: 'serif'
              }}
            >
              Recognition
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
            Awards & Achievements
          </h2>
          <p
            className="awards-subtitle"
            style={{
              fontSize: '1rem',
              color: '#475569',
              lineHeight: 1.6,
              maxWidth: '42rem',
              fontStyle: 'italic'
            }}
          >
            Recognition for excellence in mathematics and academic pursuits
          </p>
        </header>

        {/* Awards Grid */}
        <div
          className="awards-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '2rem',
            maxWidth: '72rem',
            margin: '0 auto'
          }}
        >
          {awards.map((award) => {
            const config = categoryConfig[award.category] || categoryConfig['Academic'];

            return (
              <article
                key={award.id}
                className="award-card"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '0.5rem',
                  overflow: 'hidden',
                  boxShadow: '0 1px 3px rgba(15, 23, 42, 0.08)',
                  position: 'relative',
                  transition: 'all 0.3s'
                }}
              >
                {/* Card Header */}
                <div
                  style={{
                    backgroundColor: config.bgColor,
                    padding: '1.5rem',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Decorative pattern */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.5rem',
                      right: '1rem',
                      fontSize: '4rem',
                      opacity: 0.1,
                      fontFamily: 'serif',
                      color: '#ffffff',
                      userSelect: 'none',
                      pointerEvents: 'none'
                    }}
                  >
                    {config.icon}
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '1rem',
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    {/* Left: Trophy Icon & Title */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        flex: 1,
                        minWidth: '0'
                      }}
                    >
                      <div
                        style={{
                          width: '3rem',
                          height: '3rem',
                          backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          borderRadius: '0.25rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
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
                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                          />
                        </svg>
                      </div>

                      <div
                        style={{
                          flex: 1,
                          minWidth: '0'
                        }}
                      >
                        <h3
                          className="award-title"
                          style={{
                            fontSize: '1.5rem',
                            fontWeight: 700,
                            color: '#ffffff',
                            lineHeight: 1.3,
                            fontFamily: 'serif',
                            marginBottom: '0.25rem'
                          }}
                        >
                          {award.title}
                        </h3>
                      </div>
                    </div>

                    {/* Right: Year Badge */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                    >
                      <div
                        style={{
                          width: '1.5rem',
                          height: '1.5rem',
                          backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          borderRadius: '0.25rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <svg
                          style={{ width: '0.875rem', height: '0.875rem', color: '#ffffff' }}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <span
                        className="award-year"
                        style={{
                          fontSize: '1.25rem',
                          fontWeight: 700,
                          color: '#ffffff',
                          fontFamily: 'serif'
                        }}
                      >
                        {award.year}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div
                  className="award-card-body"
                  style={{
                    padding: '1.5rem'
                  }}
                >
                  {/* Issuer */}
                  <div
                    style={{
                      marginBottom: '1.5rem',
                      paddingBottom: '1.5rem',
                      borderBottom: '1px solid #f1f5f9'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem'
                      }}
                    >
                      <div
                        style={{
                          width: '1.5rem',
                          height: '1.5rem',
                          backgroundColor: '#f1f5f9',
                          borderRadius: '0.25rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: '0.125rem'
                        }}
                      >
                        <svg
                          style={{ width: '0.875rem', height: '0.875rem', color: '#64748b' }}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
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
                            color: '#64748b',
                            marginBottom: '0.25rem'
                          }}
                        >
                          Awarded By
                        </p>
                        <p
                          style={{
                            fontSize: '0.9375rem',
                            fontWeight: 600,
                            color: '#0f172a'
                          }}
                        >
                          {award.issuer}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '0.625rem 1.25rem',
                        backgroundColor: config.lightBg,
                        border: `2px solid ${config.bgColor}`,
                        borderRadius: '0.25rem',
                        fontSize: '0.875rem',
                        fontWeight: 700,
                        color: config.bgColor,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase'
                      }}
                    >
                      {award.category}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Stats Summary */}
        <div
          className="awards-stats"
          style={{
            marginTop: '4rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '2rem',
            maxWidth: '56rem',
            margin: '4rem auto 0'
          }}
        >
          {/* Total Awards */}
          <div
            style={{
              backgroundColor: '#0f172a',
              border: '1px solid #1e293b',
              borderRadius: '0.5rem',
              padding: '2rem',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                fontSize: '4rem',
                opacity: 0.05,
                fontFamily: 'serif',
                color: '#ffffff',
                userSelect: 'none',
                pointerEvents: 'none'
              }}
            >
              ★
            </div>
            <div
              style={{
                fontSize: '3rem',
                fontWeight: 900,
                color: '#ffffff',
                lineHeight: 1,
                marginBottom: '0.5rem',
                fontFamily: 'serif',
                position: 'relative',
                zIndex: 1
              }}
            >
              {awards.length}
            </div>
            <div
              style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: '#94a3b8',
                position: 'relative',
                zIndex: 1
              }}
            >
              Total Awards
            </div>
          </div>

          {/* Categories */}
          <div
            style={{
              backgroundColor: '#d97706',
              border: '1px solid #b45309',
              borderRadius: '0.5rem',
              padding: '2rem',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                fontSize: '4rem',
                opacity: 0.1,
                fontFamily: 'serif',
                color: '#ffffff',
                userSelect: 'none',
                pointerEvents: 'none'
              }}
            >
              ∑
            </div>
            <div
              style={{
                fontSize: '3rem',
                fontWeight: 900,
                color: '#ffffff',
                lineHeight: 1,
                marginBottom: '0.5rem',
                fontFamily: 'serif',
                position: 'relative',
                zIndex: 1
              }}
            >
              {new Set(awards.map(a => a.category)).size}
            </div>
            <div
              style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.9)',
                position: 'relative',
                zIndex: 1
              }}
            >
              Categories
            </div>
          </div>

          {/* Years */}
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '2px solid #0f172a',
              borderRadius: '0.5rem',
              padding: '2rem',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                fontSize: '4rem',
                opacity: 0.03,
                fontFamily: 'serif',
                color: '#0f172a',
                userSelect: 'none',
                pointerEvents: 'none'
              }}
            >
              ∞
            </div>
            <div
              style={{
                fontSize: '3rem',
                fontWeight: 900,
                color: '#0f172a',
                lineHeight: 1,
                marginBottom: '0.5rem',
                fontFamily: 'serif',
                position: 'relative',
                zIndex: 1
              }}
            >
              {new Set(awards.map(a => a.year)).size}+
            </div>
            <div
              style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: '#64748b',
                position: 'relative',
                zIndex: 1
              }}
            >
              Years of Excellence
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>
        {`
          /* Desktop and larger tablets */
          @media (min-width: 1024px) {
            .awards-container {
              padding-left: 2rem !important;
              padding-right: 2rem !important;
            }

            .awards-section {
              padding-top: 4rem !important;
              padding-bottom: 4rem !important;
            }

            .awards-header {
              padding-bottom: 3rem !important;
              margin-bottom: 4rem !important;
            }

            .awards-label {
              font-size: 0.875rem !important;
            }

            .awards-subtitle {
              font-size: 1.25rem !important;
            }

            .awards-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 3rem !important;
            }

            .award-card-body {
              padding: 2.5rem !important;
            }

            .award-title {
              font-size: 2rem !important;
            }

            .award-year {
              font-size: 1.5rem !important;
            }

            .awards-stats {
              grid-template-columns: repeat(3, 1fr) !important;
              gap: 2rem !important;
            }
          }

          /* Tablet */
          @media (min-width: 768px) and (max-width: 1023px) {
            .awards-container {
              padding-left: 1.5rem !important;
              padding-right: 1.5rem !important;
            }

            .awards-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 2rem !important;
            }

            .award-card-body {
              padding: 2rem !important;
            }

            .award-title {
              font-size: 1.75rem !important;
            }

            .awards-stats {
              grid-template-columns: repeat(3, 1fr) !important;
              gap: 1.5rem !important;
            }
          }

          /* Mobile */
          @media (max-width: 767px) {
            .award-title {
              font-size: 1.25rem !important;
            }

            .award-year {
              font-size: 1.125rem !important;
            }

            .awards-grid {
              gap: 1.5rem !important;
            }

            .awards-stats {
              grid-template-columns: 1fr !important;
              gap: 1rem !important;
              margin-top: 3rem !important;
            }
          }

          /* Hover effects */
          .award-card:hover {
            box-shadow: 0 10px 30px rgba(15, 23, 42, 0.15) !important;
            transform: translateY(-2px);
          }
        `}
      </style>
    </section>
  );
};

export default AwardsSection;
