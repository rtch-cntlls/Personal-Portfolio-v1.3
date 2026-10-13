import Logo from '../../assets/logo/logo.png';

function Nav({ theme, toggleTheme }) {
  const isBlack = theme === 'black';

  const navLinks = [
    { name: 'About', href: '#about', active: false },
    { name: 'Projects', href: '#projects', active: true },
    { name: 'Stack & Skills', href: '#skills', active: true },
    { name: 'Services', href: '#services', active: false },
  ];

  const ThemeToggleButton = ({ isMobile = false }) => (
    <button 
      onClick={toggleTheme} 
      className={`btn btn-sm rounded-3 d-flex align-items-center justify-content-center ${isMobile ? 'p-1' : 'p-2'} ${isBlack ? 'color-dark shadow-sm bg-dark border-0' : 'color-dark shadow-sm bg-white border-0'}`}
      style={{ 
        width: isMobile ? '32px' : '38px', 
        height: isMobile ? '32px' : '38px', 
        transition: 'transform 0.2s ease' 
      }}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {theme === 'light' ? (
        <svg xmlns="http://www.w3.org/2000/svg" width={isMobile ? "14" : "16"} height={isMobile ? "14" : "16"} fill="currentColor" viewBox="0 0 16 16">
          <path d="M6 .278a.768.768 0 0 1 .08.858 7.207 7.207 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width={isMobile ? "14" : "16"} height={isMobile ? "14" : "16"} fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.9 9.9a.5.5 0 0 1 0 .707L2.343 14.343a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.9 0a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM3.464 3.464a.5.5 0 0 1-.707 0L1.343 2.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707z"/>
        </svg>
      )}
    </button>
  );

  const BrandLogo = ({ width = 32}) => (
    <a className="navbar-brand d-flex align-items-center text-decoration-none py-0" href="#hero">
      <img 
        src={Logo} 
        alt="Logo" 
        className="me-2" 
        width={width} 
        style={{ 
          filter: isBlack ? 'invert(1) brightness(200%)' : 'none',
          transition: 'filter 0.2s ease' 
        }} 
      />
      <div className="d-flex flex-column lh-1">
        <span className={`logo ${isBlack ? 'text-light' : 'text-dark'}`}>RTCH</span>
        <span className="text-secondary logo">CNTLLS</span>
      </div>
    </a>
  );

  return (
    <>
      <nav 
        className="navbar navbar-expand-lg fixed-top shadow-sm py-3 border-bottom border-secondary border-opacity-10"
        style={{ 
          backgroundColor: isBlack ? 'rgba(0, 0, 0, 0.85)' : 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          zIndex: 1030
        }}
      >
        <div className="container px-md-5">
          <div className="d-lg-none">
            <BrandLogo width={20} subFontSize="0.8rem" mainFontSize="1rem" />
          </div>
          <div className="d-none d-lg-block">
            <BrandLogo width={32} subFontSize="1rem" mainFontSize="1.25rem" />
          </div>

          <div className="d-flex align-items-center gap-2 d-lg-none">
            <ThemeToggleButton isMobile={true} />

            <button
              className="navbar-toggler border-0 shadow-none py-1 px-1"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#mobileSidebar"
              aria-controls="mobileSidebar"
              aria-label="Toggle navigation"
            >
              <span className={`navbar-toggler-icon ${isBlack ? 'filter-invert' : ''}`} style={{ width: '1.2rem', height: '1.2rem' }}></span>
            </button>
          </div>

          <div className="collapse navbar-collapse justify-content-end d-none d-lg-flex">
            <ul className="navbar-nav align-items-center gap-4 my-0">
              {navLinks.map((link, index) => (
                <li className="nav-item" key={index}>
                  <a className={`nav-link fw-semibold px-3 py-2 rounded-3 ${link.active ? 'active' : ''} ${isBlack ? 'text-light' : 'text-dark'}`} href={link.href}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="d-flex align-items-center gap-3 ms-4">
              <a 
                href="#contact" 
                className={`btn btn-sm rounded-pill px-4 py-2 fw-semibold ${isBlack ? 'btn-light text-dark' : 'btn-dark text-light'}`}
                style={{ fontSize: '0.875rem' }}
              >
                Let's Talk
              </a>
              <ThemeToggleButton isMobile={false} />
            </div>
          </div>

        </div>
      </nav>

      <div 
        className="offcanvas offcanvas-end d-lg-none shadow-lg" 
        tabIndex="-1" 
        id="mobileSidebar" 
        aria-labelledby="mobileSidebarLabel"
        style={{ width: '280px', backgroundColor: isBlack ? '#000000' : '#ffffff' }}
      >
        <div className="offcanvas-header border-bottom border-secondary border-opacity-10 py-3 px-4">
          <BrandLogo width={24} subFontSize="0.75rem" mainFontSize="0.95rem" />
          <button 
            type="button" 
            className={`btn-close shadow-none ${isBlack ? 'btn-close-white' : ''}`} 
            data-bs-dismiss="offcanvas" 
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body py-4 px-4 d-flex flex-column justify-content-between">
          <ul className="navbar-nav gap-3">
            {navLinks.map((link, index) => (
              <li className="nav-item" key={index}>
                <a 
                  className={`nav-link fw-semibold px-3 py-2 rounded-3 ${link.active ? 'active' : ''} ${
                    isBlack 
                      ? (link.active ? 'text-light bg-secondary bg-opacity-25' : 'text-light') 
                      : (link.active ? 'text-dark bg-light' : 'text-dark')
                  }`} 
                  href={link.href}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="pt-3 border-top border-secondary border-opacity-10">
            <a 
              href="#contact" 
              className={`w-100 btn rounded-pill py-2 fw-semibold ${isBlack ? 'btn-light text-dark' : 'btn-dark text-light'}`}
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;