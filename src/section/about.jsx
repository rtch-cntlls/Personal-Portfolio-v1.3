import AboutIllustration from '../components/about/AboutIllustration';
import AboutContent from '../components/about/AboutContent';

function About({ theme }) {
    const isBlack = theme === 'black';

    return (
        <section id="about" className={`py-5 overflow-hidden ${isBlack ? 'bg-black text-light' : 'bg-light text-dark'}`}>
            <div className="container px-md-5 p-0">
                <div className="row align-items-center g-4 g-lg-5 px-2 px-md-4">                
                    <AboutIllustration isBlack={isBlack} />
                    <AboutContent isBlack={isBlack} />
                </div>
            </div>
        </section>
    );
}

export default About;