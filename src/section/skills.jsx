import React, { useState } from 'react';
import { getPreferredSkills, getNetworkingSkills, getLearningSkills } from '../data/skillsData';

function Skills({ theme }) {
    const isBlack = theme === 'black';
    const [activeTab, setActiveTab] = useState('all');

    const preferredSkills = getPreferredSkills(isBlack);
    const networkingSkills = getNetworkingSkills(isBlack);
    const learningSkills = getLearningSkills(isBlack);

    const filteredTechSkills = activeTab === 'all' 
        ? preferredSkills 
        : preferredSkills.filter(skill => skill.category === activeTab);

    const midpoint = Math.ceil(filteredTechSkills.length / 2);
    const row1Skills = filteredTechSkills.slice(0, midpoint);
    const row2Skills = filteredTechSkills.slice(midpoint);

    return (
        <section id="skills" className={`py-5 ${isBlack ? 'bg-black text-light' : 'bg-transparent text-dark'}`}>
            <div className="container p-3 px-md-5">
                
                <div className="mb-4">
                    <h3 className="mb-2">Tech <span className="h3-span">Stack</span></h3>
                    <p className="subhead text-muted">
                        Technologies and tools I use to bring ideas to life, from intuitive frontend interfaces to reliable backend systems.
                    </p>
                </div>

                <div className="d-flex flex-wrap gap-1 mb-4">
                    {['all', 'frontend', 'backend', 'database', 'tools'].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`btn btn-sm text-capitalize px-3 py-1 rounded-pill link ${
                                activeTab === cat 
                                    ? 'btn-primary fw-semibold' 
                                    : isBlack ? 'btn-outline-secondary text-light' : 'btn-outline-dark'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="row g-2 d-flex d-md-none py-3 justify-content-center">
                    {filteredTechSkills.map((skill, idx) => {
                        const IconComponent = skill.icon;
                        return (
                            <div
                                key={`mob-${idx}`}
                                className="col-20 d-flex flex-column align-items-center justify-content-center p-1 mb-2"
                                style={{ flex: '0 0 20%', maxWidth: '20%' }}
                            >
                                <div className="fs-1 d-flex align-items-center justify-content-center mb-1" style={{ color: skill.color }}>
                                    {skill.isImage ? (
                                        <img 
                                            src={IconComponent} 
                                            alt={skill.name} 
                                            style={{ 
                                                width: '30px', 
                                                height: '30px', 
                                                objectFit: 'contain',
                                                filter: (isBlack && skill.invertInDark) ? 'invert(1)' : 'none'
                                            }} 
                                        />
                                    ) : (
                                        <IconComponent />
                                    )}
                                </div>
                                <span className="text-center text-truncate w-100" style={{ fontSize: '0.62rem', lineHeight: '1.1' }}>
                                    {skill.name}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {activeTab === 'all' ? (

                    <div className="d-none d-md-flex flex-column gap-1 w-100 py-4">

                        <div className="position-relative overflow-hidden w-100 py-2">
                            <div
                                className="d-flex flex-nowrap mb-4"
                                style={{
                                    width: 'max-content',
                                    animation: 'scrollLeft 25s linear infinite'
                                }}
                            >
                                {[...row1Skills, ...row1Skills, ...row1Skills].map((skill, sIdx) => {
                                    const IconComponent = skill.icon;
                                    return (
                                        <div
                                            key={`r1-${sIdx}`}
                                            className="d-flex flex-column align-items-center justify-content-center px-4"
                                            style={{ minWidth: '120px' }}
                                        >
                                            <div className="fs-1 d-flex align-items-center justify-content-center mb-1" style={{ color: skill.color }}>
                                                {skill.isImage ? (
                                                    <img 
                                                        src={IconComponent} 
                                                        alt={skill.name} 
                                                        style={{ 
                                                            width: '38px', 
                                                            height: '38px', 
                                                            objectFit: 'contain',
                                                            filter: (isBlack && skill.invertInDark) ? 'invert(1)' : 'none'
                                                        }} 
                                                    />
                                                ) : (
                                                    <IconComponent />
                                                )}
                                            </div>
                                            <span>{skill.name}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="position-relative overflow-hidden w-100 py-2">
                            <div
                                className="d-flex flex-nowrap"
                                style={{
                                    width: 'max-content',
                                    animation: 'scrollRight 25s linear infinite'
                                }}
                            >
                                {[...row2Skills, ...row2Skills, ...row2Skills].map((skill, sIdx) => {
                                    const IconComponent = skill.icon;
                                    return (
                                        <div
                                            key={`r2-${sIdx}`}
                                            className="d-flex flex-column align-items-center justify-content-center px-4"
                                            style={{ minWidth: '120px' }}
                                        >
                                            <div className="fs-1 d-flex align-items-center justify-content-center mb-1" style={{ color: skill.color }}>
                                                {skill.isImage ? (
                                                    <img 
                                                        src={IconComponent} 
                                                        alt={skill.name} 
                                                        style={{ 
                                                            width: '38px', 
                                                            height: '38px', 
                                                            objectFit: 'contain',
                                                            filter: (isBlack && skill.invertInDark) ? 'invert(1)' : 'none'
                                                        }} 
                                                    />
                                                ) : (
                                                    <IconComponent />
                                                )}
                                            </div>
                                            <span>{skill.name}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                    </div>
                ) : (

                    <div className="d-none d-md-flex flex-wrap py-4">
                        {filteredTechSkills.map((skill, sIdx) => {
                            const IconComponent = skill.icon;
                            return (
                                <div
                                    key={`cat-${sIdx}`}
                                    className="d-flex flex-column align-items-center justify-content-center px-4 mb-4"
                                    style={{ minWidth: '120px' }}
                                >
                                    <div className="fs-1 d-flex align-items-center justify-content-center mb-1" style={{ color: skill.color }}>
                                        {skill.isImage ? (
                                            <img 
                                                src={IconComponent} 
                                                alt={skill.name} 
                                                style={{ 
                                                    width: '38px', 
                                                    height: '38px', 
                                                    objectFit: 'contain',
                                                    filter: (isBlack && skill.invertInDark) ? 'invert(1)' : 'none'
                                                }} 
                                            />
                                        ) : (
                                            <IconComponent />
                                        )}
                                    </div>
                                    <span>{skill.name}</span>
                                </div>
                            );
                        })}
                    </div>
                )}

            <div className="pt-md-5 pt-3 border-top border-secondary border-opacity-25 mt-md-4 mt-0">
                <div className="mb-md-4 mb-2">
                        <h4 className="mb-2">Still Learning & Exploring</h4>
                    </div>

                    <div className="row g-2 d-flex d-md-none py-2 justify-content-center">
                        {learningSkills.map((skill, lIdx) => {
                            const IconComponent = skill.icon;
                            return (
                                <div
                                    key={`mob-learn-${lIdx}`}
                                    className="col-20 d-flex flex-column align-items-center justify-content-center p-1 mb-2"
                                    style={{ flex: '0 0 20%', maxWidth: '20%' }}
                                >
                                    <div className="fs-1 d-flex align-items-center justify-content-center mb-1" style={{ color: skill.color }}>
                                        <IconComponent />
                                    </div>
                                    <span className="text-center text-truncate w-100" style={{ fontSize: '0.62rem', lineHeight: '1.1' }}>
                                        {skill.name}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    <div className="d-none d-md-flex flex-wrap py-2">
                        {learningSkills.map((skill, lIdx) => {
                            const IconComponent = skill.icon;
                            return (
                                <div
                                    key={`learn-${lIdx}`}
                                    className="d-flex flex-column align-items-center justify-content-center px-4 mb-3"
                                    style={{ minWidth: '120px' }}
                                >
                                    <div className="fs-1 d-flex align-items-center justify-content-center mb-1" style={{ color: skill.color }}>
                                        <IconComponent />
                                    </div>
                                    <span>{skill.name}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

              <div className="pt-md-5 pt-3 border-top border-secondary border-opacity-25 mt-md-4 mt-0">
                <div className="mb-md-4 mb-2">
                    <h4 className="mb-2">Other Skills & Knowledge</h4>
                </div>

                <div className="row g-2 d-flex d-md-none py-2 justify-content-center">
                    {networkingSkills.map((skill, nIdx) => {
                        const IconComponent = skill.icon;
                        return (
                            <div
                                key={`mob-net-${nIdx}`}
                                className="d-flex flex-column align-items-center p-1 mb-3"
                                style={{ flex: '0 0 25%', maxWidth: '25%' }}
                            >
                                <div className="fs-2 d-flex align-items-center justify-content-center mb-1" style={{ color: skill.color, height: '32px' }}>
                                    <IconComponent />
                                </div>
                                <span 
                                    className="text-center w-100 px-1" 
                                    style={{ 
                                        fontSize: '0.65rem', 
                                        lineHeight: '1.15', 
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        minHeight: '2.3em'
                                    }}
                                >
                                    {skill.name}
                                </span>
                            </div>
                        );
                    })}
                </div>

                <div className="d-none d-md-flex flex-wrap py-2">
                    {networkingSkills.map((skill, nIdx) => {
                        const IconComponent = skill.icon;
                        return (
                            <div
                                key={`net-${nIdx}`}
                                className="d-flex flex-column align-items-center justify-content-center px-4 mb-3"
                                style={{ minWidth: '120px' }}
                            >
                                <div className="fs-2 d-flex align-items-center justify-content-center mb-1" style={{ color: skill.color }}>
                                    <IconComponent />
                                </div>
                                <span>{skill.name}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

            </div>
        </section>
    );
}

export default Skills;