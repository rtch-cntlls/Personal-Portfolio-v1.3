import { socialLinks } from '../../data/socialData';

function HeroContent({ theme }) {
    const isBlack = theme === 'black';

    return (
        <div className="col-lg-6 mt-md-4 position-relative">
            
            <div 
                className={`position-absolute start-0 d-grid ${isBlack ? 'opacity-50' : 'opacity-25'}`} 
                style={{
                    gridTemplateColumns: 'repeat(12, 4px)',
                    top: '-30px',
                    gap: '8px',
                    pointerEvents: 'none',
                    zIndex: 0,
                    transform: 'translate(-20px, -20px)'
                }}
            >
                {Array.from({ length: 144 }).map((_, i) => {
                    const row = Math.floor(i / 12);
                    const col = i % 12;
                    const isVisible = col <= (11 - row);
                    
                    return (
                        <div 
                            key={i} 
                            className={`rounded-circle ${isVisible ? (isBlack ? 'bg-light' : 'bg-dark') : 'invisible'}`} 
                            style={{ width: '4px', height: '4px' }}
                        ></div>
                    );
                })}
            </div>

            <h1 
                className={`tagline mb-4 position-relative ${!isBlack && 'text-dark'}`} 
                style={{ zIndex: 1, color: isBlack ? '#7ebeff' : undefined }}
            >
                <span className={`position-relative d-inline-block pt-2`}>
                    <span className={`position-absolute top-0 start-0 w-100 border-top border-1 ${isBlack ? 'border-light' : 'border-secondary'}`}></span>
                    Building Modern
                </span>{" "}
                <span className={`position-relative d-inline-block px-2 mx-1 focus-target ${isBlack ? 'text-light ' : 'text-secondary'}`}>
                    <span className={`position-absolute top-0 start-0 border-top border-start hero-corner-border ${isBlack ? 'border-light' : 'border-dark'}`}></span>
                    <span className={`position-absolute top-0 end-0 border-top border-end hero-corner-border ${isBlack ? 'border-light' : 'border-dark'}`}></span>
                    <span className={`position-absolute bottom-0 start-0 border-bottom border-start hero-corner-border ${isBlack ? 'border-light' : 'border-dark'}`}></span>
                    <span className={`position-absolute bottom-0 end-0 border-bottom border-end hero-corner-border ${isBlack ? 'border-light' : 'border-dark'}`}></span>
                    Software
                </span>{" "}
                for Exceptional Experiences
            </h1>
            <p className={`mb-4 subhead position-relative ${isBlack ? 'text-light opacity-75' : 'text-dark'}`} style={{ zIndex: 1 }}>
                I’m <span className="fw-bold">Ricthie Cantillas</span>,
                a passionate full stack developer who loves building practical and creative solutions.
            </p>

            <div className="d-flex flex-wrap align-items-center gap-2 mb-4 position-relative" style={{ zIndex: 1 }}>
                <a href="#projects" className={`btn btn-sm rounded-pill py-2 px-4 d-inline-flex align-items-center gap-2 order-1 ${isBlack ? 'btn-light text-dark' : 'btn-dark text-light'}`}>
                    <span>Explore Projects</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                </a>
                
                <button className={`btn btn-sm rounded-pill py-2 px-4 d-inline-flex align-items-center gap-2 order-2 order-md-3 ${isBlack ? 'btn-secondary text-white' : 'btn-secondary text-light'}`}>
                    <span>Resume</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
                    </svg>
                </button>

                <a href="#contact" className={`btn btn-sm rounded-pill py-2 px-4 d-inline-flex align-items-center gap-2 order-3 order-md-2 ${isBlack ? 'btn-primary text-white' : 'btn-primary text-light'}`}>
                    <span>Let's Work Together</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.93L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                    </svg>
                </a>
            </div>
            <hr className="position-relative" style={{ zIndex: 1 }} />
            
            <div className="mb-5 position-relative" style={{ zIndex: 1 }}>
                <div className="row g-3">
                    <div className="col-6">
                        <div className={`p-3 rounded border ${isBlack ? 'bg-black border-secondary text-light' : 'bg-light border-light-subtle text-dark'}`}>
                            <p className="mb-1 fw-bold fs-5">10+</p>
                            <p className="mb-0 small text-muted">Total Projects</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={`p-3 rounded border ${isBlack ? 'bg-black border-secondary text-light' : 'bg-light border-light-subtle text-dark'}`}>
                            <p className="mb-1 fw-bold fs-5">15+</p>
                            <p className="mb-0 small text-muted">Technologies</p>
                        </div>
                    </div>
                </div>

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
        </div>
    );
}

export default HeroContent;