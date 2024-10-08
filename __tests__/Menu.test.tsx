import React from 'react';
import { render, screen } from './test-utils';
import Menu from '../src/components/Menu/Menu';
import '@testing-library/jest-dom';

describe('Menu', () => {
  test('renders the Menu', () => {
    render(<Menu />);

    // Look for the navigation element
    const menu = screen.getByRole('heading', { name: /menu/i, hidden: true });

    // Assert
    expect(menu).toBeInTheDocument();
  });
});
