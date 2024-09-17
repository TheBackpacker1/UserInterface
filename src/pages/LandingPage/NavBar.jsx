import { Menubar, MenuItem } from 'primereact/menubar';
function Navbar() {
  const model = [
    {
      label: 'CryptoCap',
      icon: 'pi pi-home',
      items: [
        { label: 'Home' },
        { label: 'Businesses' },
        { label: 'Trade' },
        { label: 'Market' },
        { label: 'Learn' },
      ],
    },
    {
      label: 'EN',
      icon: 'pi pi-globe',
      items: [
        { label: 'FR' },
        { label: 'DE' },
        { label: 'ES' },
      ],
    },
    { label: 'Login', icon: 'pi pi-user' },
  ];

  return (
    <Menubar className="custom-navbar" model={model} />
  );
}

export default Navbar;