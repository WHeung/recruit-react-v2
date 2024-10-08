import React from 'react';
import { render, screen, fireEvent } from './test-utils';
import RegisterCardForm from '../src/components/RegisterCardForm/RegisterCardForm';
import '@testing-library/jest-dom';

test('renders the Register Card Form', () => {
  render(<RegisterCardForm />);

  // Check if the form title and fields are present
  expect(screen.getByRole('heading', { name: /register your card/i })).toBeInTheDocument();
  expect(screen.getByLabelText(/card number/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/expiry date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/cvc/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /submit register card form/i })).toBeInTheDocument();
});

test('displays error when fields are empty on submit', () => {
  render(<RegisterCardForm />);

  // Submit without entering any values
  fireEvent.click(screen.getByRole('button', { name: /submit register card form/i }));

  // Check for the error message
  expect(screen.getByRole('alert')).toHaveTextContent(/all fields are required/i);
});

test('successfully submits the form when all fields are filled', () => {
  const alertMock = jest.fn();
  window.alert = alertMock;

  render(<RegisterCardForm />);

  // Fill out the form fields
  fireEvent.change(screen.getByLabelText(/card number/i), { target: { value: '1234 5678 9012 3456' } });
  fireEvent.change(screen.getByLabelText(/expiry date/i), { target: { value: '12/24' } });
  fireEvent.change(screen.getByLabelText(/cvc/i), { target: { value: '123' } });

  // Submit the form
  fireEvent.click(screen.getByRole('button', { name: /submit register card form/i }));

  // Ensure no error message is shown
  expect(screen.queryByRole('alert')).toBeNull();

  // Mock the alert to check if it was called
  expect(alertMock).toHaveBeenCalledWith('Card registered successfully');
  alertMock.mockRestore();
});
