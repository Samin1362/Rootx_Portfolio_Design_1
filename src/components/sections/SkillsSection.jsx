import React from 'react';

const SkillsSection = ({ skills }) => {
  const SkillBar = ({ name, level }) => (
    <div style={{ marginBottom: '1.25rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '0.5rem'
        }}
      >
        <span
          style={{
            fontSize: '0.9375rem',
            fontWeight: 600,
            color: '#0f172a'
          }}
        >
          {name}
        </span>
        <span
          style={{
            fontSize: '0.875rem',
            fontWeight: 700,
            color: '#d97706',
            fontFamily: 'monospace'
          }}
        >
          {level}%
        </span>
      </div>
      <div
        style={{
          height: '0.625rem',
          backgroundColor: '#f1f5f9',
          borderRadius: '0.25rem',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${level}%`,
            background: 'linear-gradient(to right, #0f172a, #1e293b)',
            borderRadius: '0.25rem',
            transition: 'width 1s ease-out'
          }}
        />
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      className="relative overflow-hidden skills-section"
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
        className="relative mx-auto skills-container"
        style={{
          maxWidth: '1400px',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          zIndex: 10
        }}
      >
        {/* Editorial Header */}
        <header
          className="skills-header"
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
              className="skills-label"
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#d97706',
                fontFamily: 'serif'
              }}
            >
              My Expertise
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
            Skills & Expertise
          </h2>
          <p
            className="skills-subtitle"
            style={{
              fontSize: '1rem',
              color: '#475569',
              lineHeight: 1.6,
              maxWidth: '42rem',
              fontStyle: 'italic'
            }}
          >
            Technical and mathematical competencies developed through rigorous study and practice
          </p>
        </header>

        {/* Skills Grid */}
        <div
          className="skills-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '2rem',
            maxWidth: '72rem',
            margin: '0 auto'
          }}
        >
          {/* Mathematics Skills */}
          {skills?.mathematics && skills.mathematics.length > 0 && (
            <article
              className="skill-card"
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
                  ∑
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
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      borderRadius: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <svg
                      style={{ width: '1.5rem', height: '1.5rem', color: '#ffffff' }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3
                      className="skill-category-title"
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        lineHeight: 1.2,
                        fontFamily: 'serif'
                      }}
                    >
                      Mathematics
                    </h3>
                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: 'rgba(255, 255, 255, 0.7)'
                      }}
                    >
                      Core competencies
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div
                className="skill-card-body"
                style={{
                  padding: '1.5rem'
                }}
              >
                {skills.mathematics.map((skill, idx) => (
                  <SkillBar key={idx} name={skill.name} level={skill.level} />
                ))}
              </div>
            </article>
          )}

          {/* Programming Skills */}
          {skills?.programming && skills.programming.length > 0 && (
            <article
              className="skill-card"
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
                  ∫
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
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      borderRadius: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <svg
                      style={{ width: '1.5rem', height: '1.5rem', color: '#ffffff' }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3
                      className="skill-category-title"
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        lineHeight: 1.2,
                        fontFamily: 'serif'
                      }}
                    >
                      Programming
                    </h3>
                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: 'rgba(255, 255, 255, 0.7)'
                      }}
                    >
                      Languages & frameworks
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div
                className="skill-card-body"
                style={{
                  padding: '1.5rem'
                }}
              >
                {skills.programming.map((skill, idx) => (
                  <SkillBar key={idx} name={skill.name} level={skill.level} />
                ))}
              </div>
            </article>
          )}

          {/* Tools & Software */}
          {skills?.tools && skills.tools.length > 0 && (
            <article
              className="skill-card"
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
                  λ
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
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      borderRadius: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <svg
                      style={{ width: '1.5rem', height: '1.5rem', color: '#ffffff' }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3
                      className="skill-category-title"
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        lineHeight: 1.2,
                        fontFamily: 'serif'
                      }}
                    >
                      Tools & Software
                    </h3>
                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: 'rgba(255, 255, 255, 0.7)'
                      }}
                    >
                      Daily drivers
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div
                className="skill-card-body"
                style={{
                  padding: '1.5rem'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.75rem'
                  }}
                >
                  {skills.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      style={{
                        padding: '0.625rem 1.25rem',
                        backgroundColor: '#f1f5f9',
                        border: '1px solid #e2e8f0',
                        color: '#0f172a',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        borderRadius: '0.25rem'
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          )}

          {/* Soft Skills */}
          {skills?.softSkills && skills.softSkills.length > 0 && (
            <article
              className="skill-card"
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
                  θ
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
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      borderRadius: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <svg
                      style={{ width: '1.5rem', height: '1.5rem', color: '#ffffff' }}
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
                    <h3
                      className="skill-category-title"
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        lineHeight: 1.2,
                        fontFamily: 'serif'
                      }}
                    >
                      Soft Skills
                    </h3>
                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: 'rgba(255, 255, 255, 0.7)'
                      }}
                    >
                      Professional abilities
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div
                className="skill-card-body"
                style={{
                  padding: '1.5rem'
                }}
              >
                <div
                  className="soft-skills-grid"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '0.75rem'
                  }}
                >
                  {skills.softSkills.map((skill, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '0.875rem',
                        backgroundColor: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        borderRadius: '0.25rem'
                      }}
                    >
                      <div
                        style={{
                          width: '0.5rem',
                          height: '0.5rem',
                          backgroundColor: '#d97706',
                          borderRadius: '50%',
                          flexShrink: 0
                        }}
                      />
                      <span
                        style={{
                          fontSize: '0.9375rem',
                          fontWeight: 500,
                          color: '#334155'
                        }}
                      >
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
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
            .skills-container {
              padding-left: 2rem !important;
              padding-right: 2rem !important;
            }

            .skills-section {
              padding-top: 4rem !important;
              padding-bottom: 4rem !important;
            }

            .skills-header {
              padding-bottom: 3rem !important;
              margin-bottom: 4rem !important;
            }

            .skills-label {
              font-size: 0.875rem !important;
            }

            .skills-subtitle {
              font-size: 1.25rem !important;
            }

            .skill-card-body {
              padding: 2.5rem !important;
            }

            .skill-category-title {
              font-size: 2rem !important;
            }

            .skills-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 2.5rem !important;
            }
          }

          /* Tablet */
          @media (min-width: 768px) and (max-width: 1023px) {
            .skills-container {
              padding-left: 1.5rem !important;
              padding-right: 1.5rem !important;
            }

            .skill-card-body {
              padding: 2rem !important;
            }

            .skill-category-title {
              font-size: 1.75rem !important;
            }
          }

          /* Mobile */
          @media (max-width: 767px) {
            .skill-category-title {
              font-size: 1.25rem !important;
            }

            .skills-grid {
              gap: 1.5rem !important;
            }

            .soft-skills-grid {
              grid-template-columns: repeat(1, 1fr) !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default SkillsSection;
