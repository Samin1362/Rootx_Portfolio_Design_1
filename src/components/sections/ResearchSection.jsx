import React from 'react';

const ResearchSection = ({ research }) => {
  return (
    <section
      id="research"
      className="relative overflow-hidden research-section"
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
        className="relative mx-auto research-container"
        style={{
          maxWidth: '1400px',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          zIndex: 10
        }}
      >
        {/* Editorial Header */}
        <header
          className="research-header"
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
              className="research-label"
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#d97706',
                fontFamily: 'serif'
              }}
            >
              Academic Contributions
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
            Research
          </h2>
          <p
            className="research-subtitle"
            style={{
              fontSize: '1rem',
              color: '#475569',
              lineHeight: 1.6,
              maxWidth: '42rem',
              fontStyle: 'italic'
            }}
          >
            Exploring mathematical theories and their real-world applications through rigorous research
          </p>
        </header>

        {/* Research Cards Grid */}
        <div
          className="research-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '2rem',
            maxWidth: '72rem',
            margin: '0 auto'
          }}
        >
          {research?.map((item, index) => (
            <article
              key={item.id}
              className="research-card"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '0.5rem',
                overflow: 'hidden',
                boxShadow: '0 1px 3px rgba(15, 23, 42, 0.08)',
                position: 'relative'
              }}
            >
              {/* Card Header */}
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
                  {index % 2 === 0 ? '∂' : '∫'}
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  {/* Status & Year */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '0.75rem'
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '0.375rem 0.875rem',
                        backgroundColor: item.status === 'Published'
                          ? 'rgba(255, 255, 255, 0.25)'
                          : 'rgba(255, 255, 255, 0.15)',
                        borderRadius: '0.25rem',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase'
                      }}
                    >
                      {item.status}
                    </span>
                    <span
                      style={{
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: 'rgba(255, 255, 255, 0.7)'
                      }}
                    >
                      {item.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="research-title"
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      lineHeight: 1.3,
                      fontFamily: 'serif'
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Research Areas */}
                  {item.area && item.area.length > 0 && (
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.5rem'
                      }}
                    >
                      {item.area.map((area, idx) => (
                        <span
                          key={idx}
                          style={{
                            padding: '0.25rem 0.75rem',
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                            color: '#ffffff',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            borderRadius: '0.25rem',
                            letterSpacing: '0.025em'
                          }}
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div
                className="research-card-body"
                style={{
                  padding: '1.5rem'
                }}
              >
                {/* Abstract */}
                <div
                  style={{
                    marginBottom: '1.5rem',
                    paddingBottom: '1.5rem',
                    borderBottom: '2px solid #f1f5f9'
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
                      style={{ width: '1rem', height: '1rem', color: '#0f172a' }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
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
                      Abstract
                    </h4>
                  </div>
                  <p
                    style={{
                      fontSize: '1rem',
                      lineHeight: 1.75,
                      color: '#334155',
                      fontFamily: 'Georgia, serif',
                      textAlign: 'justify'
                    }}
                  >
                    {item.abstract}
                  </p>
                </div>

                {/* Supervisor & Co-authors */}
                {(item.supervisor || (item.coAuthors && item.coAuthors.length > 0)) && (
                  <div
                    style={{
                      marginBottom: '1.5rem',
                      paddingBottom: '1.5rem',
                      borderBottom: '1px solid #f1f5f9'
                    }}
                  >
                    {item.supervisor && (
                      <div
                        style={{
                          marginBottom: item.coAuthors && item.coAuthors.length > 0 ? '1rem' : '0'
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
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
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
                              Supervisor
                            </p>
                            <p
                              style={{
                                fontSize: '0.9375rem',
                                fontWeight: 600,
                                color: '#0f172a'
                              }}
                            >
                              {item.supervisor}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {item.coAuthors && item.coAuthors.length > 0 && (
                      <div>
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
                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
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
                              Co-authors
                            </p>
                            <p
                              style={{
                                fontSize: '0.9375rem',
                                fontWeight: 500,
                                color: '#334155'
                              }}
                            >
                              {item.coAuthors.join(', ')}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Tags */}
                {item.tags && item.tags.length > 0 && (
                  <div
                    style={{
                      marginBottom: '1.5rem'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.5rem'
                      }}
                    >
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          style={{
                            padding: '0.375rem 0.75rem',
                            backgroundColor: '#f1f5f9',
                            color: '#475569',
                            fontSize: '0.8125rem',
                            fontWeight: 500,
                            borderRadius: '0.25rem',
                            fontFamily: 'monospace'
                          }}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Download Button */}
                {item.pdf && (
                  <div
                    style={{
                      paddingTop: '1rem',
                      borderTop: '2px solid #f1f5f9'
                    }}
                  >
                    <a
                      href={item.pdf}
                      download
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
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Download Paper
                    </a>
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
            .research-container {
              padding-left: 2rem !important;
              padding-right: 2rem !important;
            }

            .research-section {
              padding-top: 4rem !important;
              padding-bottom: 4rem !important;
            }

            .research-header {
              padding-bottom: 3rem !important;
              margin-bottom: 4rem !important;
            }

            .research-label {
              font-size: 0.875rem !important;
            }

            .research-subtitle {
              font-size: 1.25rem !important;
            }

            .research-card-body {
              padding: 2.5rem !important;
            }

            .research-title {
              font-size: 2rem !important;
            }

            .research-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 2.5rem !important;
            }
          }

          /* Tablet */
          @media (min-width: 768px) and (max-width: 1023px) {
            .research-container {
              padding-left: 1.5rem !important;
              padding-right: 1.5rem !important;
            }

            .research-card-body {
              padding: 2rem !important;
            }

            .research-title {
              font-size: 1.75rem !important;
            }
          }

          /* Mobile */
          @media (max-width: 767px) {
            .research-title {
              font-size: 1.25rem !important;
            }

            .research-grid {
              gap: 1.5rem !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default ResearchSection;
