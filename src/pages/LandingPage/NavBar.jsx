
import { useState } from 'react'
import { Menubar } from 'primereact/menubar'
import { Button } from 'primereact/button';
import  {Dropdown} from 'primereact/dropdown' 

const NavBar = () => {
  const isMobile = window.innerWidth <= 640

  const [themeMode, setThemeMode] = useState('light');
  const [selectedLanguage,setSelectedLanguage]=useState('EN')

  const toggleTheme = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
  };

  const languages = [
    { label: 'EN', value: 'EN' },
    { label: 'FR', value: 'FR' },
    { label: 'AR', value: 'AR' },
    { label: 'DE', value: 'DE' },
    { label: 'TUR', value: 'TUR' },
    { label: 'ESP', value: 'ESP' },

  ];

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.value); // Update the selected language state
    console.log('Language changed to:', e.value);
  };

  const navItems = [
    { label: 'Home', icon: 'pi pi-home' },
    { label: 'Businesses', icon: 'pi pi-briefcase' },
    { label: 'Trade', icon: 'pi pi-bitcoin' },
    { label: 'Market', icon: 'pi pi-chart-line' },
    { label: 'Learn', icon: 'pi pi-book' },
  ] 

 

  const end =(
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
        label="Login"
        icon="pi pi-sign-in"
        className="p-button-text "
        style={{ marginLeft: '1rem', color: '#ffffff' }}

        onClick={() => console.log('Login clicked')}
      />
    </div>
   



  )
   const start = <h1 className='text-white mr-4'>CryptoInvest </h1>

  return (
    <div className={`navbar-container ${themeMode ==='dark' ? 'bg-gray-800 text-white' : ''}`}>

      <Menubar model={navItems}
      start={start}
      end={end}
       className='custom-menubar felx justify-content-between'
        />
   
    </div>
  )
}

export default NavBar