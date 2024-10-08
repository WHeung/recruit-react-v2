import React from 'react';
import { render } from './test-utils';
import { App } from '../src/app';

describe('App', () => {
  it('renders homepage unchanged', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
