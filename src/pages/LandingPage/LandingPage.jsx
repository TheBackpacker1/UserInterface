import 'primereact/resources/primereact.min.css';   
import Navbar from './NavBar';
import HeroSection from './HeroSection'
import 'primereact/resources/themes/lara-light-teal/theme.css';
import MarketTrend from './MarketTrend';



const LandingPage = () => {

  return (

    <div style={{ backgroundColor:'#ffffff', minHeight: '100vh',color:'#000000' }}>
      <Navbar />
      <HeroSection />
      <MarketTrend />

      </div> 
  );

  
};export default LandingPage;