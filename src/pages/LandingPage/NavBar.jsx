import { useState } from 'react'; 
import { Dropdown } from 'primereact/dropdown'; 
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import 'primeicons/primeicons.css'; 
import PropTypes from 'prop-types';

const NavBar = ({  darkMode, handleThemeSwitch }) => {

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
    { label: 'Home', icon: 'pi pi-home' },
    { label: 'Businesses', icon: 'pi pi-briefcase' },
    { label: 'Trade', icon: 'pi pi-bitcoin' },
    { label: 'Market', icon: 'pi pi-chart-line' },
    { label: 'Learn', icon: 'pi pi-book' },
  ];

  const end = (
    <div className='p-menubar-custom-end flex align-items-center'> 
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
        icon={darkMode ? 'pi pi-moon' : 'pi pi-sun'}
        className="p-button-text p-mx-3"
        onClick={handleThemeSwitch}
        style={{ fontSize: '1.5rem', color: '#ffffff' }}
        aria-label="Theme Switcher"
      />
      <Button
        label="Login"
        icon="pi pi-sign-in"
        className="p-button-text"
        style={{ marginLeft: '1rem', color: '#ffffff' }}
        onClick={() => console.log('Login clicked')}
      />
    </div>
  );

  const start = <h1 className='text-white mr-6'>CryptoInvest</h1>;

  return (
    <Menubar model={navItems} start={start} end={end} 
    className='custom-menubar flex justify-content-between ' />
  );
};


NavBar.propTypes = {
  selectedTheme: PropTypes.string.isRequired,
  darkMode: PropTypes.bool.isRequired,
  handleThemeSwitch: PropTypes.func.isRequired,
};
export default NavBar;
