import AboutIllustration from '../components/about/AboutIllustration';
import AboutContent from '../components/about/AboutContent';

function About({ theme }) {
    const isBlack = theme === 'black';

    return (
        <section id="about" className={`py-md-5 overflow-hidden ${isBlack ? 'bg-black text-light' : 'bg-light text-dark'}`}>
            <div className="container px-md-5 p-3">
                <div className="row align-items-center g-4">                
                    <AboutIllustration isBlack={isBlack} />
                    <AboutContent isBlack={isBlack} />
                </div>
            </div>
        </section>
    );
}

export default About;