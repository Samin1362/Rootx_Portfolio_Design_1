import React from 'react';

const EducationSection = ({ education }) => {
  return (
    <section
      id="education"
      className="relative overflow-hidden education-section"
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
        className="relative mx-auto education-container"
        style={{
          maxWidth: '1400px',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          zIndex: 10
        }}
      >
        {/* Editorial Header */}
        <header
          className="education-header"
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
              className="education-label"
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#d97706',
                fontFamily: 'serif'
              }}
            >
              Academic Journey
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
            Education
          </h2>
          <p
            className="education-subtitle"
            style={{
              fontSize: '1rem',
              color: '#475569',
              lineHeight: 1.6,
              maxWidth: '42rem',
              fontStyle: 'italic'
            }}
          >
            Building a strong foundation in mathematical sciences through rigorous academic training
          </p>
        </header>

        {/* Education Cards */}
        <div
          className="education-grid"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            maxWidth: '56rem',
            margin: '0 auto'
          }}
        >
          {education?.map((edu, index) => (
            <article
              key={edu.id}
              className="education-card"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '0.5rem',
                overflow: 'hidden',
                boxShadow: '0 1px 3px rgba(15, 23, 42, 0.08)',
                position: 'relative'
              }}
            >
              {/* Card Header with colored accent */}
              <div
                style={{
                  backgroundColor: index % 2 === 0 ? '#0f172a' : '#d97706',
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
                  {index % 2 === 0 ? '∑' : '∫'}
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  {/* Duration Badge */}
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      alignSelf: 'flex-start'
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
                      className="education-duration"
                      style={{
                        fontSize: '0.8125rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        letterSpacing: '0.025em'
                      }}
                    >
                      {edu.duration}
                    </span>
                  </div>

                  {/* Degree */}
                  <h3
                    className="education-degree"
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      lineHeight: 1.3,
                      fontFamily: 'serif'
                    }}
                  >
                    {edu.degree}
                  </h3>

                  {/* Institution */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      flexWrap: 'wrap'
                    }}
                  >
                    <svg
                      style={{ width: '1rem', height: '1rem', color: 'rgba(255, 255, 255, 0.7)', flexShrink: 0 }}
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
                    <span
                      style={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: 'rgba(255, 255, 255, 0.95)'
                      }}
                    >
                      {edu.institution}
                    </span>
                  </div>

                  {/* Location */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <svg
                      style={{ width: '0.875rem', height: '0.875rem', color: 'rgba(255, 255, 255, 0.6)', flexShrink: 0 }}
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
                    <span
                      style={{
                        fontSize: '0.875rem',
                        color: 'rgba(255, 255, 255, 0.8)'
                      }}
                    >
                      {edu.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div
                className="education-card-body"
                style={{
                  padding: '1.5rem'
                }}
              >
                {/* GPA */}
                {edu.gpa && (
                  <div
                    style={{
                      marginBottom: '1.5rem',
                      paddingBottom: '1.5rem',
                      borderBottom: '1px solid #f1f5f9'
                    }}
                  >
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '0.75rem 1.25rem',
                        backgroundColor: '#f8fafc',
                        border: '2px solid #e2e8f0',
                        borderRadius: '0.25rem'
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase',
                          color: '#64748b'
                        }}
                      >
                        GPA
                      </span>
                      <span
                        style={{
                          fontSize: '1.5rem',
                          fontWeight: 900,
                          color: '#0f172a',
                          fontFamily: 'serif'
                        }}
                      >
                        {edu.gpa}
                      </span>
                    </div>
                  </div>
                )}

                {/* Honors */}
                {edu.honors && edu.honors.length > 0 && (
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
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        />
                      </svg>
                      <h4
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase',
                          color: '#64748b'
                        }}
                      >
                        Honors & Awards
                      </h4>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.5rem'
                      }}
                    >
                      {edu.honors.map((honor, idx) => (
                        <span
                          key={idx}
                          style={{
                            padding: '0.5rem 1rem',
                            backgroundColor: '#fff7ed',
                            border: '1px solid #fed7aa',
                            color: '#c2410c',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            borderRadius: '0.25rem'
                          }}
                        >
                          {honor}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Coursework */}
                {edu.coursework && edu.coursework.length > 0 && (
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '0.75rem'
                      }}
                    >
                      <svg
                        style={{ width: '1rem', height: '1rem', color: '#1e40af' }}
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
                      <h4
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase',
                          color: '#64748b'
                        }}
                      >
                        Key Coursework
                      </h4>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.5rem'
                      }}
                    >
                      {edu.coursework.map((course, idx) => (
                        <span
                          key={idx}
                          style={{
                            padding: '0.5rem 1rem',
                            backgroundColor: '#f8fafc',
                            border: '1px solid #e2e8f0',
                            color: '#334155',
                            fontSize: '0.875rem',
                            fontWeight: 500,
                            borderRadius: '0.25rem'
                          }}
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Responsive Styles */}
      <style>
        {`
          /* Desktop and larger tablets */
          @media (min-width: 1024px) {
            .education-container {
              padding-left: 2rem !important;
              padding-right: 2rem !important;
            }

            .education-section {
              padding-top: 4rem !important;
              padding-bottom: 4rem !important;
            }

            .education-header {
              padding-bottom: 3rem !important;
              margin-bottom: 4rem !important;
            }

            .education-label {
              font-size: 0.875rem !important;
            }

            .education-subtitle {
              font-size: 1.25rem !important;
            }

            .education-card-body {
              padding: 2.5rem !important;
            }

            .education-degree {
              font-size: 2rem !important;
            }

            .education-duration {
              font-size: 0.875rem !important;
            }

            .education-grid {
              gap: 3rem !important;
            }
          }

          /* Tablet */
          @media (min-width: 768px) and (max-width: 1023px) {
            .education-container {
              padding-left: 1.5rem !important;
              padding-right: 1.5rem !important;
            }

            .education-card-body {
              padding: 2rem !important;
            }

            .education-degree {
              font-size: 1.75rem !important;
            }
          }

          /* Mobile */
          @media (max-width: 767px) {
            .education-degree {
              font-size: 1.25rem !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default EducationSection;
