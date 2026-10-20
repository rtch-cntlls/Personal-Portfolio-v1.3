import React, { useState } from 'react';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function ProjectModal({ project, isBlack, onClose }) {
    const images = project.images || [];
    const [currentIndex, setCurrentIndex] = useState(0);

    const activeImage = images.length > 0 ? images[currentIndex].img : null;

    const handlePrev = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div 
            className="modal show d-block" 
            tabIndex="-1" 
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)', zIndex: 1050 }}
            onClick={onClose}
        >
            <div 
                className="modal-dialog modal-dialog-centered modal-lg" 
                onClick={(e) => e.stopPropagation()}
            >
                <div className={`modal-content ${isBlack ? 'bg-dark text-light border-secondary' : 'bg-white text-dark'}`}>
                    <div className="modal-header border-bottom">
                        <h6 className="modal-title">{project.title}</h6>
                        <button 
                            type="button" 
                            className={`btn-close ${isBlack ? 'btn-close-white' : ''}`} 
                            onClick={onClose}
                            aria-label="Close"
                        ></button>
                    </div>

                    <div className="modal-body p-3 p-md-4">
                        <div className="position-relative mb-3 d-flex align-items-center justify-content-center bg-black rounded overflow-hidden" style={{ minHeight: '220px', maxHeight: '450px' }}>
                            {activeImage && (
                                <img 
                                    src={activeImage} 
                                    alt={`${project.title} screenshot ${currentIndex + 1}`} 
                                    className="w-100 h-auto object-fit-contain" 
                                    style={{ maxHeight: '450px' }}
                                />
                            )}

                            {images.length > 1 && (
                                <>
                                    <button 
                                        className="position-absolute start-0 btn btn-dark text-light ms-2 rounded-circle d-flex align-items-center justify-content-center p-2 opacity-75"
                                        style={{ width: '40px', height: '40px', zIndex: 2 }}
                                        onClick={handlePrev}
                                    >
                                        <FiChevronLeft size={24} />
                                    </button>
                                    <button 
                                        className="position-absolute end-0 btn btn-dark text-light me-2 rounded-circle d-flex align-items-center justify-content-center p-2 opacity-75"
                                        style={{ width: '40px', height: '40px', zIndex: 2 }}
                                        onClick={handleNext}
                                    >
                                        <FiChevronRight size={24} />
                                    </button>
                                </>
                            )}
                        </div>

                        {images.length > 1 && (
                            <div className="d-flex gap-2 overflow-auto py-2">
                                {images.map((imgObj, idx) => (
                                    <div 
                                        key={`thumb-${idx}`}
                                        onClick={() => setCurrentIndex(idx)}
                                        className={`rounded overflow-hidden flex-shrink-0 border ${idx === currentIndex ? 'border-primary border-3' : 'border-secondary opacity-50'}`}
                                        style={{ width: '90px', height: '65px', cursor: 'pointer', transition: 'all 0.2s ease' }}
                                    >
                                        <img 
                                            src={imgObj.img} 
                                            alt={`Thumbnail ${idx + 1}`} 
                                            className="w-100 h-100 object-fit-cover" 
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}