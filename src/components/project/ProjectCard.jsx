import { FaGithub } from 'react-icons/fa';
import { FiExternalLink, FiLock, FiImage } from 'react-icons/fi';

export default function ProjectCard({ project, isBlack, onOpenGallery }) {
    const hasValidLink = project.link && project.link !== '#' && project.link.trim() !== '';
    const hasValidGithub = project.github && project.github !== '#' && project.github.trim() !== '';
    const hasAnyLink = hasValidLink || hasValidGithub;

    const images = project.images && project.images.length > 0 ? project.images : [];
    const primaryImage = images.length > 0 ? images[0].img : null;
    const categories = project.categories || [];
    const techStack = project.tech || [];

    return (
        <div className="col-12 col-md-6 mb-3">
            <div 
                className={`card h-100 shadow-sm overflow-hidden d-flex flex-column justify-content-between custom-card-radius ${
                    isBlack ? 'bg-black border-secondary text-light' : 'bg-white border-light-subtle text-dark'
                }`}
            >
                <div>
                    {primaryImage ? (
                        <div 
                            className="position-relative overflow-hidden border-bottom project-img" 
                            style={{ cursor: images.length > 0 ? 'pointer' : 'default' }} 
                            onClick={() => images.length > 0 && onOpenGallery(project)}
                        >
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
                        {categories.length > 0 && (
                            <div className="d-flex flex-wrap gap-1 mb-2">
                                {categories.map((cat, idx) => (
                                    <span 
                                        key={`cat-${idx}`} 
                                        className={`badge rounded-pill fw-normal ${isBlack ? 'bg-white text-dark' : 'bg-light text-dark border'}`}
                                        style={{ fontSize: '0.75rem' }}
                                    >
                                        {cat}
                                    </span>
                                ))}
                            </div>
                        )}

                        <h6 className="mb-3 text-truncate">{project.title}</h6>

                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                            <div className="d-flex align-items-center gap-3">
                                {hasAnyLink ? (
                                    <>
                                        {hasValidLink && (
                                            <a 
                                                href={project.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className={`text-decoration-none d-flex align-items-center gap-1 link fw-medium ${isBlack ? 'text-light' : 'text-primary'}`}
                                                title={project.linkType === 'live' ? 'Visit Live Site' : 'Visit Demo Site'}
                                            >
                                                <span className="icon d-flex align-items-center">
                                                    <FiExternalLink size={16} /> 
                                                </span>
                                                <span>{project.linkType === 'live' ? 'Visit Live Site' : 'Visit Demo Site'}</span>
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
                                        <span>This repository and live website are currently private</span>
                                    </span>
                                )}
                            </div>

                            <div>
                                {images.length > 0 && (
                                    <button 
                                        type="button"
                                        onClick={() => onOpenGallery(project)}
                                        className={`btn btn-sm btn-details rounded-pill px-3 ${isBlack ? 'btn-outline-light' : 'btn-outline-dark'} d-flex align-items-center gap-1`}
                                        title="View Gallery Screenshots" 
                                    >
                                        <span className="icon d-flex align-items-center">
                                            <FiImage size={16} />
                                        </span>
                                        <span>Gallery</span>
                                    </button>
                                )}
                            </div>
                        </div>

                        {project.description && (
                            <p className={`small mb-3 description ${isBlack ? 'text-light opacity-75' : 'text-muted'}`}>
                                {project.description}
                            </p>
                        )}

                        {techStack.length > 0 && (
                            <div className="d-flex flex-wrap pt-3 border-top tech-gap">
                                {techStack.map((tech, idx) => (
                                    <span 
                                        key={`tech-${idx}`} 
                                        className={`badge fw-normal rounded-pill tech-stack ${isBlack ? 'bg-dark text-light opacity-75 border border-secondary' : 'bg-secondary-subtle text-dark'}`}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}