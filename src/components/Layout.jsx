import  { useState } from 'react';
import { Menu } from 'primereact/menu';
import { Toolbar } from 'primereact/toolbar';
import { Link } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import PropTypes from 'prop-types';

import './Layout.css';
const Layout = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const handleClose = () => {
    setVisible(false)
  }
  const rightItems = [
    <div className="" key="search">
      <span className="p-input-icon-left">
    <i className="pi pi-search" />
    <InputText placeholder="Search" />
</span>
    </div>,
    <Button icon="pi pi-bell" rounded text severity="warning" aria-label="Notification" key='notification' style={{backgroundColor:'',color:'grey'}}/>
    ,

    <Button icon="pi pi-user" rounded severity="info" aria-label="User" key='user' style={{backgroundColor:'grey'}}/>




  ];
  const sidebarItems = [
    {
      label: 'Dashboard',
      icon: 'pi pi-fw pi-home',
      to: '/dashboard',
      component: Link,
    },
    {
      label: 'Trending Market',
      icon: 'pi pi-fw pi-chart-line',
      to: '/trendingMarket',
      component: Link,
    },
    {
      label: 'Analyze',
      icon: 'pi pi-few pi-chart-bar' , 
      to: '/analyze',
      component: Link,
    }   ,
    {

          label: ' Historique',
          icon:'pi pi-few pi-history',
          to: '/history',
           component: Link,

    },
    {
      label: 'Exchange',
      icon: 'pi pi-fw pi-bitcoin',
      to: '/exchange',
      component: Link,
     
        },
 
   
    {
      label: 'Settings',
      icon:"pi pi-cog",
      to: '/settings',
      component: Link,
    },
    {
      label: 'Profile',
      icon: 'pi pi-fw pi-user',
      command: () => {
        handleClose();
      },
    },
  ];
  return (
    <div className="layout">
      <Toolbar className=" p-mb-6 p-d-flex p-jc-space-between "
        right={rightItems}>
        <div className='p-d-flex p-ai-center' style={{color:'white'}}>
          <h3 >Welcome Back Mohamed!</h3>
          <i className='pi pi-user p-ml-3 p-mr-3'></i>
        </div>
      </Toolbar>
      <Sidebar visible={visible} style={{ width: '250px'  }} baseZIndex={1000000}
        onHide={() => setVisible(false)}>
        <Menu model={sidebarItems} />
      </Sidebar>
      <Button type="button" icon="pi pi-bars" onClick={() => setVisible(true)} />
      <div className='main-content'> {children}
      </div>
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;