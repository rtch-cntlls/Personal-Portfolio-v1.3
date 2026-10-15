import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProjects } from '../data/projectsData';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink, FiArrowLeft, FiLock, FiCalendar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function ProjectDetails({ theme }) {
    const { title } = useParams();
    const isBlack = theme === 'black';
    const projects = getProjects();
    
    const [activeImageTab, setActiveImageTab] = useState('all');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const timeoutRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [title]);

    const project = projects.find(
        (p) => encodeURIComponent(p.title.toLowerCase()) === title
    );

    if (!project) {
        return (
            <div className="py-5 mt-5">
                <div className={`container py-5 text-center ${isBlack ? 'bg-black text-light' : 'bg-transparent text-dark'}`} style={{ minHeight: '80vh' }}>
                    <h2 className="mb-3">Project Not Found</h2>
                    <p className="text-muted mb-4">The project you are looking for does not exist or has been removed.</p>
                    <Link to="/" className={`btn btn-sm ${isBlack ? 'btn-outline-light' : 'btn-outline-dark'}`}>
                        <FiArrowLeft className="me-2" /> Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    const hasValidLink = project.link && project.link !== '#' && project.link.trim() !== '';
    const hasValidGithub = project.github && project.github !== '#' && project.github.trim() !== '';

    const allImages = project.images || [];
    const hasPublicImages = allImages.some(img => img.type === 'public');
    const hasAdminImages = allImages.some(img => img.type === 'admin');

    const baseFilteredImages = allImages.filter((imgObj) => {
        if (activeImageTab === 'public') return imgObj.type === 'public';
        if (activeImageTab === 'admin') return imgObj.type === 'admin';
        return true;
    });

    const hasMultiple = baseFilteredImages.length > 1;
    const filteredImages = hasMultiple 
        ? [...baseFilteredImages, baseFilteredImages[0]] 
        : baseFilteredImages;

    useEffect(() => {
        if (!hasMultiple || isHovered) return;

        const interval = setInterval(() => {
            handleNext();
        }, 4000);

        return () => clearInterval(interval);
    }, [currentIndex, hasMultiple, isHovered]);

    const handleNext = () => {
        if (!hasMultiple) return;

        setIsTransitioning(true);
        setCurrentIndex((prev) => prev + 1);

        if (currentIndex === baseFilteredImages.length - 1) {
            timeoutRef.current = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(0);
            }, 600);
        }
    };

    const handlePrev = () => {
        if (!hasMultiple) return;

        setIsTransitioning(true);
        setCurrentIndex((prev) => {
            if (prev === 0) {
                setIsTransitioning(false);
                setTimeout(() => setIsTransitioning(true), 50);
                return baseFilteredImages.length - 1;
            }
            return prev - 1;
        });
    };

    const handleTabChange = (tab) => {
        setActiveImageTab(tab);
        setCurrentIndex(0);
        setIsTransitioning(true);
    };

    const activeDotIndex = currentIndex === baseFilteredImages.length ? 0 : currentIndex;
    const currentImage = baseFilteredImages[activeDotIndex] || baseFilteredImages[0];

    return (
        <div className={`py-4 py-md-5 min-vh-100 ${isBlack ? 'bg-black text-light' : 'bg-white text-dark'}`}>
            <div className="container px-3 px-md-5">
                
                <div className="mb-4 mt-5">
                    <Link to="/" className={`text-decoration-none d-inline-flex align-items-center gap-2 ${isBlack ? 'text-light' : 'text-dark'}`}>
                        <FiArrowLeft size={18} />
                        <span>Back to Projects</span>
                    </Link>
                </div>

                <div className="row g-4 g-lg-5 align-items-start">
                    
                    <div className="col-lg-6">
                        <div className="d-flex align-items-center gap-3 mb-3">
                            <span className={`badge ${isBlack ? 'bg-secondary text-light' : 'bg-dark text-white'} px-3 py-2 d-flex align-items-center gap-1`}>
                                <FiCalendar /> {project.year || '2026'}
                            </span>
                        </div>

                        <h4 className="display-6 m-0">{project.title}</h4>
                        {project.subtitle && (
                            <p className="text-muted mt-1 mb-4">{project.subtitle}</p>
                        )}

                        <hr className={isBlack ? 'border-secondary' : 'border-dark'} />

                        <div className="mb-4">
                            <h4 className="h5 mb-3">Overview & Description</h4>
                            <p className="text-muted" style={{ lineHeight: '1.8' }}>
                                {project.description || "No detailed description provided for this project yet."}
                            </p>
                        </div>

                        {project.tech && project.tech.length > 0 && (
                            <div className="mb-4">
                                <h4 className="h5 mb-3">Technologies Used</h4>
                                <div className="d-flex flex-wrap gap-2">
                                    {project.tech.map((techItem, idx) => (
                                        <span 
                                            key={idx} 
                                            className={`badge px-3 py-2 fw-medium ${isBlack ? 'bg-dark border border-secondary text-light' : 'bg-light text-dark border'}`}
                                        >
                                            {techItem}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="d-flex flex-wrap align-items-center gap-3 mt-4 pt-2">
                            {hasValidLink && (
                                <a 
                                    href={project.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="btn btn-primary d-flex align-items-center gap-2 px-4 py-2"
                                >
                                    <FiExternalLink size={18} />
                                    <span className="small">{project.linkType === 'live' ? 'Live' : 'Demo'}</span>
                                </a>
                            )}

                            {hasValidGithub && (
                                <a 
                                    href={project.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className={`btn ${isBlack ? 'btn-outline-light' : 'btn-outline-dark'} d-flex align-items-center gap-2 px-4 py-2`}
                                >
                                    <FaGithub size={18} />
                                    <span className="small">Source Code</span>
                                </a>
                            )}

                            {!hasValidLink && !hasValidGithub && (
                                <div className="text-muted d-flex align-items-center gap-2 small">
                                    <FiLock size={16} />
                                    <span>This repository and live preview are currently private.</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="col-lg-6">
                        
                        {allImages.length > 0 && (
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center gap-2">
                                    <button 
                                        onClick={() => handleTabChange('all')}
                                        className={`btn btn-sm ${activeImageTab === 'all' ? (isBlack ? 'btn-light text-dark' : 'btn-dark text-white') : (isBlack ? 'btn-outline-secondary text-light' : 'btn-outline-dark')}`}
                                    >
                                        All
                                    </button>
                                    {hasPublicImages && (
                                        <button 
                                            onClick={() => handleTabChange('public')}
                                            className={`btn btn-sm ${activeImageTab === 'public' ? 'btn-secondary text-white' : (isBlack ? 'btn-outline-secondary text-light' : 'btn-outline-dark')}`}
                                        >
                                            Public Side
                                        </button>
                                    )}
                                    {hasAdminImages && (
                                        <button 
                                            onClick={() => handleTabChange('admin')}
                                            className={`btn btn-sm ${activeImageTab === 'admin' ? 'btn-secondary text-white' : (isBlack ? 'btn-outline-secondary text-light' : 'btn-outline-dark')}`}
                                        >
                                            Admin Side
                                        </button>
                                    )}
                                </div>
                                {baseFilteredImages.length > 0 && (
                                    <span className="text-muted small">
                                        {activeDotIndex + 1} of {baseFilteredImages.length}
                                    </span>
                                )}
                            </div>
                        )}

                        <div 
                            className="d-flex flex-column gap-3"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            {baseFilteredImages.length > 0 ? (
                                <div className="position-relative overflow-hidden w-100">

                                    <div 
                                        className="d-flex w-100"
                                        style={{
                                            transform: `translateX(-${currentIndex * 100}%)`,
                                            transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)' : 'none'
                                        }}
                                    >
                                        {filteredImages.map((imgObj, idx) => (
                                            <div 
                                                key={idx} 
                                                className="w-100 flex-shrink-0 d-flex flex-column align-items-center justify-content-center"
                                                style={{ minWidth: '100%' }}
                                            >
                                                <img 
                                                    src={imgObj.img} 
                                                    alt={`${project.title} slide ${idx + 1}`} 
                                                    className="w-100 object-fit-contain rounded border shadow-sm" 
                                                    style={{ 
                                                        maxHeight: '480px', 
                                                        backgroundColor: isBlack ? '#111' : '#f8f9fa',
                                                        borderColor: isBlack ? '#333' : '#dee2e6'
                                                    }}
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    {hasMultiple && (
                                        <>
                                            <button 
                                                onClick={handlePrev}
                                                className="position-absolute start-0 top-50 translate-middle-y ms-2 btn btn-dark rounded-circle p-2 d-flex align-items-center justify-content-center opacity-75 shadow-sm"
                                                style={{ width: '38px', height: '38px', zIndex: 4 }}
                                                title="Previous Slide"
                                            >
                                                <FiChevronLeft size={20} />
                                            </button>
                                            <button 
                                                onClick={handleNext}
                                                className="position-absolute end-0 top-50 translate-middle-y me-2 btn btn-dark rounded-circle p-2 d-flex align-items-center justify-content-center opacity-75 shadow-sm"
                                                style={{ width: '38px', height: '38px', zIndex: 4 }}
                                                title="Next Slide"
                                            >
                                                <FiChevronRight size={20} />
                                            </button>
                                        </>
                                    )}

                                    <div className="pt-3 d-flex align-items-center justify-content-between">
                                        <span className="small text-muted fw-medium">
                                            {currentImage.caption || `${project.title} Preview`}
                                        </span>

                                        {hasMultiple && (
                                            <div className="d-flex gap-1">
                                                {baseFilteredImages.map((_, dotIdx) => (
                                                    <button
                                                        key={dotIdx}
                                                        onClick={() => {
                                                            setIsTransitioning(true);
                                                            setCurrentIndex(dotIdx);
                                                        }}
                                                        className={`rounded-circle border-0 ${activeDotIndex === dotIdx ? (isBlack ? 'bg-light' : 'bg-dark') : 'bg-secondary opacity-50'}`}
                                                        style={{ width: '8px', height: '8px', padding: 0 }}
                                                        title={`Go to slide ${dotIdx + 1}`}
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                </div>
                            ) : (
                                <div className={`p-5 text-center rounded border ${isBlack ? 'border-secondary text-muted' : 'border-dark text-muted'}`}>
                                    <p className="mb-0">No preview images available for this view.</p>
                                </div>
                            )}
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default ProjectDetails;