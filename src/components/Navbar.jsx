import React from 'react';
import { useAppContext } from '../context';
import NavLinks from './NavLinks';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const { openSidebar, setPageId } = useAppContext();

  const handleSubmenu = (e) => {
    if (e.target.classList.value === 'nav-links') {
      setPageId(null);
    }
  };

  return (
    <nav onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <h3 className='logo'>Strapi</h3>
        <NavLinks />
        <button className='toggle-btn' onClick={openSidebar}>
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
