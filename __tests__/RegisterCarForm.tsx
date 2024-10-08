import { render, screen, fireEvent } from './test-utils';
import RegisterCardForm from '../src/components/RegisterCardForm/RegisterCardForm';

test('renders the Register Card Form', () => {
  render(<RegisterCardForm />);

  // Check if the form title and fields are present
  expect(screen.getByRole('heading', { name: /register your card/i })).toBeInTheDocument();
  expect(screen.getByLabelText(/card number/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/expiry date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/cvc/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
});

test('displays error when fields are empty on submit', () => {
  render(<RegisterCardForm />);

  // Submit without entering any values
  fireEvent.click(screen.getByRole('button', { name: /submit/i }));

  // Check for the error message
  expect(screen.getByText(/all fields are required/i)).toBeInTheDocument();
});

test('successfully submits the form when all fields are filled', () => {
  render(<RegisterCardForm />);

  // Fill out the form fields
  fireEvent.change(screen.getByLabelText(/card number/i), { target: { value: '1234 5678 9012 3456' } });
  fireEvent.change(screen.getByLabelText(/expiry date/i), { target: { value: '12/24' } });
  fireEvent.change(screen.getByLabelText(/cvc/i), { target: { value: '123' } });

  // Submit the form
  fireEvent.click(screen.getByRole('button', { name: /submit/i }));

  // Ensure no error message is shown
  expect(screen.queryByText(/all fields are required/i)).toBeNull();

  // Since we used alert, we need to mock it to check if it was called
  const alertMock = jest.spyOn(window, 'alert').mockImplementation();
  expect(alertMock).toHaveBeenCalledWith('Card registered successfully');
  alertMock.mockRestore(); // Clean up after test
});
