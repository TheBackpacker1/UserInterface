
import { useState } from 'react'
import { Menubar } from 'primereact/menubar'
import { Button } from "primereact/button"

import { ToggleSwitch } from 'primereact/toggleswitch';





const NavBar = () => {
  const isMobile = window.innerWidth <= 640

  const [themeMode, setThemeMode] = useState('light');
  const toggleTheme = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
  };
  const navItems = [
    { label: 'Home', icon: 'pi pi-home' },
    { label: 'Businesses', icon: 'pi pi-briefcase' },
    { label: 'Trade', icon: 'pi pi-bitcoin' },
    { label: 'Market', icon: 'pi pi-chart-line' },
    { label: 'Learn', icon: 'pi pi-book' },

    {
      label: 'EN',
      icon: 'pi pi-globe',
      items: [
        { label: 'FR' },
        { label: 'AR' },
        { label: 'DE' },
        { label: 'TUR' },
        { label: 'UK' },


      ]
    },
    {
      label: 'Login',
      icon: 'pi pi-sign-in',
      command: () => {
        // Implement your login logic here
        console.log('Login clicked');
      },
    },
  ]
  return (
    <div className={`navbar-container ${themeMode ==='dark' ? 'bg-gray-800 text-white' : ''}`}>
      <h1 className={`text-white mr-4 ${themeMode === 'dark' ? 'text-gray-300' : ''}`}>CryptoInvest</h1>

      <Menubar model={navItems} className={`flex ${isMobile ? 'justify-centre' : 'justify-content-end'}`} />
      <div className="flex items-center">
        <ToggleSwitch checked={themeMode === 'dark'} onChange={toggleTheme} />
        {loggedIn ? (
          <Button label="Logout" onClick={} className="p-button-rounded p-button-secondary" />
        ) : (
          <Button label="Login" onClick={} className="p-button-rounded p-button-secondary" />
        )}
      </div>
    </div>
  )
}

export default NavBar