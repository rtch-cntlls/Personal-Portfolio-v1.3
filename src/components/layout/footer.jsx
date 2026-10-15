import { FaFacebook ,FaGithub, FaLinkedin, FaTiktok } from 'react-icons/fa';

function Footer({ theme }) {
    const isBlack = theme === 'black';
    const currentYear = new Date().getFullYear();

    return (
        <footer className={`py-4 mt-auto border-top ${isBlack ? 'bg-black text-light border-secondary' : 'bg-white text-dark border-light'}`}>
            <div className="container px-3 px-md-5 d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
                <p className="small text-muted m-0">
                    &copy; {currentYear} Portfolio. Built with React & Bootstrap.
                </p>

                <div className="d-flex align-items-center gap-3">
                    <a 
                        href="https://github.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`text-decoration-none small ${isBlack ? 'text-light' : 'text-dark'}`}
                        title="GitHub"
                    >
                        <FaGithub size={18} />
                    </a>
                    <a 
                        href="https://linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`text-decoration-none small ${isBlack ? 'text-light' : 'text-dark'}`}
                        title="LinkedIn"
                    >
                        <FaLinkedin size={18} />
                    </a>
                    <a 
                        href="https://facebook.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`text-decoration-none small ${isBlack ? 'text-light' : 'text-dark'}`}
                        title="Twitter"
                    >
                        <FaFacebook size={18} />
                    </a>
                      <a 
                        href="https://tiktok.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`text-decoration-none small ${isBlack ? 'text-light' : 'text-dark'}`}
                        title="Twitter"
                    >
                        <FaTiktok size={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;