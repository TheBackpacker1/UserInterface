import React, { useRef } from 'react';
import { Menu } from 'primereact/menu';
import { Toolbar } from 'primereact/toolbar';
import { Link } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuRef = useRef(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const rightItems = [
    <div className="p-inputgroup" key="search">
      <InputText placeholder="Search" />
      <Button icon="pi pi-search" className="p-button-secondary" />
    </div>,
  ];

  return (
    <>
      <Toolbar className="p-mb-6 p-d-flex p-jc-space-between " right={rightItems} />
      <Menu
        id="menu-appbar"
        ref={menuRef} // pass the ref here
        model={[
          {
            label: 'Dashboard',
          },
          {
            label: 'Trending Market',
          },
          {
            label: 'Analyze',
            items: [
              {
                label: '00 Historique',
                component: Link,
                to: '/history',
              },
              {
                label: 'Token',
                icon: 'pi pi-fw pi-file',
              },
              {
                label: 'Symbol',
                icon: 'pi pi-fw pi-hashtag',
              },
              {
                label: '24H Change',
                icon: 'pi pi-fw pi-history',
              },
              {
                label: 'Last Price',
                icon: 'pi pi-fw pi-dollar',
              },
              {
                label: 'Market Cap',
                icon: 'pi pi-fw pi-chart-bar',
              },
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
              {
                label: 'Ethereum',
                icon: 'pi pi-fw pi-ethereum',
                command: () => {
                  handleClose();
                },
              },
              {
                label: 'Terra',
                icon: 'pi pi-fw pi-trending-up',
                command: () => {
                  handleClose();
                },
              },
              {
                label: 'BNB',
                icon: 'pi pi-fw pi-bank',
                command: () => {
                  handleClose();
                },
              },
              {
                label: 'Cardano',
                icon: 'pi pi-fw pi-credit-card',
                command: () => {
                  handleClose();
                },
              },
            ],
          },
          {
            label: 'Setting',
          },
          {
            label: 'Profile',
            icon: 'pi pi-fw pi-user',
            command: () => {
              handleClose();
            },
          },
        ]}
        popup
        appendTo="self"
        onHide={handleClose}
      />
      {children}
    </>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;