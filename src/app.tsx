import React, { FC } from 'react';
import * as styles from './app.module.scss';
import Header from './components/Header';
import { MenuProvider } from './context/MenuContext';

export const App = () => {
  return (
    <main>
      <MenuProvider>
        <Header />
      </MenuProvider>
    </main>
  );
};
