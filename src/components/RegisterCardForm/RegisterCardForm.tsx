import React, { useState } from 'react';

const RegisterCardForm: React.FC = () => {
  // State for storing form input values
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCVC] = useState('');
  const [error, setError] = useState('');

  // Validates the form fields. If any field is empty, sets an error message and returns false.

  const validateForm = () => {
    if (!cardNumber || !expiryDate || !cvc) {
      setError('All fields are required');
      return false;
    }
    setError('');
    return true;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      window.alert('Card registered successfully');
    }
  };

  return (
    <div className='flex flex-col h-full'>
      <div className='py-4 grow'>
        <h2 className='text-xl mb-4 text-center'>Register Your Card</h2>
      </div>
      <div className='p-4 w-full rounded mx-auto max-w-xl'>
        <form onSubmit={handleSubmit} aria-label='Register Card Form' noValidate>
          <fieldset>
            <legend className='sr-only'>Card Information</legend>

            {/* Error Message */}
            {error && (
              <p className='text-red-500' role='alert' aria-live='assertive'>
                {error}
              </p>
            )}

            {/* Card Number Field */}
            <div className='mb-4'>
              <label htmlFor='cardNumber' className='block mb-2'>
                Card Number
              </label>
              <input
                type='text'
                id='cardNumber'
                name='cardNumber'
                className='w-full p-2 border rounded box-border'
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder='1234 5678 9012 3456'
                aria-required='true'
              />
            </div>

            {/* Expiry Date Field */}
            <div className='mb-4'>
              <label htmlFor='expiryDate' className='block mb-2'>
                Expiry Date
              </label>
              <input
                type='text'
                id='expiryDate'
                name='expiryDate'
                className='w-full p-2 border rounded box-border'
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder='MM/YY'
                aria-required='true'
              />
            </div>

            {/* CVC Field */}
            <div className='mb-4'>
              <label htmlFor='cvc' className='block mb-2'>
                CVC
              </label>
              <input
                type='text'
                id='cvc'
                name='cvc'
                className='w-full p-2 border rounded box-border'
                value={cvc}
                onChange={(e) => setCVC(e.target.value)}
                placeholder='123'
                aria-required='true'
              />
            </div>

            <button type='submit' className='w-full bg-blue-500 text-white p-2 rounded' aria-label='Submit Register Card Form'>
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default RegisterCardForm;
