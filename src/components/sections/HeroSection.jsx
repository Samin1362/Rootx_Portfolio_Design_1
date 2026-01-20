import React from 'react';

const HeroSection = ({ personal, hero }) => {
  const mathSymbols = ['∑', 'π', '∞', '∫', '√', 'Δ', 'θ', 'λ', '∂', 'φ'];

  return (
    <section
      id="hero"
      className="relative overflow-hidden hero-section"
      style={{
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'center'
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

      {/* Floating Math Symbols */}
      {mathSymbols.map((symbol, index) => (
        <span
          key={index}
          className="math-symbol"
          style={{
            position: 'absolute',
            fontFamily: 'serif',
            fontSize: `${2 + Math.random() * 3}rem`,
            color: '#e2e8f0',
            opacity: 0.4,
            userSelect: 'none',
            pointerEvents: 'none',
            top: `${10 + (index * 8)}%`,
            left: `${5 + (index * 9)}%`,
            animation: `float ${5 + index}s ease-in-out infinite`,
            animationDelay: `${index * 0.5}s`,
            zIndex: 1
          }}
        >
          {symbol}
        </span>
      ))}

      {/* Container */}
      <div
        className="relative hero-container"
        style={{
          maxWidth: '1400px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          paddingTop: '4rem',
          paddingBottom: '3rem',
          width: '100%',
          zIndex: 10
        }}
      >
        {/* Hero Content Grid */}
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '3rem',
            alignItems: 'center'
          }}
        >
          {/* Text Content */}
          <div
            className="hero-content"
            style={{
              gridColumn: 'span 1',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem'
            }}
          >
            {/* Status Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                backgroundColor: '#fef3c7',
                border: '2px solid #d97706',
                borderRadius: '9999px',
                width: 'fit-content'
              }}
            >
              <span
                style={{
                  width: '0.5rem',
                  height: '0.5rem',
                  backgroundColor: '#d97706',
                  borderRadius: '50%',
                  animation: 'pulse 2s ease-in-out infinite'
                }}
              />
              <span
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  color: '#d97706',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}
              >
                Open for Opportunities
              </span>
            </div>

            {/* Editorial Header */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '0.75rem',
                  marginBottom: '1rem'
                }}
              >
                <span
                  className="hero-label"
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#d97706',
                    fontFamily: 'serif'
                  }}
                >
                  Welcome
                </span>
                <div
                  style={{
                    flex: 1,
                    height: '2px',
                    backgroundColor: '#cbd5e1'
                  }}
                />
              </div>

              {/* Name */}
              <h1
                className="hero-name"
                style={{
                  fontSize: 'clamp(2.5rem, 10vw, 5rem)',
                  fontWeight: 900,
                  color: '#0f172a',
                  lineHeight: 1.1,
                  fontFamily: 'serif',
                  marginBottom: '1rem',
                  letterSpacing: '-0.02em'
                }}
              >
                {personal?.name}
              </h1>

              {/* Title */}
              <p
                className="hero-title"
                style={{
                  fontSize: 'clamp(1.25rem, 4vw, 2rem)',
                  fontWeight: 600,
                  color: '#475569',
                  lineHeight: 1.3,
                  marginBottom: '1.5rem'
                }}
              >
                {personal?.title}
              </p>

              {/* Border */}
              <div
                style={{
                  height: '3px',
                  width: '6rem',
                  backgroundColor: '#d97706',
                  marginBottom: '1.5rem'
                }}
              />

              {/* Tagline */}
              <p
                className="hero-tagline"
                style={{
                  fontSize: '1.125rem',
                  color: '#64748b',
                  lineHeight: 1.7,
                  maxWidth: '42rem',
                  fontStyle: 'italic'
                }}
              >
                {personal?.tagline}
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className="hero-cta"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem'
              }}
            >
              <a
                href={hero?.ctaPrimary?.link}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '1rem 2rem',
                  backgroundColor: '#d97706',
                  color: '#ffffff',
                  fontSize: '1rem',
                  fontWeight: 700,
                  borderRadius: '0.25rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  border: '2px solid #d97706',
                  boxShadow: '0 4px 12px rgba(217, 119, 6, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#b45309';
                  e.currentTarget.style.borderColor = '#b45309';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(217, 119, 6, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#d97706';
                  e.currentTarget.style.borderColor = '#d97706';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(217, 119, 6, 0.3)';
                }}
              >
                {hero?.ctaPrimary?.label}
                <svg
                  style={{ width: '1.25rem', height: '1.25rem' }}
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

              <a
                href={hero?.ctaSecondary?.link}
                download
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '1rem 2rem',
                  backgroundColor: '#ffffff',
                  color: '#0f172a',
                  fontSize: '1rem',
                  fontWeight: 700,
                  borderRadius: '0.25rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  border: '2px solid #0f172a'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0f172a';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.color = '#0f172a';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg
                  style={{ width: '1.25rem', height: '1.25rem' }}
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
                {hero?.ctaSecondary?.label}
              </a>
            </div>

            {/* Contact Info Cards */}
            <div
              className="hero-info"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem'
              }}
            >
              {/* Location */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.875rem 1.25rem',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '0.25rem'
                }}
              >
                <div
                  style={{
                    width: '2rem',
                    height: '2rem',
                    backgroundColor: '#f1f5f9',
                    borderRadius: '0.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
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
                <span
                  style={{
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    color: '#334155'
                  }}
                >
                  {personal?.location}
                </span>
              </div>

              {/* Email */}
              <a
                href={`mailto:${personal?.email}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.875rem 1.25rem',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '0.25rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0f172a';
                  e.currentTarget.style.borderColor = '#0f172a';
                  const svg = e.currentTarget.querySelector('svg');
                  const span = e.currentTarget.querySelector('span');
                  if (svg) svg.style.color = '#d97706';
                  if (span) span.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#f8fafc';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  const svg = e.currentTarget.querySelector('svg');
                  const span = e.currentTarget.querySelector('span');
                  if (svg) svg.style.color = '#d97706';
                  if (span) span.style.color = '#334155';
                }}
              >
                <div
                  style={{
                    width: '2rem',
                    height: '2rem',
                    backgroundColor: '#f1f5f9',
                    borderRadius: '0.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <svg
                    style={{ width: '1rem', height: '1rem', color: '#d97706', transition: 'color 0.2s' }}
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
                <span
                  style={{
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    color: '#334155',
                    transition: 'color 0.2s'
                  }}
                >
                  {personal?.email}
                </span>
              </a>
            </div>
          </div>

          {/* Profile Visual */}
          <div
            className="hero-profile"
            style={{
              gridColumn: 'span 1',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '28rem'
              }}
            >
              {/* Main Profile Card */}
              <div
                className="profile-card"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '0.5rem',
                  overflow: 'hidden',
                  boxShadow: '0 10px 40px rgba(15, 23, 42, 0.1)',
                  position: 'relative'
                }}
              >
                {/* Profile Image Container */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    paddingTop: '100%',
                    backgroundColor: '#f8fafc',
                    overflow: 'hidden'
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {personal?.profileImage ? (
                      <img
                        src={personal.profileImage}
                        alt={personal?.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div
                      style={{
                        display: personal?.profileImage ? 'none' : 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%'
                      }}
                    >
                      <span
                        style={{
                          fontSize: '8rem',
                          fontWeight: 900,
                          color: '#0f172a',
                          fontFamily: 'serif'
                        }}
                      >
                        {personal?.name?.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Profile Info Footer */}
                <div
                  style={{
                    padding: '1.5rem',
                    backgroundColor: '#0f172a',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.5rem',
                      right: '1rem',
                      fontSize: '4rem',
                      opacity: 0.05,
                      fontFamily: 'serif',
                      color: '#ffffff',
                      userSelect: 'none',
                      pointerEvents: 'none'
                    }}
                  >
                    ∞
                  </div>
                  <div
                    style={{
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        fontFamily: 'serif',
                        marginBottom: '0.5rem'
                      }}
                    >
                      {personal?.name}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.9375rem',
                        color: '#cbd5e1',
                        fontWeight: 500
                      }}
                    >
                      {personal?.title}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge - Top Right */}
              <div
                className="floating-badge-1"
                style={{
                  position: 'absolute',
                  top: '-1rem',
                  right: '-1rem',
                  width: '5rem',
                  height: '5rem',
                  backgroundColor: '#d97706',
                  borderRadius: '0.5rem',
                  boxShadow: '0 8px 24px rgba(217, 119, 6, 0.4)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #b45309',
                  animation: 'float 6s ease-in-out infinite',
                  zIndex: 2
                }}
              >
                <span
                  style={{
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    fontFamily: 'serif'
                  }}
                >
                  ∑
                </span>
                <span
                  style={{
                    fontSize: '0.75rem',
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  Math
                </span>
              </div>

              {/* Floating Badge - Bottom Left */}
              <div
                className="floating-badge-2"
                style={{
                  position: 'absolute',
                  bottom: '-1rem',
                  left: '-1rem',
                  width: '5rem',
                  height: '5rem',
                  backgroundColor: '#0f172a',
                  borderRadius: '0.5rem',
                  boxShadow: '0 8px 24px rgba(15, 23, 42, 0.4)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #1e293b',
                  animation: 'floatReverse 7s ease-in-out infinite',
                  zIndex: 2
                }}
              >
                <span
                  style={{
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    fontFamily: 'serif'
                  }}
                >
                  ∫
                </span>
                <span
                  style={{
                    fontSize: '0.75rem',
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  Analysis
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="scroll-indicator"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            marginTop: '4rem'
          }}
        >
          <span
            style={{
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#64748b',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            Scroll to explore
          </span>
          <a
            href="#about"
            style={{
              width: '2rem',
              height: '3.5rem',
              border: '2px solid #d97706',
              borderRadius: '9999px',
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '0.5rem',
              transition: 'all 0.2s',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#0f172a';
              const dot = e.currentTarget.querySelector('div');
              if (dot) dot.style.backgroundColor = '#0f172a';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#d97706';
              const dot = e.currentTarget.querySelector('div');
              if (dot) dot.style.backgroundColor = '#d97706';
            }}
          >
            <div
              style={{
                width: '0.375rem',
                height: '0.75rem',
                backgroundColor: '#d97706',
                borderRadius: '9999px',
                animation: 'bounce 2s infinite',
                transition: 'background-color 0.2s'
              }}
            />
          </a>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(3deg);
            }
          }

          @keyframes floatReverse {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(-3deg);
            }
          }

          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }

          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-8px);
            }
          }

          /* Desktop and larger tablets */
          @media (min-width: 1024px) {
            .hero-container {
              padding-left: 2rem !important;
              padding-right: 2rem !important;
              padding-top: 5rem !important;
              padding-bottom: 4rem !important;
            }

            .hero-grid {
              grid-template-columns: 1fr 1fr !important;
              gap: 4rem !important;
            }

            .hero-label {
              font-size: 1rem !important;
            }

            .profile-card {
              max-width: 24rem !important;
              margin-left: auto !important;
            }

            .scroll-indicator {
              margin-top: 6rem !important;
            }
          }

          /* Tablet */
          @media (min-width: 768px) and (max-width: 1023px) {
            .hero-container {
              padding-left: 1.5rem !important;
              padding-right: 1.5rem !important;
            }

            .hero-grid {
              gap: 3rem !important;
            }
          }

          /* Mobile */
          @media (max-width: 767px) {
            .hero-cta {
              flex-direction: column !important;
            }

            .hero-cta a {
              width: 100% !important;
            }

            .hero-info {
              flex-direction: column !important;
            }

            .hero-info > * {
              width: 100% !important;
            }

            .floating-badge-1,
            .floating-badge-2 {
              width: 4rem !important;
              height: 4rem !important;
            }

            .floating-badge-1 span:first-child,
            .floating-badge-2 span:first-child {
              font-size: 1.5rem !important;
            }

            .scroll-indicator {
              display: none !important;
            }

            .math-symbol {
              display: none !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
