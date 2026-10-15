import Profile from '../../assets/images/pfp.jpg';

function HeroImage({ theme }) {
  const isBlack = theme === 'black';

  return (
    <div className="col-lg-5 d-flex justify-content-center mb-5">
      <div className="hero-image-wrapper w-100">
        
        <div className="geometric-bg-container d-none d-lg-block position-absolute top-0 left-0 w-100 h-100" style={{ zIndex: 0, pointerEvents: 'none', overflow: 'visible' }}>
          <svg className="w-100 h-100 overflow-visible" viewBox="0 0 430 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="striped-pattern" width="12" height="12" patternUnits="userSpaceOnUse">
                <circle cx="6" cy="6" r="6" fill={isBlack ? '#39347b' : '#39347b'} />
                <circle cx="6" cy="6" r="3" fill={isBlack ? '#4b44b4' : '#4b44b4'} />
              </pattern>
            </defs>

            <circle 
              cx="390" 
              cy="90" 
              r="110" 
              fill={isBlack ? '#2a2a2a' : '#dbd8d8'} 
              fillOpacity="0.85" 
            />

            <circle 
              cx="380" 
              cy="430" 
              r="100" 
              fill={isBlack ? '#1b3a57' : '#7ebeff'} 
              fillOpacity="0.85" 
            />

            <circle 
              cx="350" 
              cy="210" 
              r="70" 
              fill="url(#striped-pattern)" 
            />
          </svg>
        </div>

        <div 
          className="position-relative overflow-hidden shadow-lg bg-light h-100 w-100"
          style={{ 
            borderTopLeftRadius: '49%', 
            borderTopRightRadius: '49%',
            zIndex: 2
          }}
        >
          <img 
            src={Profile}
            alt="profile" 
            className="w-100 h-100 object-fit-cover"
            style={{ borderTopLeftRadius: '49%', borderTopRightRadius: '49%' }}
          />
        </div>

        <div className={`availability-badge d-flex align-items-center gap-2 px-3 py-2 rounded-pill border ${isBlack ? 'bg-dark text-light border-light' : 'bg-white text-dark border-dark'}`} style={{ zIndex: 4 }}>
          <span className="position-relative d-flex justify-content-center align-items-center" style={{ width: '10px', height: '10px' }}>
            <span className="position-absolute w-100 h-100 rounded-circle bg-dark opacity-75 animate-ping" style={{ animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite' }}></span>
            <span className="w-75 h-75 rounded-circle bg-success"></span>
          </span>
          <span className="fw-medium">Available for work & opportunities</span>
        </div>

        <span className={`resize-handle handle-tc ${isBlack ? 'bg-light border border-dark' : 'bg-dark border border-light'}`} style={{ zIndex: 5 }}></span>
        <span className={`resize-handle handle-rc ${isBlack ? 'bg-light border border-dark' : 'bg-dark border border-light'}`} style={{ zIndex: 5 }}></span>
        <span className={`resize-handle handle-br ${isBlack ? 'bg-light border border-dark' : 'bg-dark border border-light'}`} style={{ zIndex: 5 }}></span>
        <span className={`resize-handle handle-bc ${isBlack ? 'bg-light border border-dark' : 'bg-dark border border-light'}`} style={{ zIndex: 5 }}></span>
        <span className={`resize-handle handle-bl ${isBlack ? 'bg-light border border-dark' : 'bg-dark border border-light'}`} style={{ zIndex: 5 }}></span>
        <span className={`resize-handle handle-lc ${isBlack ? 'bg-light border border-dark' : 'bg-dark border border-light'}`} style={{ zIndex: 5 }}></span>

      </div>
    </div>
  );
}

export default HeroImage;