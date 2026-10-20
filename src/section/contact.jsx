import { socialLinks } from '../data/socialData';

function ContactSection({ theme = 'black' }) {
    const isBlack = theme === 'black';

    return (
        <section id="contact" className={`py-5 position-relative ${isBlack ? 'bg-black text-light' : 'bg-light text-dark'}`}>
            <div className="container py-md-4" style={{ maxWidth: '900px' }}>
                
                <div className="text-center mb-5">
                    <span className={`text-uppercase fw-semibold tracking-wider small d-block mb-2 ${isBlack ? 'text-secondary' : 'text-muted'}`}>
                        Get In Touch
                    </span>
                    <h2 className={`display-6 mb-3 tagline ${isBlack ? 'text-light' : 'text-dark'}`}>
                        Let's Work{' '}
                        <span className="position-relative d-inline-block px-2 focus-target">
                            <span className={`position-absolute top-0 start-0 border-top border-start hero-corner-border ${isBlack ? 'border-light' : 'border-dark'}`}></span>
                            <span className={`position-absolute top-0 end-0 border-top border-end hero-corner-border ${isBlack ? 'border-light' : 'border-dark'}`}></span>
                            <span className={`position-absolute bottom-0 start-0 border-bottom border-start hero-corner-border ${isBlack ? 'border-light' : 'border-dark'}`}></span>
                            <span className={`position-absolute bottom-0 end-0 border-bottom border-end hero-corner-border ${isBlack ? 'border-light' : 'border-dark'}`}></span>
                            Together
                        </span>
                    </h2>
                    <p className={`lead mx-auto ${isBlack ? 'text-light opacity-75' : 'text-secondary'}`} style={{ fontSize: '0.95rem' }}>
                        Connect with me directly across any of the platforms below.
                    </p>
                </div>

                <div className="row g-3 justify-content-center">
                    {socialLinks?.map((social, index) => {
                        const isLastItem = index === socialLinks.length - 1 && socialLinks.length % 2 !== 0;

                        return (
                            <div key={index} className={`col-12 ${isLastItem ? 'col-md-8 col-lg-6' : 'col-md-6'}`}>
                                <a
                                    href={social.url || '#'}
                                    target={social.url?.startsWith('http') ? "_blank" : "_self"}
                                    rel="noopener noreferrer"
                                    className={`p-3 px-md-4 rounded-3 border d-flex align-items-center justify-content-between text-decoration-none h-100 ${
                                        isBlack 
                                            ? 'bg-dark border-secondary border-opacity-25 text-light hover-bg-black' 
                                            : 'bg-white border-light-subtle text-dark shadow-sm'
                                    }`}
                                    style={{ transition: 'all 0.2s ease-in-out' }}
                                >
                                    <div className="d-flex align-items-center gap-3 overflow-hidden me-2">
                                        <div className={`p-2 rounded flex-shrink-0 d-flex align-items-center justify-content-center ${isBlack ? 'bg-black text-light' : 'bg-light text-dark'}`} style={{ width: '40px', height: '40px' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                                <path d={social.svgPath} />
                                            </svg>
                                        </div>

                                        <div className="text-truncate">
                                            <h3 className="h6 mb-0 text-truncate social">{social.name}</h3>
                                            <span className={`small text-truncate d-block ${isBlack ? 'text-muted' : 'text-secondary'}`}>
                                                {social.url ? social.url.replace(/^https?:\/\/(www\.)?/, '') : 'Link unavailable'}
                                            </span>
                                        </div>
                                    </div>

                                    <div className={`p-2 rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center ${isBlack ? 'text-light opacity-75' : 'text-dark'}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}

export default ContactSection;