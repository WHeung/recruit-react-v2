import React from 'react';
import { useMenu } from '../../context/MenuContext';

const MenuToggle: React.FC = () => {
  // Use the context to get the menu state and toggle function
  const { menuVisible, toggleMenu } = useMenu();

  return (
    <>
      <button aria-expanded={menuVisible} aria-controls='menu' aria-label={menuVisible ? 'Close menu' : 'Open menu'} onClick={toggleMenu}>
        <BurgerIcon />
      </button>

      {/* Conditionally render the menu */}
      {menuVisible && (
        <nav id='menu' role='navigation'>
          This is menu context
        </nav>
      )}
    </>
  );
};

const BurgerIcon = () => (
  <svg className='w-8 h-8' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M5 6.5H19V8H5V6.5Z' fill='#1F2328' />
    <path d='M5 16.5H19V18H5V16.5Z' fill='#1F2328' />
    <path d='M5 11.5H19V13H5V11.5Z' fill='#1F2328' />
  </svg>
);
export default MenuToggle;
