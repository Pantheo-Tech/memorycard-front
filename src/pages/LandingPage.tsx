import Header from '../components/Header';
import Background from '../components/landing-page/Background';
import HeroSection from '../components/landing-page/HeroSection';
import HeroSectionTitle from '../components/landing-page/HeroSectionTitle';

const LandingPage = () => {
  return (
    <div className='bg-background relative -z-20'>
      <Background />
      <Header />
      <HeroSection />
      <HeroSectionTitle title="Sobre Nós" />
    </div>
  );
}

export default LandingPage