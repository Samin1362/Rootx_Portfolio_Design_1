import React from 'react';
import { useRouteError } from 'react-router';

const ErrorPage = () => {
  const error = useRouteError();
  const mathSymbols = ['∑', 'π', '∞', '∫', '√', 'Δ', 'θ', 'λ', '∂', 'φ'];

  // Pre-computed sizes for consistent rendering (avoiding Math.random in render)
  const symbolSizes = [2.5, 4.2, 3.1, 2.8, 4.5, 3.8, 2.3, 4.8, 3.5, 2.9];

  return (
    <div
      className="error-page"
      style={{
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '1rem'
      }}
    >
      {/* Subtle Background Pattern */}
      <div
        className="background-pattern"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: 0.3,
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
            fontSize: `${symbolSizes[index]}rem`,
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

      {/* Error Content Container */}
      <div
        className="error-container"
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '42rem',
          width: '100%',
          textAlign: 'center',
          animation: 'fadeInUp 0.8s ease-out'
        }}
      >
        {/* Animated 404 Badge */}
        <div
          style={{
            display: 'inline-flex',
            marginBottom: '2rem'
          }}
        >
          <div
            className="error-badge"
            style={{
              position: 'relative',
              width: '10rem',
              height: '10rem',
              backgroundColor: '#d97706',
              borderRadius: '0.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              border: '3px solid #b45309',
              boxShadow: '0 20px 60px rgba(217, 119, 6, 0.4)',
              animation: 'float 4s ease-in-out infinite',
              overflow: 'hidden'
            }}
          >
            {/* Background Math Symbol */}
            <span
              style={{
                position: 'absolute',
                fontSize: '8rem',
                opacity: 0.1,
                fontFamily: 'serif',
                color: '#ffffff',
                userSelect: 'none',
                pointerEvents: 'none',
                animation: 'rotate-slow 20s linear infinite'
              }}
            >
              ∞
            </span>

            {/* 404 Text */}
            <span
              style={{
                position: 'relative',
                fontSize: '3rem',
                fontWeight: 900,
                color: '#ffffff',
                fontFamily: 'serif',
                lineHeight: 1,
                marginBottom: '0.25rem'
              }}
            >
              404
            </span>
            <span
              style={{
                position: 'relative',
                fontSize: '0.875rem',
                color: 'rgba(255, 255, 255, 0.95)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}
            >
              Error
            </span>
          </div>
        </div>

        {/* Error Message */}
        <div
          style={{
            marginBottom: '2.5rem'
          }}
        >
          <h1
            className="error-title"
            style={{
              fontSize: 'clamp(2rem, 8vw, 3.5rem)',
              fontWeight: 900,
              color: '#0f172a',
              lineHeight: 1.2,
              fontFamily: 'serif',
              marginBottom: '1rem',
              letterSpacing: '-0.02em'
            }}
          >
            Page Not Found
          </h1>

          {/* Decorative Line */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '1.5rem'
            }}
          >
            <div
              style={{
                width: '4rem',
                height: '3px',
                backgroundColor: '#d97706'
              }}
            />
            <span
              style={{
                fontSize: '1.5rem',
                color: '#d97706',
                fontFamily: 'serif'
              }}
            >
              ∅
            </span>
            <div
              style={{
                width: '4rem',
                height: '3px',
                backgroundColor: '#d97706'
              }}
            />
          </div>

          <p
            className="error-description"
            style={{
              fontSize: 'clamp(1rem, 4vw, 1.25rem)',
              color: '#64748b',
              lineHeight: 1.7,
              maxWidth: '36rem',
              margin: '0 auto 1rem',
              fontStyle: 'italic'
            }}
          >
            The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Technical Error Details (if available) */}
          {error && (
            <div
              className="error-details"
              style={{
                marginTop: '1.5rem',
                padding: '1rem',
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '0.5rem',
                maxWidth: '32rem',
                margin: '1.5rem auto 0'
              }}
            >
              <p
                style={{
                  fontSize: '0.875rem',
                  color: '#475569',
                  fontWeight: 600,
                  marginBottom: '0.5rem',
                  textAlign: 'left'
                }}
              >
                Technical Details:
              </p>
              <p
                style={{
                  fontSize: '0.875rem',
                  color: '#64748b',
                  fontFamily: 'monospace',
                  textAlign: 'left',
                  wordBreak: 'break-word'
                }}
              >
                {error.statusText || error.message || 'Unknown error'}
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div
          className="error-actions"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center',
            marginBottom: '2rem'
          }}
        >
          <a
            href="/"
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Back to Home
          </a>

          <button
            onClick={() => window.history.back()}
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
              border: '2px solid #0f172a',
              cursor: 'pointer'
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
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Go Back
          </button>
        </div>

        {/* Helpful Links */}
        <div
          className="helpful-links"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center'
          }}
        >
          <a
            href="/#about"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.25rem',
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '0.25rem',
              fontSize: '0.9375rem',
              fontWeight: 600,
              color: '#334155',
              textDecoration: 'none',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0f172a';
              e.currentTarget.style.borderColor = '#0f172a';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f8fafc';
              e.currentTarget.style.borderColor = '#e2e8f0';
              e.currentTarget.style.color = '#334155';
            }}
          >
            About
          </a>
          <a
            href="/#projects"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.25rem',
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '0.25rem',
              fontSize: '0.9375rem',
              fontWeight: 600,
              color: '#334155',
              textDecoration: 'none',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0f172a';
              e.currentTarget.style.borderColor = '#0f172a';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f8fafc';
              e.currentTarget.style.borderColor = '#e2e8f0';
              e.currentTarget.style.color = '#334155';
            }}
          >
            Projects
          </a>
          <a
            href="/#contact"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.25rem',
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '0.25rem',
              fontSize: '0.9375rem',
              fontWeight: 600,
              color: '#334155',
              textDecoration: 'none',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0f172a';
              e.currentTarget.style.borderColor = '#0f172a';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f8fafc';
              e.currentTarget.style.borderColor = '#e2e8f0';
              e.currentTarget.style.color = '#334155';
            }}
          >
            Contact
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

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes rotate-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          /* Responsive Styles */
          @media (max-width: 767px) {
            .error-badge {
              width: 8rem !important;
              height: 8rem !important;
            }

            .error-badge span:first-of-type {
              font-size: 6rem !important;
            }

            .error-badge span:nth-of-type(2) {
              font-size: 2.5rem !important;
            }

            .error-actions {
              flex-direction: column !important;
            }

            .error-actions a,
            .error-actions button {
              width: 100% !important;
            }

            .helpful-links {
              flex-direction: column !important;
            }

            .helpful-links a {
              width: 100% !important;
              justify-content: center !important;
            }

            .math-symbol {
              font-size: 1.5rem !important;
            }
          }

          @media (min-width: 768px) and (max-width: 1023px) {
            .error-badge {
              width: 9rem !important;
              height: 9rem !important;
            }
          }

          /* Smooth hover transitions */
          .error-actions a,
          .error-actions button,
          .helpful-links a {
            will-change: transform;
          }

          /* Prevent text selection on decorative elements */
          .background-pattern,
          .math-symbol {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }

          /* Accessibility improvements */
          @media (prefers-reduced-motion: reduce) {
            .error-badge,
            .math-symbol,
            .error-container {
              animation: none !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ErrorPage;
