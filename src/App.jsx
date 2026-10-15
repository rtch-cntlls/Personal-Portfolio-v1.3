import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/nav';
import Footer from './components/layout/footer';
import Hero from './section/hero';
import About from './section/about';
import Project from './section/project';
import Skills from './section/skills';
import ProjectDetails from './pages/project-details';
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
    <BrowserRouter>
      <div 
        data-bs-theme={isBlack ? 'dark' : 'light'} 
        className={`position-relative d-flex flex-column ${isBlack ? 'text-light' : 'text-dark'}`}
        style={{ backgroundColor: isBlack ? '#000000' : '#ffffff', minHeight: '100vh' }}
      >
        <GridBackground theme={theme} />

        <div className="position-relative d-flex flex-column flex-grow-1" style={{ zIndex: 1 }}>
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          
          <div className="flex-grow-1">
            <Routes>
              <Route 
                path="/" 
                element={
                  <>
                    <Hero theme={theme} />
                    <About theme={theme} />
                    <Project theme={theme} />
                    <Skills theme={theme} />
                  </>
                } 
              />

              <Route 
                path="/project-details/:title" 
                element={<ProjectDetails theme={theme} />} 
              />
            </Routes>
          </div>

          <Footer theme={theme} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;