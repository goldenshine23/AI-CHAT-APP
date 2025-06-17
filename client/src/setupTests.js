// setupTests.js — Setup for Testing AI Chat App Components

// Adds custom matchers from jest-dom for assertions on DOM elements.
// Examples:
// expect(screen.getByText(/hello/i)).toBeInTheDocument();
// expect(button).toHaveClass('send-button');

// Docs: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Optionally extend here with other global test setups or mocks in future,
// like mocking axios or setting up custom render functions for the AI Chat App.

// Example: setup for mocking console during tests
beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterEach(() => {
  console.error.mockRestore();
});
