import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello, World! message', () => {
  render(<App />);
  const helloWorldElement = screen.getByText(/Hello, World!/i);
  expect(helloWorldElement).toBeInTheDocument();
});