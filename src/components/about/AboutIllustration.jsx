
function AboutIllustration({ isBlack }) {
    return (
        <div className="col-lg-4 position-relative d-none d-lg-block">
            <div 
                className="position-relative w-100 rounded-0 overflow-hidden shadow-sm"
                style={{ 
                    height: '320px', 
                    backgroundColor: isBlack ? '#0a0a0a' : '#f8f9fa' 
                }}
            >
                <div className="position-absolute w-100 h-100">
                    <svg className="w-100 h-100" viewBox="0 0 500 700" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                        
                        <polygon points="0,0 250,0 0,250" fill={isBlack ? "#1d3557" : "#0d1b2a"} />
                        <polygon points="250,0 250,250 0,250" fill={isBlack ? "#415a77" : "#7ebeff"} />
                        <polygon points="0,125 125,250 0,250" fill={isBlack ? "#1d3557" : "#1b263b"} />

                        <rect x="250" y="0" width="250" height="250" fill={isBlack ? "#1b263b" : "#70d6ff"} />
                        <circle cx="375" cy="125" r="90" stroke={isBlack ? "#7ebeff" : "#ffffff"} strokeWidth="4" fill="none" />
                        <circle cx="375" cy="125" r="60" stroke={isBlack ? "#7ebeff" : "#ffffff"} strokeWidth="4" fill="none" />
                        <circle cx="375" cy="125" r="30" stroke={isBlack ? "#7ebeff" : "#ffffff"} strokeWidth="4" fill="none" />
                        <circle cx="375" cy="125" r="8" fill={isBlack ? "#7ebeff" : "#ffffff"} />

                        <path d="M380 0H500V150C500 67.1573 432.843 0 380 0Z" fill={isBlack ? "#415a77" : "#1b263b"} />
                        
                        <rect x="0" y="250" width="500" height="100" fill={isBlack ? "#1d3557" : "#0d1b2a"} />

                        <rect x="0" y="350" width="250" height="150" fill={isBlack ? "#1b263b" : "#415a77"} />
                        <path d="M0 350C69.036 350 125 405.964 125 475H0V350Z" fill={isBlack ? "#7ebeff" : "#70d6ff"} />
                        <path d="M125 350C194.036 350 250 405.964 250 475H125V350Z" fill={isBlack ? "#7ebeff" : "#70d6ff"} />
                        <path d="M62.5 412.5C97.018 412.5 125 440.482 125 475H0C0 440.482 27.982 412.5 62.5 412.5Z" fill={isBlack ? "#1d3557" : "#0d1b2a"} />
                        <path d="M187.5 412.5C222.018 412.5 250 440.482 250 475H125C125 440.482 152.982 412.5 187.5 412.5Z" fill={isBlack ? "#1d3557" : "#0d1b2a"} />

                        <rect x="250" y="350" width="250" height="150" fill={isBlack ? "#111827" : "#0d1b2a"} />
                        <circle cx="375" cy="425" r="55" fill={isBlack ? "#1d3557" : "#415a77"} />
                        <circle cx="375" cy="425" r="40" fill={isBlack ? "#7ebeff" : "#70d6ff"} />
                        <circle cx="375" cy="425" r="20" fill={isBlack ? "#0a0a0a" : "#0d1b2a"} />

                        <rect x="0" y="500" width="250" height="100" fill={isBlack ? "#1d3557" : "#0d1b2a"} />

                        <path d="M0 600H250V700H0V600Z" fill={isBlack ? "#111827" : "#1b263b"} />
                        <circle cx="125" cy="650" r="45" stroke={isBlack ? "#7ebeff" : "#ffffff"} strokeWidth="3" fill="none" />
                        <circle cx="125" cy="650" r="30" stroke={isBlack ? "#7ebeff" : "#ffffff"} strokeWidth="3" fill="none" />
                        <circle cx="125" cy="650" r="15" stroke={isBlack ? "#7ebeff" : "#ffffff"} strokeWidth="3" fill="none" />

                        <rect x="250" y="500" width="250" height="200" fill={isBlack ? "#1b263b" : "#70d6ff"} />
                        <polygon points="250,600 375,500 500,500 500,600" fill={isBlack ? "#415a77" : "#415a77"} opacity="0.4" />
                        
                        <rect x="280" y="620" width="190" height="8" fill={isBlack ? "#7ebeff" : "#0d1b2a"} />
                        <rect x="280" y="636" width="190" height="8" fill={isBlack ? "#7ebeff" : "#0d1b2a"} />
                        <rect x="280" y="652" width="190" height="8" fill={isBlack ? "#7ebeff" : "#0d1b2a"} />
                        <rect x="280" y="668" width="190" height="8" fill={isBlack ? "#7ebeff" : "#0d1b2a"} />

                    </svg>
                </div>
            </div>
        </div>
    );
}

export default AboutIllustration;