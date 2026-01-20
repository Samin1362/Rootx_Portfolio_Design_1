import React, { useState } from 'react';

const ContactSection = ({ contact, socialLinks, personal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 5000);
  };

  const socials = [
    { name: 'GitHub', url: socialLinks?.github, icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' },
    { name: 'LinkedIn', url: socialLinks?.linkedin, icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
    { name: 'ResearchGate', url: socialLinks?.researchGate, icon: 'M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 00-.112.437 8.365 8.365 0 00-.078.53 9 9 0 00-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.121 0 00.014 1.017 9 9 0 00.05.727 7.946 7.946 0 00.077.53h-.005a3.334 3.334 0 00.113.438c.245.743.65 1.303 1.214 1.68.564.376 1.254.564 2.072.564.8 0 1.487-.188 2.06-.564.576-.377.988-.937 1.236-1.68.063-.186.11-.406.14-.66.03-.254.056-.55.077-.888a10.5 10.5 0 00.035-.888c.007-.354.011-.764.011-1.23 0-.467-.004-.877-.011-1.231a10.5 10.5 0 00-.035-.888 7.89 7.89 0 00-.077-.888 2.977 2.977 0 00-.14-.66c-.248-.743-.66-1.303-1.236-1.68C21.073.188 20.386 0 19.586 0z' },
    { name: 'Google Scholar', url: socialLinks?.googleScholar, icon: 'M12 24a7 7 0 110-14 7 7 0 010 14zm0-24L0 9.5l4.838 3.94A8 8 0 0112 9a8 8 0 017.162 4.44L24 9.5z' },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden contact-section"
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
        className="relative mx-auto contact-container"
        style={{
          maxWidth: '1400px',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          zIndex: 10
        }}
      >
        {/* Editorial Header */}
        <header
          className="contact-header"
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
              className="contact-label"
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#d97706',
                fontFamily: 'serif'
              }}
            >
              Let's Connect
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
            Get In Touch
          </h2>
          <p
            className="contact-subtitle"
            style={{
              fontSize: '1rem',
              color: '#475569',
              lineHeight: 1.6,
              maxWidth: '42rem',
              fontStyle: 'italic'
            }}
          >
            Open for research collaborations, academic opportunities, and mathematical discussions
          </p>
        </header>

        {/* Contact Content Grid */}
        <div
          className="contact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '2rem',
            maxWidth: '72rem',
            margin: '0 auto'
          }}
        >
          {/* Contact Information Card */}
          <article
            className="contact-info-card"
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
                backgroundColor: '#0f172a',
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
                ∞
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  position: 'relative',
                  zIndex: 1
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <h3
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    lineHeight: 1.3,
                    fontFamily: 'serif'
                  }}
                >
                  Contact Information
                </h3>
              </div>
            </div>

            {/* Card Body */}
            <div
              className="contact-info-body"
              style={{
                padding: '1.5rem'
              }}
            >
              {/* Email */}
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
                        color: '#64748b',
                        marginBottom: '0.25rem'
                      }}
                    >
                      Email Address
                    </p>
                    <a
                      href={`mailto:${contact?.email || personal?.email}`}
                      style={{
                        fontSize: '0.9375rem',
                        fontWeight: 600,
                        color: '#1e40af',
                        textDecoration: 'underline',
                        textDecorationColor: '#93c5fd',
                        textUnderlineOffset: '3px'
                      }}
                    >
                      {contact?.email || personal?.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
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
                        color: '#64748b',
                        marginBottom: '0.25rem'
                      }}
                    >
                      Location
                    </p>
                    <p
                      style={{
                        fontSize: '0.9375rem',
                        fontWeight: 600,
                        color: '#0f172a'
                      }}
                    >
                      {personal?.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Availability */}
              {contact?.availability && (
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
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
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
                        Availability Status
                      </p>
                      <p
                        style={{
                          fontSize: '0.9375rem',
                          fontWeight: 600,
                          color: '#059669'
                        }}
                      >
                        {contact.availability}
                      </p>
                    </div>
                  </div>
                </div>
              )}

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
                      color: '#64748b'
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
                          width: '3rem',
                          height: '3rem',
                          backgroundColor: '#f8fafc',
                          border: '2px solid #e2e8f0',
                          borderRadius: '0.25rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.2s',
                          color: '#64748b'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#0f172a';
                          e.currentTarget.style.borderColor = '#0f172a';
                          e.currentTarget.style.color = '#ffffff';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#f8fafc';
                          e.currentTarget.style.borderColor = '#e2e8f0';
                          e.currentTarget.style.color = '#64748b';
                        }}
                      >
                        <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="currentColor" viewBox="0 0 24 24">
                          <path d={social.icon} />
                        </svg>
                      </a>
                    )
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* Contact Form Card */}
          {contact?.formEnabled && (
            <article
              className="contact-form-card"
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
                  backgroundColor: '#d97706',
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
                  ✉
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    position: 'relative',
                    zIndex: 1
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
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </div>

                  <h3
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      lineHeight: 1.3,
                      fontFamily: 'serif'
                    }}
                  >
                    Send a Message
                  </h3>
                </div>
              </div>

              {/* Card Body - Form */}
              <div
                className="contact-form-body"
                style={{
                  padding: '1.5rem'
                }}
              >
                <form onSubmit={handleSubmit}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1.5rem'
                    }}
                  >
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="name"
                        style={{
                          display: 'block',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase',
                          color: '#64748b',
                          marginBottom: '0.5rem'
                        }}
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{
                          width: '100%',
                          padding: '0.875rem 1rem',
                          border: '2px solid #e2e8f0',
                          borderRadius: '0.25rem',
                          fontSize: '0.9375rem',
                          color: '#0f172a',
                          backgroundColor: '#ffffff',
                          transition: 'all 0.2s',
                          outline: 'none'
                        }}
                        placeholder="John Doe"
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#0f172a';
                          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(15, 23, 42, 0.1)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = '#e2e8f0';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="email"
                        style={{
                          display: 'block',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase',
                          color: '#64748b',
                          marginBottom: '0.5rem'
                        }}
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{
                          width: '100%',
                          padding: '0.875rem 1rem',
                          border: '2px solid #e2e8f0',
                          borderRadius: '0.25rem',
                          fontSize: '0.9375rem',
                          color: '#0f172a',
                          backgroundColor: '#ffffff',
                          transition: 'all 0.2s',
                          outline: 'none'
                        }}
                        placeholder="john@example.com"
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#0f172a';
                          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(15, 23, 42, 0.1)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = '#e2e8f0';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      />
                    </div>

                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="message"
                        style={{
                          display: 'block',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase',
                          color: '#64748b',
                          marginBottom: '0.5rem'
                        }}
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        style={{
                          width: '100%',
                          padding: '0.875rem 1rem',
                          border: '2px solid #e2e8f0',
                          borderRadius: '0.25rem',
                          fontSize: '0.9375rem',
                          color: '#0f172a',
                          backgroundColor: '#ffffff',
                          transition: 'all 0.2s',
                          outline: 'none',
                          resize: 'vertical',
                          fontFamily: 'inherit'
                        }}
                        placeholder="Your message here..."
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#0f172a';
                          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(15, 23, 42, 0.1)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = '#e2e8f0';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
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
                        border: '2px solid #0f172a',
                        cursor: 'pointer',
                        width: '100%'
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
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                      Send Message
                    </button>

                    {/* Success Message */}
                    {status === 'success' && (
                      <div
                        style={{
                          padding: '1rem',
                          backgroundColor: '#f0fdf4',
                          border: '2px solid #059669',
                          borderRadius: '0.25rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                      >
                        <svg
                          style={{ width: '1.25rem', height: '1.25rem', color: '#059669' }}
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
                        <span
                          style={{
                            fontSize: '0.9375rem',
                            fontWeight: 600,
                            color: '#059669'
                          }}
                        >
                          Message sent successfully!
                        </span>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </article>
          )}
        </div>
      </div>

      {/* Responsive Styles */}
      <style>
        {`
          /* Desktop and larger tablets */
          @media (min-width: 1024px) {
            .contact-container {
              padding-left: 2rem !important;
              padding-right: 2rem !important;
            }

            .contact-section {
              padding-top: 4rem !important;
              padding-bottom: 4rem !important;
            }

            .contact-header {
              padding-bottom: 3rem !important;
              margin-bottom: 4rem !important;
            }

            .contact-label {
              font-size: 0.875rem !important;
            }

            .contact-subtitle {
              font-size: 1.25rem !important;
            }

            .contact-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 3rem !important;
            }

            .contact-info-body,
            .contact-form-body {
              padding: 2.5rem !important;
            }
          }

          /* Tablet */
          @media (min-width: 768px) and (max-width: 1023px) {
            .contact-container {
              padding-left: 1.5rem !important;
              padding-right: 1.5rem !important;
            }

            .contact-grid {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }

            .contact-info-body,
            .contact-form-body {
              padding: 2rem !important;
            }
          }

          /* Mobile */
          @media (max-width: 767px) {
            .contact-grid {
              gap: 1.5rem !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default ContactSection;
