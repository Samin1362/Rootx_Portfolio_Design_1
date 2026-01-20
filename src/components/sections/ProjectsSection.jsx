import React from 'react';

const ProjectsSection = ({ projects }) => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden projects-section"
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
        className="relative mx-auto projects-container"
        style={{
          maxWidth: '1400px',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          zIndex: 10
        }}
      >
        {/* Editorial Header */}
        <header
          className="projects-header"
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
              className="projects-label"
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#d97706',
                fontFamily: 'serif'
              }}
            >
              What I've Built
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
            Projects
          </h2>
          <p
            className="projects-subtitle"
            style={{
              fontSize: '1rem',
              color: '#475569',
              lineHeight: 1.6,
              maxWidth: '42rem',
              fontStyle: 'italic'
            }}
          >
            Mathematical concepts brought to life through code and practical applications
          </p>
        </header>

        {/* Projects Grid */}
        <div
          className="projects-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '2rem',
            maxWidth: '72rem',
            margin: '0 auto'
          }}
        >
          {projects?.map((project, index) => (
            <article
              key={project.id}
              className="project-card"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '0.5rem',
                overflow: 'hidden',
                boxShadow: '0 1px 3px rgba(15, 23, 42, 0.08)',
                position: 'relative'
              }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    zIndex: 20,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                    padding: '0.5rem 0.875rem',
                    backgroundColor: '#d97706',
                    borderRadius: '0.25rem',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <svg
                    style={{ width: '0.875rem', height: '0.875rem' }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Featured
                </div>
              )}

              {/* Project Image */}
              <div
                style={{
                  height: '16rem',
                  backgroundColor: index % 2 === 0 ? '#0f172a' : '#d97706',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Decorative pattern */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    fontSize: '6rem',
                    opacity: 0.1,
                    fontFamily: 'serif',
                    color: '#ffffff',
                    userSelect: 'none',
                    pointerEvents: 'none'
                  }}
                >
                  {index % 2 === 0 ? '∑' : '∫'}
                </div>

                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <span
                      style={{
                        fontSize: '4rem',
                        opacity: 0.3,
                        fontFamily: 'serif',
                        color: '#ffffff'
                      }}
                    >
                      {index % 2 === 0 ? '∂' : 'Δ'}
                    </span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div
                className="project-card-body"
                style={{
                  padding: '1.5rem'
                }}
              >
                {/* Title */}
                <h3
                  className="project-title"
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#0f172a',
                    lineHeight: 1.3,
                    fontFamily: 'serif',
                    marginBottom: '1rem'
                  }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <div
                  style={{
                    marginBottom: '1.5rem',
                    paddingBottom: '1.5rem',
                    borderBottom: '2px solid #f1f5f9'
                  }}
                >
                  <p
                    style={{
                      fontSize: '1rem',
                      lineHeight: 1.75,
                      color: '#334155',
                      fontFamily: 'Georgia, serif'
                    }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Math Concepts */}
                {project.mathConcepts && project.mathConcepts.length > 0 && (
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
                          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
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
                        Math Concepts
                      </h4>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.5rem'
                      }}
                    >
                      {project.mathConcepts.map((concept, idx) => (
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
                          {concept}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                {project.technologies && project.technologies.length > 0 && (
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
                        style={{ width: '1rem', height: '1rem', color: '#1e40af' }}
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
                      <h4
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase',
                          color: '#64748b'
                        }}
                      >
                        Tech Stack
                      </h4>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.5rem'
                      }}
                    >
                      {project.technologies.map((tech, idx) => (
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
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                {(project.github || project.demo) && (
                  <div
                    style={{
                      paddingTop: '1.5rem',
                      borderTop: '2px solid #f1f5f9',
                      display: 'flex',
                      gap: '0.75rem',
                      flexWrap: 'wrap'
                    }}
                  >
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.5rem',
                          padding: '0.875rem 1.75rem',
                          backgroundColor: '#ffffff',
                          color: '#0f172a',
                          fontSize: '0.9375rem',
                          fontWeight: 700,
                          borderRadius: '0.25rem',
                          textDecoration: 'none',
                          transition: 'all 0.2s',
                          border: '2px solid #0f172a',
                          flex: '1',
                          minWidth: 'fit-content'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#0f172a';
                          e.currentTarget.style.color = '#ffffff';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#ffffff';
                          e.currentTarget.style.color = '#0f172a';
                        }}
                      >
                        <svg
                          style={{ width: '1.125rem', height: '1.125rem' }}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        View Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.5rem',
                          padding: '0.875rem 1.75rem',
                          backgroundColor: '#0f172a',
                          color: '#ffffff',
                          fontSize: '0.9375rem',
                          fontWeight: 700,
                          borderRadius: '0.25rem',
                          textDecoration: 'none',
                          transition: 'all 0.2s',
                          border: '2px solid #0f172a',
                          flex: '1',
                          minWidth: 'fit-content'
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
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        Live Demo
                      </a>
                    )}
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
            .projects-container {
              padding-left: 2rem !important;
              padding-right: 2rem !important;
            }

            .projects-section {
              padding-top: 4rem !important;
              padding-bottom: 4rem !important;
            }

            .projects-header {
              padding-bottom: 3rem !important;
              margin-bottom: 4rem !important;
            }

            .projects-label {
              font-size: 0.875rem !important;
            }

            .projects-subtitle {
              font-size: 1.25rem !important;
            }

            .project-card-body {
              padding: 2.5rem !important;
            }

            .project-title {
              font-size: 2rem !important;
            }

            .projects-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 2.5rem !important;
            }
          }

          /* Tablet */
          @media (min-width: 768px) and (max-width: 1023px) {
            .projects-container {
              padding-left: 1.5rem !important;
              padding-right: 1.5rem !important;
            }

            .project-card-body {
              padding: 2rem !important;
            }

            .project-title {
              font-size: 1.75rem !important;
            }
          }

          /* Mobile */
          @media (max-width: 767px) {
            .project-title {
              font-size: 1.25rem !important;
            }

            .projects-grid {
              gap: 1.5rem !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default ProjectsSection;
