import React from 'react';
import MenuToggle from './MenuToggle';

const Header: React.FC = () => {
  return (
    <header className='header' aria-label='Main Header'>
      <MenuToggle />
    </header>
  );
};

export default Header;
