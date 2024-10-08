import React from 'react';
import { useMenu } from '../context/MenuContext';

const MenuToggle: React.FC = () => {
  // Use the context to get the menu state and toggle function
  const { menuVisible, toggleMenu } = useMenu();

  return (
    <div>
      <button aria-expanded={menuVisible} aria-controls='menu' aria-label={menuVisible ? 'Close menu' : 'Open menu'} onClick={toggleMenu}>
        {menuVisible ? 'Close Menu' : 'Open Menu'}
      </button>

      {/* Conditionally render the menu */}
      {menuVisible && (
        <nav id='menu' role='navigation'>
          This is menu context
        </nav>
      )}
    </div>
  );
};

export default MenuToggle;
