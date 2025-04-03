import { render, screen, fireEvent } from '@testing-library/react';
import HelloWorld from './HelloWorld';

describe('HelloWorld Component', () => {
  test('renders initial message', () => {
    render(<HelloWorld />);

    // Check if the initial message "Hello, World!" is rendered
    const messageElement = screen.getByText(/Hello, World!/i);
    expect(messageElement).toBeInTheDocument();
  });

  test('toggles message on button click', () => {
    render(<HelloWorld />);

    // Get the button and click it
    const button = screen.getByRole('button', { name: /toggle message/i });
    fireEvent.click(button);

    // Check if the message changes to "Goodbye, World!"
    const messageElement = screen.getByText(/Goodbye, World!/i);
    expect(messageElement).toBeInTheDocument();

    // Click again to toggle back
    fireEvent.click(button);

    // Check if the message toggles back to "Hello, World!"
    const messageElementBack = screen.getByText(/Hello, World!/i);
    expect(messageElementBack).toBeInTheDocument();
  });

  test('button click should toggle between two messages', () => {
    render(<HelloWorld />);

    // Initially, message should be "Hello, World!"
    const initialMessage = screen.getByText(/Hello, World!/i);
    expect(initialMessage).toBeInTheDocument();

    // After one click, it should be "Goodbye, World!"
    fireEvent.click(screen.getByRole('button', { name: /toggle message/i }));
    const goodbyeMessage = screen.getByText(/Goodbye, World!/i);
    expect(goodbyeMessage).toBeInTheDocument();

    // After another click, it should toggle back to "Hello, World!"
    fireEvent.click(screen.getByRole('button', { name: /toggle message/i }));
    const helloMessage = screen.getByText(/Hello, World!/i);
    expect(helloMessage).toBeInTheDocument();
  });
});

describe('HelloWorld Component - Integration Test', () => {
  
  // Test 1: Check if the component renders with initial state
  test('renders initial message "Hello, World!"', () => {
    render(<HelloWorld />);
    
    // Check if the message initially renders correctly
    const messageElement = screen.getByText(/Hello, World!/i);
    expect(messageElement).toBeInTheDocument();
  });

  // Test 2: Check if clicking the button toggles the message between "Hello, World!" and "Goodbye, World!"
  test('toggles message on button click', () => {
    render(<HelloWorld />);

    // Initial message should be "Hello, World!"
    const initialMessage = screen.getByText(/Hello, World!/i);
    expect(initialMessage).toBeInTheDocument();

    // Simulate a click on the button
    fireEvent.click(screen.getByRole('button', { name: /toggle message/i }));

    // After clicking the button, message should be "Goodbye, World!"
    const goodbyeMessage = screen.getByText(/Goodbye, World!/i);
    expect(goodbyeMessage).toBeInTheDocument();

    // Click again to toggle back to "Hello, World!"
    fireEvent.click(screen.getByRole('button', { name: /toggle message/i }));
    const helloMessageBack = screen.getByText(/Hello, World!/i);
    expect(helloMessageBack).toBeInTheDocument();
  });

  // Test 3: Check that clicking the button triggers the state change and renders the correct messages in sequence
  test('integration of button click and state change', () => {
    render(<HelloWorld />);
    
    // Initially, message should be "Hello, World!"
    const messageElement = screen.getByText(/Hello, World!/i);
    expect(messageElement).toBeInTheDocument();

    // Simulate the button click and check if the message changes to "Goodbye, World!"
    fireEvent.click(screen.getByRole('button', { name: /toggle message/i }));
    const goodbyeMessage = screen.getByText(/Goodbye, World!/i);
    expect(goodbyeMessage).toBeInTheDocument();

    // Simulate another click and check if the message toggles back to "Hello, World!"
    fireEvent.click(screen.getByRole('button', { name: /toggle message/i }));
    const helloMessageBack = screen.getByText(/Hello, World!/i);
    expect(helloMessageBack).toBeInTheDocument();
  });

});