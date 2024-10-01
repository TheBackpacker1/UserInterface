import 'primereact/resources/primereact.min.css';   
import Navbar from './NavBar';
import HeroSection from './HeroSection'
import 'primereact/resources/themes/lara-light-teal/theme.css';
import MarketTrend from './MarketTrend';
import { Button } from 'primereact/button'; // Import Button from PrimeReact
import { useEffect, useState } from 'react';


const LandingPage = () => {
  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (

    <div style={{ backgroundColor:'#ffffff', minHeight: '100vh',color:'#000000' }}>   
       <div id="hero-section">
      <Navbar />
        <HeroSection />
      </div>
      <div id="market-trend-section">
        <MarketTrend />
      </div>
      {showScroll && (
        <Button
          icon="pi pi-arrow-up" // Use PrimeReact icon
          onClick={scrollToTop}
          className="back-to-top-button" // Add custom class for styling
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            zIndex: 1000,
            backgroundColor: '#26A69A',
            border: 'none',
            borderRadius: '50%',
          }}
        />
      )}

      </div> 
  );

  
};export default LandingPage;