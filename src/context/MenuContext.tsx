import React, { createContext, useState, useContext, ReactNode } from 'react';

interface IMenuContext {
  menuVisible: boolean;
  toggleMenu: () => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuVisible((prevState) => !prevState);
  };

  return <MenuContext.Provider value={{ menuVisible, toggleMenu }}>{children}</MenuContext.Provider>;
};

// Custom hook to use the MenuContext
export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};
