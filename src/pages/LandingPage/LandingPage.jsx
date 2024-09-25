import { useState,useRef } from 'react';
import 'primereact/resources/primereact.min.css';   
import Navbar from './NavBar';
import HeroSection from './HeroSection'
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primeicons/primeicons.css'; 




const LandingPage = () => {
  const [selectedTheme, setSelectedTheme] = useState('saga-blue');
  const [darkMode, setDarkMode] = useState(false);


  const heroRef = useRef(null);

  const scrollToHero = () => {
    if (heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const switchTheme = (theme) => {
    const themeLink = document.getElementById('theme-link');
    if (themeLink) {
      themeLink.href = `/themes/${theme}/theme.css`;
    }
  };

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
    switchTheme(theme);
  };

  const handleThemeSwitch = () => {
    const theme = darkMode ? 'saga-blue' : 'arya-blue';  // Light and dark theme
    setDarkMode(!darkMode);
    handleThemeChange(theme);
  };
  return (

    <div style={{ backgroundColor: darkMode ? '#212121' : '#ffffff', minHeight: '100vh', color: darkMode ? '#ffffff' : '#000000' }}>
    <Navbar 
      selectedTheme={selectedTheme}
      darkMode={darkMode}
      handleThemeSwitch={handleThemeSwitch}
      handleThemeChange={handleThemeChange}
      onHomeClick={scrollToHero} 

    />
      <HeroSection ref={heroRef} />
      </div> 
  );

  
};export default LandingPage;