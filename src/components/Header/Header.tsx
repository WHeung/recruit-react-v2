import React from 'react';
import MenuToggle from '../MenuToggle/MenuToggle';
import { useMenu } from '../../context/MenuContext';

const Header: React.FC = () => {
  return (
    <header className='h-[3rem] flex items-center justify-between p-1 bg-gray-300' aria-label='Main Header'>
      <MenuToggle />
      {/* Centered Text */}
      <h4 className='mx-auto'>Register card form</h4>
    </header>
  );
};

export default Header;
