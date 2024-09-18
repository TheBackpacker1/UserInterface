
import {Menubar} from 'primereact/menubar'
import { Button } from "primereact/button" 







const NavBar = () => {
  const isMobile= window.innerWidth <= 640 

 const navItems = [
  {label:'Home',icon:'pi pi-home'},  
  {label:'Businesses', icon:'pi pi-briefcase'},
  {label:'Trade',icon:'pi pi-exchange'},
  {label:'Market',icon:'pi pi-chart-line'},
  {label:'Learn',icon:'pi pi-book'},

  {label:'EN',
    icon: 'pi pi-globe',
    items:[
      
      {label:'FR'},
      {label:'AR'},
      {label:'DE'},
      {label:'ES'},

      
      ]
  },
  {
    label: loggedIn ? 'Logout' : 'Login',
    icon: loggedIn ? 'pi pi-poweroff' : 'pi pi-sign-in',
    command: loggedIn ? handleLogout : handleLogin,
  },

 ]


  return (
    <div className="navbar-container">
     <Menubar model={navItems} className={`flex ${isMobile ? 'justify-centre': 'justify-content-end'}`} /> 



    </div>
  )
}

export default NavBar