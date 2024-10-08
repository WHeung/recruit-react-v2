import React, { FC } from 'react';
import * as styles from './app.module.scss';
import Header from './components/Header/Header';
import { MenuProvider } from './context/MenuContext';
import RegisterCardForm from './components/RegisterCardForm/RegisterCardForm';

export const App = () => {
  return (
    <main>
      <MenuProvider>
        <Header />
        <section className={styles.content}>
          <RegisterCardForm />
        </section>
      </MenuProvider>
    </main>
  );
};
