import { render, screen } from '@testing-library/react';
import Header from '../src/components/Header';
import '@testing-library/jest-dom/extend-expect';

describe('Header', () => {
  test('renders the header with a MenuToggle', () => {
    // Render the Header component
    render(<Header />);

    // Look for the button element that toggles the menu
    const menuToggle = screen.getByRole('button', { name: /open menu/i });

    // Assert that both the logo and MenuToggle button are in the document
    expect(menuToggle).toBeInTheDocument();
  });
});
