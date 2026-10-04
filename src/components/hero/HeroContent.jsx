import { socialLinks } from '../../data/socialData';

function HeroContent({ theme }) {
    const isBlack = theme === 'black';

    return (
        <div className="col-lg-6 mb-4">
            <span className={`badge mb-3 px-3 py-2 ${isBlack ? 'bg-light text-dark' : 'bg-dark text-light'}`}>
                Hi there! 👋
            </span>
            <h1 className={`tagline mb-4 ${isBlack ? 'text-light' : 'text-dark'}`}>
                Building Modern{""}
                <span className={`position-relative d-inline-block px-2 mx-1 text-secondary focus-target`}>
                    <span className={`position-absolute top-0 start-0 border-top border-start hero-corner-border ${isBlack ? 'border-light' : 'border-dark'}`}></span>
                    <span className={`position-absolute top-0 end-0 border-top border-end hero-corner-border ${isBlack ? 'border-light' : 'border-dark'}`}></span>
                    <span className={`position-absolute bottom-0 start-0 border-bottom border-start hero-corner-border ${isBlack ? 'border-light' : 'border-dark'}`}></span>
                    <span className={`position-absolute bottom-0 end-0 border-bottom border-end hero-corner-border ${isBlack ? 'border-light' : 'border-dark'}`}></span>
                    Software
                </span>{""}
                for Exceptional Experiences
            </h1>
            <p className={`mb-4 subhead ${isBlack ? 'text-light opacity-75' : 'text-dark'}`}>
                I’m <span className="fw-bold">Ricthie Cantillas</span>,
                a passionate full stack developer who loves building practical and creative solutions.
            </p>

            <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
                <button className={`btn btn-sm rounded-3 py-2 px-4 d-inline-flex align-items-center gap-2 ${isBlack ? 'btn-light text-dark' : 'btn-dark text-light'}`}>
                    <span>Explore Projects</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                    </svg>
                </button>
                <button className={`btn btn-sm rounded-3 py-2 px-4 d-inline-flex align-items-center gap-2 ${isBlack ? 'btn-light text-dark' : 'btn-dark text-light'}`}>
                    <span>Resume</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                    </svg>
                </button>
            </div>

            <div className="mb-5">
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
            </div>
        </div>
    );
}

export default HeroContent;