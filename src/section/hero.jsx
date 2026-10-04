import HeroContent from '../components/hero/HeroContent';
import HeroImage from '../components/hero/HeroImage';

function Hero({ theme }) {
  return (
    <section className="py-5">
      <div className="container py-5 px-md-5 mt-5">
        <div className="row align-items-center justify-content-evenly">
          <HeroContent theme={theme} />
          <HeroImage theme={theme} />
        </div>
      </div>
    </section>
  );
}

export default Hero;