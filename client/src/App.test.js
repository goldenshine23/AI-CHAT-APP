// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the chatbot heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/AI ChatBot/i);
  expect(headingElement).toBeInTheDocument();
});
