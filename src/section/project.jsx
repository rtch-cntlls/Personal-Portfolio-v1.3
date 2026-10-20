import React, { useState } from 'react';
import { getProjects } from '../data/projectsData';
import ProjectModal from '../components/project/ProjectModal';
import ProjectCard from '../components/project/ProjectCard';

function Project({ theme }) {
    const isBlack = theme === 'black';
    const projects = getProjects();
    const [selectedProject, setSelectedProject] = useState(null);

    const handleOpenGallery = (project) => {
        setSelectedProject(project);
    };

    const handleCloseGallery = () => {
        setSelectedProject(null);
    };

    return (
        <section id="projects" className={`py-md-5 pt-5 ${isBlack ? 'bg-black text-light' : 'bg-white text-dark'}`}>
            <div className="container p-3 px-md-5">
                
                <div className="mb-md-5 mb-5">
                    <h3 className="mb-2">Featured <span className="h3-span">Projects</span></h3>
                    <p className="subhead text-muted">
                        A selection of web applications, systems, and tools I have built or am currently developing.
                    </p>
                </div>

                <div className="row g-4">
                    {projects.map((project, idx) => (
                        <ProjectCard 
                            key={`proj-${idx}`} 
                            project={project} 
                            isBlack={isBlack} 
                            onOpenGallery={handleOpenGallery}
                        />
                    ))}
                </div>

            </div>

            {selectedProject && (
                <ProjectModal 
                    project={selectedProject} 
                    isBlack={isBlack} 
                    onClose={handleCloseGallery} 
                />
            )}
        </section>
    );
}

export default Project;