import 'primereact/resources/primereact.min.css';   
import Navbar from './NavBar';
import HeroSection from './HeroSection'
import 'primereact/resources/themes/lara-light-teal/theme.css';
import MarketTrend from './MarketTrend';
import { Button } from 'primereact/button'; // Import Button from PrimeReact
import { useEffect, useState } from 'react';
import Businesses from './Businesses';
import Guide from './Guide';
import Learn from './Learn';
import Footer from './Footer'
import AuthDialog from '../AuthDialog';

const LandingPage = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
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
      <Navbar setShowDialog={setShowDialog} setIsSignUp={setIsSignUp}/>
      <AuthDialog showDialog={showDialog} setShowDialog={setShowDialog} isSignUp={isSignUp} setIsSignUp={setIsSignUp} />

        <HeroSection />
      </div>
      <div id="market-trend-section">
        <MarketTrend />
      </div>
      <div id="businesses-section"> 
        <Businesses /></div>
     
      <div id="guide-section">
         <Guide /></div>

         <div id="learn-section">
         <Learn/></div>
         <Footer /> 

      {showScroll && (
        <Button
          icon="pi pi-arrow-up"
          onClick={scrollToTop}
          className="back-to-top-button" 
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