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

            <div className="d-flex flex-wrap align-items-center gap-3 mb-4 position-relative" style={{ zIndex: 1 }}>
                <a href="#projects" className={`btn btn-sm rounded-pill py-2 px-4 d-inline-flex align-items-center gap-2 ${isBlack ? 'btn-light text-dark' : 'btn-dark text-light'}`}>
                    <span>Explore Projects</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                    </svg>
                </a>
                <button className={`btn btn-sm rounded-pill py-2 px-4 d-inline-flex align-items-center gap-2 ${isBlack ? 'btn-secondary text-white' : 'btn-secondary text-light'}`}>
                    <span>Resume</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                    </svg>
                </button>
            </div>
            <hr className="position-relative" style={{ zIndex: 1 }} />
            <div className="mb-5 position-relative" style={{ zIndex: 1 }}>
                <p className={`fw-semibold mb-2 hero-get-in-touch-title ${isBlack ? 'text-light' : 'text-dark'}`}>
                    Get in touch:
                </p>
                <div className="d-flex align-items-center gap-3 flex-wrap">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.url}
                            target={social.name === 'Email' ? '_self' : '_blank'}
                            rel="noopener noreferrer"
                            className={`btn rounded-circle p-2 d-flex align-items-center justify-content-center hero-social-btn ${isBlack ? 'btn-outline-light' : 'btn-outline-dark'}`}
                            title={social.name}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                <path d={social.svgPath} />
                            </svg>
                        </a>
                    ))}
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