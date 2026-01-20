import React from 'react';

const PublicationsSection = ({ publications }) => {
  if (!publications || publications.length === 0) return null;

  return (
    <section
      id="publications"
      className="relative overflow-hidden publications-section"
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
        className="relative mx-auto publications-container"
        style={{
          maxWidth: '1400px',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          zIndex: 10
        }}
      >
        {/* Editorial Header */}
        <header
          className="publications-header"
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
              className="publications-label"
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#d97706',
                fontFamily: 'serif'
              }}
            >
              Academic Work
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
            Publications
          </h2>
          <p
            className="publications-subtitle"
            style={{
              fontSize: '1rem',
              color: '#475569',
              lineHeight: 1.6,
              maxWidth: '42rem',
              fontStyle: 'italic'
            }}
          >
            Academic contributions and conference presentations in mathematical research
          </p>
        </header>

        {/* Publications List */}
        <div
          className="publications-list"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            maxWidth: '56rem',
            margin: '0 auto'
          }}
        >
          {publications.map((pub, index) => (
            <article
              key={pub.id}
              className="publication-card"
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
                  {index % 2 === 0 ? '∂' : '∮'}
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
                  {/* Year & Type */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '0.75rem'
                    }}
                  >
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
                        className="publication-year"
                        style={{
                          fontSize: '1.25rem',
                          fontWeight: 700,
                          color: '#ffffff',
                          fontFamily: 'serif'
                        }}
                      >
                        {pub.year}
                      </span>
                    </div>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '0.375rem 0.875rem',
                        backgroundColor: pub.type === 'Journal'
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
                      {pub.type}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="publication-title"
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      lineHeight: 1.3,
                      fontFamily: 'serif'
                    }}
                  >
                    {pub.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div
                className="publication-card-body"
                style={{
                  padding: '1.5rem'
                }}
              >
                {/* Authors */}
                {pub.authors && pub.authors.length > 0 && (
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
                          Authors
                        </p>
                        <p
                          style={{
                            fontSize: '0.9375rem',
                            fontWeight: 500,
                            color: '#334155'
                          }}
                        >
                          {pub.authors.join(', ')}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Venue */}
                {pub.venue && (
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
                          Published In
                        </p>
                        <p
                          style={{
                            fontSize: '0.9375rem',
                            fontWeight: 600,
                            color: '#0f172a'
                          }}
                        >
                          {pub.venue}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Citation */}
                {pub.citation && (
                  <div
                    style={{
                      marginBottom: '1.5rem',
                      padding: '1.5rem',
                      backgroundColor: '#f8fafc',
                      borderLeft: '4px solid #0f172a',
                      borderRadius: '0.25rem',
                      position: 'relative'
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: '0.5rem',
                        right: '0.75rem',
                        fontSize: '3rem',
                        fontFamily: 'serif',
                        color: '#0f172a',
                        opacity: 0.05,
                        userSelect: 'none',
                        pointerEvents: 'none'
                      }}
                    >
                      "
                    </div>
                    <p
                      style={{
                        fontSize: '0.875rem',
                        lineHeight: 1.6,
                        color: '#475569',
                        fontFamily: 'monospace',
                        position: 'relative',
                        zIndex: 1
                      }}
                    >
                      {pub.citation}
                    </p>
                  </div>
                )}

                {/* Download Button */}
                {pub.pdf && (
                  <div
                    style={{
                      paddingTop: '1rem',
                      borderTop: '2px solid #f1f5f9'
                    }}
                  >
                    <a
                      href={pub.pdf}
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
                      Download PDF
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
            .publications-container {
              padding-left: 2rem !important;
              padding-right: 2rem !important;
            }

            .publications-section {
              padding-top: 4rem !important;
              padding-bottom: 4rem !important;
            }

            .publications-header {
              padding-bottom: 3rem !important;
              margin-bottom: 4rem !important;
            }

            .publications-label {
              font-size: 0.875rem !important;
            }

            .publications-subtitle {
              font-size: 1.25rem !important;
            }

            .publication-card-body {
              padding: 2.5rem !important;
            }

            .publication-title {
              font-size: 2rem !important;
            }

            .publication-year {
              font-size: 1.5rem !important;
            }

            .publications-list {
              gap: 3rem !important;
            }
          }

          /* Tablet */
          @media (min-width: 768px) and (max-width: 1023px) {
            .publications-container {
              padding-left: 1.5rem !important;
              padding-right: 1.5rem !important;
            }

            .publication-card-body {
              padding: 2rem !important;
            }

            .publication-title {
              font-size: 1.75rem !important;
            }
          }

          /* Mobile */
          @media (max-width: 767px) {
            .publication-title {
              font-size: 1.25rem !important;
            }

            .publication-year {
              font-size: 1.125rem !important;
            }

            .publications-list {
              gap: 1.5rem !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default PublicationsSection;
