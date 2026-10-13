import React from 'react';
import { Link } from 'react-router-dom';
import { getProjects } from '../data/projectsData';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink, FiLock, FiInfo } from 'react-icons/fi';

function Project({ theme }) {
    const isBlack = theme === 'black';
    const projects = getProjects();

    const groupedProjects = projects.reduce((acc, project) => {
        const year = project.year || '2026';
        if (!acc[year]) {
            acc[year] = [];
        }
        acc[year].push(project);
        return acc;
    }, {});

    const sortedYears = Object.keys(groupedProjects).sort((a, b) => b - a);

    return (
        <section id="projects" className={`py-md-5 pt-5 ${isBlack ? 'bg-black text-light' : 'bg-white text-dark'}`}>
            <div className="container p-3 px-md-5">
                
                <div className="mb-md-5 mb-5">
                    <h2 className="mb-2">Featured <span className="h2-span">Projects</span></h2>
                    <p className="subhead text-muted">
                        A selection of web applications, systems, and tools I have built or am currently developing, organized by timeline.
                    </p>
                </div>

                <div className="d-flex flex-column gap-2">
                    {sortedYears.map((year, yearIdx) => {
                        const isEven = yearIdx % 2 === 0;
                        const dotColor = isBlack ? '#6c757d' : '#212529';

                        return (
                            <div key={year} className="timeline-group">
                                <div className="d-flex align-items-center mb-2">
                                    {isEven ? (
                                        <>
                                            <span className="fs-4 me-3">{year}</span>
                                            <div 
                                                className="flex-grow-1" 
                                                style={{ 
                                                    height: '2px', 
                                                    backgroundImage: `radial-gradient(circle, ${dotColor} 35%, transparent 40%)`, 
                                                    backgroundSize: '12px 2px', 
                                                    backgroundRepeat: 'repeat-x',
                                                    opacity: 0.6 
                                                }}
                                            ></div>
                                        </>
                                    ) : (
                                        <>
                                            <div 
                                                className="flex-grow-1" 
                                                style={{ 
                                                    height: '2px', 
                                                    backgroundImage: `radial-gradient(circle, ${dotColor} 35%, transparent 40%)`, 
                                                    backgroundSize: '12px 2px', 
                                                    backgroundRepeat: 'repeat-x',
                                                    opacity: 0.6 
                                                }}
                                            ></div>
                                            <span className="fs-4 ms-3">{year}</span>
                                        </>
                                    )}
                                </div>

                                <div className="row g-3 g-md-4">
                                    {groupedProjects[year].map((project, idx) => {
                                        const hasValidLink = project.link && project.link !== '#' && project.link.trim() !== '';
                                        const hasValidGithub = project.github && project.github !== '#' && project.github.trim() !== '';
                                        const hasAnyLink = hasValidLink || hasValidGithub;
                                        const primaryImage = project.images && project.images.length > 0 ? project.images[0] : null;

                                        return (
                                            <div key={`proj-${year}-${idx}`} className="col-6 col-md-4">
                                                <div 
                                                    className={`card h-100 shadow-sm overflow-hidden d-flex flex-column justify-content-between custom-card-radius ${
                                                        isBlack ? 'bg-black text-light' : 'bg-white text-dark'
                                                    }`}
                                                >
                                                    <div>
                                                        {primaryImage && (
                                                            <div className="position-relative overflow-hidden border-bottom project-img">
                                                                <img 
                                                                    src={primaryImage.img} 
                                                                    alt={project.title} 
                                                                    className="w-100 h-100 object-fit-fill" 
                                                              
                                                                />
                                                            </div>
                                                        )}
                                                        <div className="p-2 p-md-4">
                                                            <h5 className="mb-1 text-truncate">{project.title}</h5>
                                                            
                                                            {project.subtitle && (
                                                                <p className="text-muted small mb-2 fw-medium text-truncate d-none d-md-block">
                                                                    {project.subtitle}
                                                                </p>
                                                            )}
                                                            
                                                            <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-3">
                                                                <div className="d-flex align-items-center gap-3">
                                                                    {hasAnyLink ? (
                                                                        <>
                                                                            {hasValidLink && (
                                                                                <a 
                                                                                    href={project.link} 
                                                                                    target="_blank" 
                                                                                    rel="noopener noreferrer" 
                                                                                    className={`text-decoration-none d-flex align-items-center gap-1 small ${isBlack ? 'text-light' : 'text-dark'}`}
                                                                                    title={project.linkType === 'live' ? 'View Live Site' : 'View Demo'}
                                                                                >
                                                                                    <FiExternalLink size={15} /> 
                                                                                    <span>{project.linkType === 'live' ? 'Live' : 'Demo'}</span>
                                                                                </a>
                                                                            )}
                                                                            {hasValidGithub && (
                                                                                <a 
                                                                                    href={project.github} 
                                                                                    target="_blank" 
                                                                                    rel="noopener noreferrer" 
                                                                                    className={`text-decoration-none d-flex align-items-center gap-1 small ${isBlack ? 'text-light' : 'text-dark'}`}
                                                                                    title="View Source Code"
                                                                                >
                                                                                    <FaGithub size={15} /> 
                                                                                    <span>Code</span>
                                                                                </a>
                                                                            )}
                                                                        </>
                                                                    ) : (
                                                                        <span className="text-muted d-flex align-items-center gap-1 small opacity-75 private">
                                                                            <FiLock size={13} />
                                                                            <span>Private</span>
                                                                        </span>
                                                                    )}
                                                                </div>

                                                                <Link 
                                                                    to={`/project-details/${encodeURIComponent(project.title.toLowerCase())}`} 
                                                                    className={`btn btn-sm ${isBlack ? 'btn-outline-light' : 'btn-outline-dark'} d-flex align-items-center gap-1`}
                                                                    title="View Full Details"
                                                                >
                                                                    <FiInfo size={14} />
                                                                    <span>Details</span>
                                                                </Link>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}

export default Project;