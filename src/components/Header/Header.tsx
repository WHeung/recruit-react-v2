import React from 'react';
import MenuToggle from '../MenuToggle/MenuToggle';
import { useMenu } from '../../context/MenuContext';

const Header: React.FC = () => {
  return (
    <header className='h-[3rem] flex items-center justify-between p-1 bg-gray-300' aria-label='Main Header'>
      <MenuToggle />
      {/* Centered Text */}
      <h1 className='mx-auto' aria-label='register-card-heading'>
        Register card form
      </h1>
    </header>
  );
};

export default Header;
