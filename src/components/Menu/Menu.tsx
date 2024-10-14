import React from 'react';
import { IMenuContext, useMenu } from '../../context/MenuContext';

const Menu: React.FC = () => {
  const { menuVisible, toggleMenu } = useMenu();

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 text-white transform transition-transform duration-300 ease-in-out ${
        menuVisible ? 'translate-x-0' : '-translate-x-full'
      }`}
      aria-hidden={!menuVisible}
      aria-expanded={menuVisible}
      role='dialog'
    >
      <div className='h-[3rem] flex items-center justify-between p-1 '>
        {/* Close button */}
        <button aria-expanded={menuVisible} aria-controls='menu' aria-label={'Close menu'} onClick={() => toggleMenu(false)}>
          <BackIcon />
        </button>
        <h1 className='mx-auto' aria-label='menu-heading'>
          Menu
        </h1>
      </div>
      <nav role='navigation' aria-labelledby='menu-heading'>
        <p>This is menu content</p>
      </nav>
    </div>
  );
};

// BackIcon
const BackIcon = () => (
  <svg className='w-8 h-8 fill-white' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
    <g data-name='Layer 2'>
      <g data-name='arrow-back'>
        <rect width='24' height='24' transform='rotate(90 12 12)' opacity='0' />
        <path d='M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z' />
      </g>
    </g>
  </svg>
);

export default Menu;
