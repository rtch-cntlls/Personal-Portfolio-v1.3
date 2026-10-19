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

                <div className="d-flex flex-column gap-4">
                    {sortedYears.map((year, yearIdx) => {
                        const isEven = yearIdx % 2 === 0;
                        const dotColor = isBlack ? '#6c757d' : '#212529';

                        return (
                            <div key={year} className="timeline-group">
                                <div className="d-flex align-items-center mb-4">
                                    {isEven ? (
                                        <>
                                            <span className="fs-4 me-3 fw-bold">{year}</span>
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
                                            <span className="fs-4 ms-3 fw-bold">{year}</span>
                                        </>
                                    )}
                                </div>

                                <div className="row g-4">
                                    {groupedProjects[year].map((project, idx) => (
                                        <ProjectCard 
                                            key={`proj-${year}-${idx}`} 
                                            project={project} 
                                            isBlack={isBlack} 
                                        />
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}

function ProjectCard({ project, isBlack }) {
    const hasValidLink = project.link && project.link !== '#' && project.link.trim() !== '';
    const hasValidGithub = project.github && project.github !== '#' && project.github.trim() !== '';
    const hasAnyLink = hasValidLink || hasValidGithub;

    const images = project.images && project.images.length > 0 ? project.images : [];
    const primaryImage = images.length > 0 ? images[0].img : null;

    const hasMultipleImages = images.length > 1;
    const previewImages = hasMultipleImages ? images.slice(0, 3) : [];

    return (
        <div className="col-12 col-md-6">
            <div 
                className={`card h-100 shadow-sm overflow-hidden d-flex flex-column justify-content-between custom-card-radius ${
                    isBlack ? 'bg-black border-secondary text-light' : 'bg-white border-light-subtle text-dark'
                }`}
            >
                <div>
                    {primaryImage ? (
                        <div className="position-relative overflow-hidden border-bottom project-img">
                            <img 
                                src={primaryImage} 
                                alt={project.title} 
                                className="w-100 h-100 object-fit-fill" 
                                style={{ 
                                    filter: 'grayscale(100%)', 
                                    transition: 'filter 0.3s ease, transform 0.3s ease' 
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.filter = 'grayscale(0%)';
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.filter = 'grayscale(100%)';
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}
                            />
                        </div>
                    ) : (
                        <div className="d-flex align-items-center justify-content-center bg-secondary-subtle border-bottom" style={{ height: '220px' }}>
                            <span className="text-muted">No Preview Available</span>
                        </div>
                    )}

                    <div className="p-3 p-md-4">
                        <h6 className="mb-3 text-truncate">{project.subtitle}</h6>

                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                            <div className="d-flex align-items-center gap-3">
                                {hasAnyLink ? (
                                    <>
                                        {hasValidLink && (
                                            <a 
                                                href={project.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className={`text-decoration-none d-flex align-items-center gap-1 link fw-medium ${isBlack ? 'text-light' : 'text-dark'}`}
                                                title={project.linkType === 'live' ? 'Visit Live Site' : 'Visit Live Demo'}
                                            >
                                                <span className="icon d-flex align-items-center">
                                                    <FiExternalLink size={16} /> 
                                                </span>
                                                <span>{project.linkType === 'live' ? 'Visit Live Site' : 'Visit Live Demo'}</span>
                                            </a>
                                        )}
                                        {hasValidGithub && (
                                            <a 
                                                href={project.github} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className={`text-decoration-none d-flex align-items-center gap-1 link fw-medium ${isBlack ? 'text-light' : 'text-dark'}`}
                                                title="View Source Code"
                                            >
                                                <span className="icon d-flex align-items-center">
                                                    <FaGithub size={16} /> 
                                                </span>
                                                <span>Code</span>
                                            </a>
                                        )}
                                    </>
                                ) : (
                                    <span className="text-muted d-flex align-items-center gap-1 opacity-75 link">
                                        <span className="icon d-flex align-items-center">
                                           <FiLock size={16} />
                                        </span>
                                        <span>Private</span>
                                    </span>
                                )}
                            </div>

                            <Link 
                                to={`/project-details/${encodeURIComponent(project.title.toLowerCase())}`} 
                                className={`btn btn-sm btn-details ${isBlack ? 'btn-outline-light' : 'btn-outline-dark'} d-flex align-items-center gap-1`}
                                title="View Full Details" 
                            >
                                <span className="icon d-flex align-items-center">
                                    <FiInfo size={16} />
                                </span>
                                <span>Details</span>
                            </Link>
                        </div>

                        <div className="pt-2 border-top">
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <span className="link text-muted fw-medium">Gallery</span>
                                {hasMultipleImages && (
                                    <Link 
                                        to={`/project-details/${encodeURIComponent(project.title.toLowerCase())}`}
                                        className={`text-decoration-none fw-medium link ${isBlack ? 'text-info' : 'text-primary'}`}
                                    >
                                        View all screenshots ({images.length}) &rarr;
                                    </Link>
                                )}
                            </div>

                            {hasMultipleImages ? (
                                <div className="d-flex gap-2 justify-content-between">
                                    {previewImages.map((imgObj, imgIdx) => (
                                        <div
                                            key={`img-${imgIdx}`}
                                            className="border rounded overflow-hidden flex-fill screenshot"
                                        >
                                            <img 
                                                src={imgObj.img} 
                                                alt={`Screenshot ${imgIdx + 1}`} 
                                                className="w-100 h-100 object-fit-fill"
                                            />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className={`border rounded p-3 text-center text-muted empty d-none d-md-block ${isBlack ? 'bg-dark border-secondary' : 'bg-light border-secondary-subtle'}`} style={{ height: '75px' }}>
                                    No additional screenshots available
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;