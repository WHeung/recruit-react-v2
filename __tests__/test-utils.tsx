// src/test-utils.tsx
import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { MenuProvider } from '../src/context/MenuContext';

// Define a custom render function that wraps components with providers
const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => {
  return render(ui, { wrapper: Providers, ...options });
};

// Component to wrap UI with necessary providers
const Providers = ({ children }) => {
  return <MenuProvider>{children}</MenuProvider>;
};

export * from '@testing-library/react';
export { customRender as render };
