import React from 'react';

function AboutContent({ isBlack }) {
    return (
        <div className="col-lg-7 position-relative">
            <h2 className={`my-3 fs-3 d-lg-none ${isBlack ? 'text-light' : 'text-dark'}`}>
                Who I Am
            </h2>

            <p className={`about-subhead mb-4 position-relative ${isBlack ? 'text-light opacity-75' : 'text-dark'}`} style={{ zIndex: 1 }}>
                <span className="fw-bold">Bachelor of Science in Information Technology </span> 
                graduate specializing in full-stack developer with a strong focus on frontend design. 
                Experienced in building fast, responsive websites, and connecting them to reliable backend systems. 
                Skilled at turning designs into clean, accessible code that works seamlessly for users. 
                A dedicated developer who bridges the gap between beautiful visual design and solid technical performance to build great web applications.
            </p>

            <div className={`card border-0 shadow-sm position-relative ${isBlack ? 'bg-dark text-light' : 'bg-transparent text-dark'}`} style={{ zIndex: 1 }}>
                <div className="row text-center g-3">
                    
                    <div className="col-6">
                        <div className="p-2 py-4">
                            <p className={`fw-bold mb-1 ${isBlack ? 'text-white' : 'text-dark'}`}>
                                10+
                            </p>
                            <p className="mb-0 text-muted small text-uppercase tracking-wider fw-semibold">
                                Total Projects
                            </p>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="p-2 py-4">
                            <p className={`fw-bold mb-1 ${isBlack ? 'text-white' : 'text-dark'}`}>
                                10+
                            </p>
                            <p className="mb-0 text-muted small text-uppercase tracking-wider fw-semibold">
                                Technologies
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <blockquote className={`blockquote my-4 ps-3 border-start border-4 position-relative ${isBlack ? 'border-info text-light' : 'border-dark text-dark'}`} style={{ zIndex: 1 }}>
                <p className="fs-5 fst-italic mb-0">
                    &ldquo;Designing systems. Developing experiences&rdquo;
                </p>
            </blockquote>

            <div 
                className={`position-absolute end-0 bottom-0 d-grid ${isBlack ? 'opacity-50' : 'opacity-25'}`} 
                style={{
                    gridTemplateColumns: 'repeat(9, 4px)',
                    gap: '8px',
                    pointerEvents: 'none',
                    zIndex: 0,
                    transform: 'translate(10px, 10px)'
                }}
            >
                {Array.from({ length: 81 }).map((_, i) => (
                    <div 
                        key={i} 
                        className={`rounded-circle ${isBlack ? 'bg-light' : 'bg-dark'}`} 
                        style={{ width: '4px', height: '4px' }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default AboutContent;