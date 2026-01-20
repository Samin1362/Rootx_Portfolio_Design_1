import React from 'react';

const TeachingSection = ({ teaching }) => {
  if (!teaching || teaching.length === 0) return null;

  return (
    <section
      id="teaching"
      className="relative overflow-hidden teaching-section"
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
        className="relative mx-auto teaching-container"
        style={{
          maxWidth: '1400px',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          zIndex: 10
        }}
      >
        {/* Editorial Header */}
        <header
          className="teaching-header"
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
              className="teaching-label"
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#d97706',
                fontFamily: 'serif'
              }}
            >
              Mentorship
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
            Teaching Experience
          </h2>
          <p
            className="teaching-subtitle"
            style={{
              fontSize: '1rem',
              color: '#475569',
              lineHeight: 1.6,
              maxWidth: '42rem',
              fontStyle: 'italic'
            }}
          >
            Sharing knowledge and inspiring the next generation of mathematicians
          </p>
        </header>

        {/* Teaching Experience Cards */}
        <div
          className="teaching-list"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            maxWidth: '72rem',
            margin: '0 auto'
          }}
        >
          {teaching.map((exp, index) => {
            const isEven = index % 2 === 0;
            const headerBg = isEven ? '#0f172a' : '#d97706';
            const mathSymbol = isEven ? '∫' : '∑';

            return (
              <article
                key={exp.id}
                className="teaching-card"
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
                    backgroundColor: headerBg,
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
                    {mathSymbol}
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
                    {/* Left: Icon & Role */}
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
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
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
                          className="teaching-role"
                          style={{
                            fontSize: '1.5rem',
                            fontWeight: 700,
                            color: '#ffffff',
                            lineHeight: 1.3,
                            fontFamily: 'serif',
                            marginBottom: '0.25rem'
                          }}
                        >
                          {exp.role}
                        </h3>
                      </div>
                    </div>

                    {/* Right: Duration Badge */}
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
                        className="teaching-duration"
                        style={{
                          fontSize: '1rem',
                          fontWeight: 700,
                          color: '#ffffff',
                          fontFamily: 'serif'
                        }}
                      >
                        {exp.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div
                  className="teaching-card-body"
                  style={{
                    padding: '1.5rem'
                  }}
                >
                  {/* Institution */}
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
                          Institution
                        </p>
                        <p
                          style={{
                            fontSize: '0.9375rem',
                            fontWeight: 600,
                            color: '#0f172a'
                          }}
                        >
                          {exp.institution}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  {exp.description && (
                    <div
                      style={{
                        marginBottom: '1.5rem',
                        paddingBottom: '1.5rem',
                        borderBottom: '1px solid #f1f5f9'
                      }}
                    >
                      <p
                        style={{
                          fontSize: '0.9375rem',
                          lineHeight: 1.7,
                          color: '#334155',
                          fontFamily: 'Georgia, serif'
                        }}
                      >
                        {exp.description}
                      </p>
                    </div>
                  )}

                  {/* Courses */}
                  {exp.courses && exp.courses.length > 0 && (
                    <div
                      style={{
                        marginBottom: '1.5rem'
                      }}
                    >
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
                            backgroundColor: '#f1f5f9',
                            borderRadius: '0.25rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
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
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                            />
                          </svg>
                        </div>
                        <p
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                            color: '#64748b'
                          }}
                        >
                          Courses Taught
                        </p>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '0.5rem'
                        }}
                      >
                        {exp.courses.map((course, idx) => (
                          <span
                            key={idx}
                            style={{
                              padding: '0.5rem 1rem',
                              backgroundColor: '#f8fafc',
                              border: '1px solid #e2e8f0',
                              color: '#0f172a',
                              borderRadius: '0.25rem',
                              fontSize: '0.875rem',
                              fontWeight: 600
                            }}
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Responsibilities */}
                  {exp.responsibilities && exp.responsibilities.length > 0 && (
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
                            backgroundColor: '#f1f5f9',
                            borderRadius: '0.25rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
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
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <p
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                            color: '#64748b'
                          }}
                        >
                          Key Responsibilities
                        </p>
                      </div>
                      <ul
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.5rem'
                        }}
                      >
                        {exp.responsibilities.map((item, idx) => (
                          <li
                            key={idx}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '0.75rem',
                              fontSize: '0.9375rem',
                              color: '#334155'
                            }}
                          >
                            <span
                              style={{
                                width: '0.375rem',
                                height: '0.375rem',
                                backgroundColor: '#d97706',
                                borderRadius: '50%',
                                marginTop: '0.5rem',
                                flexShrink: 0
                              }}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Teaching Stats */}
        <div
          className="teaching-stats"
          style={{
            marginTop: '4rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '2rem',
            maxWidth: '56rem',
            margin: '4rem auto 0'
          }}
        >
          {/* Positions */}
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
              ∫
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
              {teaching.length}
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
              Teaching Positions
            </div>
          </div>

          {/* Courses */}
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
              {teaching.reduce((acc, exp) => acc + (exp.courses?.length || 0), 0)}
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
              Courses Taught
            </div>
          </div>

          {/* Institutions */}
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
              {new Set(teaching.map(t => t.institution)).size}
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
              Institutions
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>
        {`
          /* Desktop and larger tablets */
          @media (min-width: 1024px) {
            .teaching-container {
              padding-left: 2rem !important;
              padding-right: 2rem !important;
            }

            .teaching-section {
              padding-top: 4rem !important;
              padding-bottom: 4rem !important;
            }

            .teaching-header {
              padding-bottom: 3rem !important;
              margin-bottom: 4rem !important;
            }

            .teaching-label {
              font-size: 0.875rem !important;
            }

            .teaching-subtitle {
              font-size: 1.25rem !important;
            }

            .teaching-list {
              gap: 3rem !important;
            }

            .teaching-card-body {
              padding: 2.5rem !important;
            }

            .teaching-role {
              font-size: 2rem !important;
            }

            .teaching-duration {
              font-size: 1.25rem !important;
            }

            .teaching-stats {
              grid-template-columns: repeat(3, 1fr) !important;
              gap: 2rem !important;
            }
          }

          /* Tablet */
          @media (min-width: 768px) and (max-width: 1023px) {
            .teaching-container {
              padding-left: 1.5rem !important;
              padding-right: 1.5rem !important;
            }

            .teaching-card-body {
              padding: 2rem !important;
            }

            .teaching-role {
              font-size: 1.75rem !important;
            }

            .teaching-stats {
              grid-template-columns: repeat(3, 1fr) !important;
              gap: 1.5rem !important;
            }
          }

          /* Mobile */
          @media (max-width: 767px) {
            .teaching-role {
              font-size: 1.25rem !important;
            }

            .teaching-duration {
              font-size: 0.875rem !important;
            }

            .teaching-list {
              gap: 1.5rem !important;
            }

            .teaching-stats {
              grid-template-columns: 1fr !important;
              gap: 1rem !important;
              margin-top: 3rem !important;
            }
          }

          /* Hover effects */
          .teaching-card:hover {
            box-shadow: 0 10px 30px rgba(15, 23, 42, 0.15) !important;
            transform: translateY(-2px);
          }
        `}
      </style>
    </section>
  );
};

export default TeachingSection;
