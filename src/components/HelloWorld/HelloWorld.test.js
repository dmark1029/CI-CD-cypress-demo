import { render, screen, fireEvent } from '@testing-library/react';
import HelloWorld from './HelloWorld';

describe('HelloWorld Component', () => {
  test('renders initial message', () => {
    render(<HelloWorld />);
    const messageElement = screen.getByText(/Hello, World!/i);
    expect(messageElement).toBeInTheDocument();
  });
  test('toggles message on button click', () => {
    render(<HelloWorld />);
    const button = screen.getByRole('button', { name: /toggle message/i });
    fireEvent.click(button);
    const messageElement = screen.getByText(/Goodbye, World!/i);
    expect(messageElement).toBeInTheDocument();
    fireEvent.click(button);
    const messageElementBack = screen.getByText(/Hello, World!/i);
    expect(messageElementBack).toBeInTheDocument();
  });

  test('button click should toggle between two messages', () => {
    render(<HelloWorld />);
    const initialMessage = screen.getByText(/Hello, World!/i);
    expect(initialMessage).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /toggle message/i }));
    const goodbyeMessage = screen.getByText(/Goodbye, World!/i);
    expect(goodbyeMessage).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /toggle message/i }));
    const helloMessage = screen.getByText(/Hello, World!/i);
    expect(helloMessage).toBeInTheDocument();
  });
});

describe('HelloWorld Component - Integration Test', () => {
  test('renders initial message "Hello, World!"', () => {
    render(<HelloWorld />);
    const messageElement = screen.getByText(/Hello, World!/i);
    expect(messageElement).toBeInTheDocument();
  });

  test('toggles message on button click', () => {
    render(<HelloWorld />);
    const initialMessage = screen.getByText(/Hello, World!/i);
    expect(initialMessage).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /toggle message/i }));
    const goodbyeMessage = screen.getByText(/Goodbye, World!/i);
    expect(goodbyeMessage).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /toggle message/i }));
    const helloMessageBack = screen.getByText(/Hello, World!/i);
    expect(helloMessageBack).toBeInTheDocument();
  });
  test('integration of button click and state change', () => {
    render(<HelloWorld />);
    const messageElement = screen.getByText(/Hello, World!/i);
    expect(messageElement).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /toggle message/i }));
    const goodbyeMessage = screen.getByText(/Goodbye, World!/i);
    expect(goodbyeMessage).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /toggle message/i }));
    const helloMessageBack = screen.getByText(/Hello, World!/i);
    expect(helloMessageBack).toBeInTheDocument();
  });
});