import { useState, useEffect } from 'react';

function GridBackground({ theme }) {
  const isBlack = theme === 'black';
  const [cellCount, setCellCount] = useState(300);
  const [filledIndices, setFilledIndices] = useState(new Set());

  useEffect(() => {
    const updateGridDimensions = () => {
      const cols = Math.floor(window.innerWidth / 60);
      const totalHeight = Math.max(
        document.body.scrollHeight, 
        document.documentElement.scrollHeight, 
        window.innerHeight
      );
      const rows = Math.floor(totalHeight / 60);
      const total = cols * rows;
      
      const count = Math.floor(total * 0.12);
      const newFilled = new Set();
      
      while (newFilled.size < count) {
        const randomIndex = Math.floor(Math.random() * total);
        newFilled.add(randomIndex);
      }
      
      setCellCount(total > 0 ? total : 200);
      setFilledIndices(newFilled);
    };

    updateGridDimensions();
    window.addEventListener('resize', updateGridDimensions);
    
    return () => window.removeEventListener('resize', updateGridDimensions);
  }, [theme]);

  return (
    <div 
      className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden" 
      style={{ zIndex: 0, pointerEvents: 'none', opacity: isBlack ? 0.3 : 0.6, minHeight: '100%' }}
    >
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(60px, 1fr))',
          gridAutoRows: '60px',
          width: '100%',
          height: '100%'
        }}
      >
        {Array.from({ length: cellCount }).map((_, index) => {
          const isFilled = filledIndices.has(index);
          return (
            <div 
              key={index}
              style={{
                border: isBlack 
                  ? '1px solid rgba(255, 255, 255, 0.04)' 
                  : '1px solid rgba(0, 0, 0, 0.04)',
                backgroundColor: isFilled 
                  ? (isBlack ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.06)') 
                  : 'transparent',
                transition: 'background-color 0.3s ease'
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default GridBackground;