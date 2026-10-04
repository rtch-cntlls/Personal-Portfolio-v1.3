import Profile from '../../assets/images/pfp.jpg';

function HeroImage({ theme }) {
  const isBlack = theme === 'black';

  return (
    <div className="col-lg-5 d-flex justify-content-center">
      <div className="hero-image-wrapper w-100">
        
        <div 
          className={`overflow-hidden shadow-lg bg-light h-100 w-100 border ${isBlack ? 'border-light' : 'border-dark'}`}
          style={{ borderWidth: '2px' }}
        >
          <img 
            src={Profile}
            alt="profile" 
            className="w-100 h-100 object-fit-cover rounded"
          />
        </div>

        <div className={`availability-badge d-flex align-items-center gap-2 px-3 py-2 rounded-pill border ${isBlack ? 'bg-dark text-light border-light' : 'bg-white text-dark border-dark'}`}>
          <span className="position-relative d-flex justify-content-center align-items-center" style={{ width: '10px', height: '10px' }}>
            <span className="position-absolute w-100 h-100 rounded-circle bg-dark opacity-75 animate-ping" style={{ animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite' }}></span>
            <span className="w-75 h-75 rounded-circle bg-success"></span>
          </span>
          <span className="fw-medium">Available for work & opportunities</span>
        </div>

        <span className={`resize-handle handle-tl ${isBlack ? 'bg-light border border-dark' : 'bg-dark border border-light'}`}></span>
        <span className={`resize-handle handle-tc ${isBlack ? 'bg-light border border-dark' : 'bg-dark border border-light'}`}></span>
        <span className={`resize-handle handle-tr ${isBlack ? 'bg-light border border-dark' : 'bg-dark border border-light'}`}></span>
        <span className={`resize-handle handle-rc ${isBlack ? 'bg-light border border-dark' : 'bg-dark border border-light'}`}></span>
        <span className={`resize-handle handle-br ${isBlack ? 'bg-light border border-dark' : 'bg-dark border border-light'}`}></span>
        <span className={`resize-handle handle-bc ${isBlack ? 'bg-light border border-dark' : 'bg-dark border border-light'}`}></span>
        <span className={`resize-handle handle-bl ${isBlack ? 'bg-light border border-dark' : 'bg-dark border border-light'}`}></span>
        <span className={`resize-handle handle-lc ${isBlack ? 'bg-light border border-dark' : 'bg-dark border border-light'}`}></span>

      </div>
    </div>
  );
}

export default HeroImage;