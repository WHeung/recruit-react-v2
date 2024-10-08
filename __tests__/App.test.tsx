import React from 'react';
import { render, screen } from './test-utils';
import { App } from '../src/app';
import '@testing-library/jest-dom';

describe('App', () => {
  test('render the app with header', () => {
    // Render the App component
    render(<App />);

    // Look for the header element
    const header = screen.getByRole('banner', { name: /main header/i }); // "Main Header" as defined by aria-label

    // Assert that the header is in the document
    expect(header).toBeInTheDocument();
  });
});
