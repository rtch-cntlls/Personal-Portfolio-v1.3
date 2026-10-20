
function AboutContent({ isBlack }) {
    return (
        <div className="col-lg-8 position-relative">
            <h2 className={`my-3 fs-3 d-lg-none ${isBlack ? 'text-light' : 'text-dark'}`}>
                Who <span className="h2-span">I Am</span>
            </h2>

            <p className={`about-subhead mb-5 position-relative ${isBlack ? 'text-light opacity-75' : 'text-dark'}`} style={{ zIndex: 1 }}>
               <span className="fw-medium">Bachelor of Science in Information Technology</span> graduate from the Philippines and a full-stack developer with a strong focus on frontend design. 
               I build fast, responsive websites and connect them to reliable backend systems, turning designs into clean, accessible code. 
               My goal is to bridge the gap between beautiful visual design and solid technical performance to create great web applications.
            </p>

            <blockquote className={`blockquote my-4 ps-3 border-start border-4 position-relative ${isBlack ? 'border-info text-light' : 'border-dark text-dark'}`} style={{ zIndex: 1 }}>
                <p className="fst-italic mb-0 quote">
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