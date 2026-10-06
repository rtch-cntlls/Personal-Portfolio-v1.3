import { useState } from 'react';
import Navbar from './components/layout/nav';
import Hero from './section/hero';
import About from './section/about';
import Project from './section/project';
import Skills from './section/skills';
import GridBackground from '../src/components/GridBackground';

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'black';
  });

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'black' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  const isBlack = theme === 'black';

  return (
    <div 
      data-bs-theme={isBlack ? 'dark' : 'light'} 
      className={`position-relative ${isBlack ? 'text-light' : 'text-dark'}`}
      style={{ backgroundColor: isBlack ? '#000000' : '#ffffff' }} >
      <GridBackground theme={theme} />

      <div className="position-relative" style={{ zIndex: 1 }}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Hero theme={theme} />
        <About theme={theme} />
        <Project theme={theme} />
        <Skills theme={theme} />
      </div>
    </div>
  );
}

export default App;