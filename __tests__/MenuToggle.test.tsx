import React from 'react';
import { render, screen, fireEvent } from './test-utils';
import MenuToggle from '../src/components/MenuToggle/MenuToggle';
import '@testing-library/jest-dom';

describe('MenuToggle', () => {
  test('clicking the burger icon shows the menu', () => {
    // Render MenuToggle
    render(<MenuToggle />);

    // Get the button that toggles the menu
    const burgerIcon = screen.getByRole('button', { name: /open menu/i });

    // click on the burger icon
    fireEvent.click(burgerIcon);

    // Get the menu (which should appear after the button is clicked)
    const menu = screen.getByRole('navigation');

    // Assert that the menu is now visible
    expect(menu).toBeVisible();
  });

  test('clicking the back icon hides the menu', () => {
    // Render the MenuToggle component
    render(<MenuToggle />);

    // Get the button that toggles the menu
    const burgerIcon = screen.getByRole('button', { name: /open menu/i });

    // Simulate clicking the burger icon to show the menu
    fireEvent.click(burgerIcon);

    // Get the back button that closes the menu
    const backButton = screen.getByRole('button', { name: /close menu/i });

    // Simulate a user click on the back button
    fireEvent.click(backButton);

    // Get the menu element again
    const hiddenMenu = screen.queryByRole('navigation');

    // Assert that the menu is hidden
    expect(hiddenMenu).toBeNull();  // The menu should no longer be accessible
  });
});
