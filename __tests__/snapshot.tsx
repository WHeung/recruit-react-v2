import { render } from '@testing-library/react';
import App from '../src/app';

describe('Page', () => {
  it('renders homepage unchanged', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
