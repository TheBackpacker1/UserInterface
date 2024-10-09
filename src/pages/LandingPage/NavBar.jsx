import { useState } from 'react'; 
import { Dropdown } from 'primereact/dropdown'; 
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import  './NavBar.css'
import PropTypes from 'prop-types';

const NavBar =({setShowDialog,setIsSignUp,isAuthenticated, onLogout}) => {

  const [selectedLanguage, setSelectedLanguage] = useState('EN');

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.value); // Update the selected language state
    console.log('Language changed to:', e.value); // Log the language change
  };

  const languages = [
    { label: 'EN', value: 'EN' },
    { label: 'FR', value: 'FR' },
    { label: 'AR', value: 'AR' },
    { label: 'DE', value: 'DE' },
    { label: 'TUR', value: 'TUR' },
    { label: 'ESP', value: 'ESP' },
  ];

  const navItems = [
    { label: 'Home', icon: 'pi pi-home',command: () => scrollToSection('hero-section') }, 
      { label: 'Market', icon: 'pi pi-chart-line', command: () => scrollToSection('market-trend-section') },
    { label: 'Businesses', icon: 'pi pi-briefcase' ,command: () => scrollToSection('businesses-section')},
    { label: 'Guide', icon: 'pi pi-info-circle', command: () => scrollToSection('guide-section') },
    { label: 'Learn', icon: 'pi pi-book', command: () => scrollToSection('learn-section') }
  ];

  const end = isAuthenticated ?(
    <div className=''> 
      <Dropdown  
      value={selectedLanguage}
        options={languages}
        onChange={handleLanguageChange}
        style={{
          border: 'none',
          boxShadow: 'none',
          padding: '0.25rem',
          background: 'transparent',
        }}
        placeholder='Select a language' 
      />
      
      <Button
        label="Login"
        icon="pi pi-sign-in"
        className="p-button-text"
        style={{ marginLeft: '1rem',
           color: '#ffffff',
           backgroundColor: '#26A69A',

           }}
        onClick={onLogout}
      />
    </div>
  ):(<div className=''>
    <Dropdown
      value={selectedLanguage}
      options={languages}
      onChange={handleLanguageChange}
      style={{
        border: 'none',
        boxShadow: 'none',
        padding: '0.25rem',
        background: 'transparent',
      }}
      placeholder='Select a language'
    />
    <Button
      label="Login"
      icon="pi pi-sign-in"
      className="p-button-text"
      style={{
        marginLeft: '1rem',
        color: '#ffffff',
        backgroundColor: '#26A69A',
      }}
      onClick={() => {
        setShowDialog(true);
        setIsSignUp(false);
      }}
    />
  </div>
);


  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const start = (
    <h1 style={{ cursor: 'pointer' }} onClick={() => scrollToSection('hero-section')}>
      CryptoInvest
    </h1>
  );
  return (
    <Menubar model={navItems} start={start} end={end}    className='custom-menubar  ' />
    
  );
};


NavBar.propTypes = {
  selectedTheme: PropTypes.string.isRequired,
  darkMode: PropTypes.bool.isRequired,
  handleThemeSwitch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired, 
  onLogout: PropTypes.func.isRequired, 
  setShowDialog: PropTypes.func.isRequired, 
  setIsSignUp: PropTypes.func.isRequired,   
};
export default NavBar;
