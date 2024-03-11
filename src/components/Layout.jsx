import React, { useState } from 'react';
import { Menu } from 'primereact/menu';
import { Toolbar } from 'primereact/toolbar';
import { Link } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import PropTypes from 'prop-types';
import './Layout.css';
import { Badge } from 'primereact/badge'
const Layout = ({ children }) => {
  const [visible, setVisible] = useState(true);
  const handleClose = () => {
    setVisible(false)
  }
  const rightItems = [
    <div className="p-inputgroup" key="search">
      <InputText placeholder="Search" />
      <Button icon="pi pi-search" className="p-button-secondary" />
    </div>,
    <Button icon="pi pi-bell" className='p-button-secondary' key='notfications'>
      <Badge value='4' severity="danger"></Badge>
    </Button>
  ];
  const sidebarItems = [
    {
      label: 'Dashboard',
      to: '/dashboard',
      component: Link,
    },
    {
      label: 'Trending Market',
      to: '/trending-market',
      component: Link,
    },
    {
      label: 'Analyze',
      items: [
        {
          label: ' Historique',
          to: '/history',
          component: Link,
        },
        // ... other Analyze sub-menu items
      ],
    },
    {
      label: 'Exchange',
      items: [
        {
          label: 'Bitcoin',
          icon: 'pi pi-fw pi-bitcoin',
          command: () => {
            handleClose();
          },
        },
        // ... other Exchange items
      ],
    },
    {
      label: 'Setting',
      to: '/setting',
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
        <div className='p-d-flex p-ai-center'>
          <h3>Welcome Back Mohamed!</h3>
          <i className='pi pi-user p-ml-3 p-mr-3'></i>
        </div>
      </Toolbar>
      <Sidebar visible={visible} style={{ width: '250px' }} baseZIndex={1000000}
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