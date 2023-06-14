import React, { useState } from 'react';
import axios from 'axios';


const Registration = ({ apiDomain, apiEndpoint }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleConsentChange = (event) => {
    setConsent(event.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!firstName || !lastName || !email || !consent) {
      setError('Please fill in all the required fields.');
      return;
    }

    if (!/^[a-zA-Z0-9\s]+$/.test(firstName) || !/^[a-zA-Z0-9\s]+$/.test(lastName)) {
      setError('First name and last name should be alphanumeric.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');

    try {
      const response = await axios.post(`${apiDomain}${apiEndpoint}`, {
        firstName,
        lastName,
        email,
        consent,
      });

      if (response.status === 200) {
        setSuccess(true);
        setFirstName('');
        setLastName('');
        setEmail('');
        setConsent(false);
      } else {
        setError('Registration failed. Please try again later.');
      }
    } catch (error) {
      setError('Registration failed. Please try again later.');
    }
  };

  return (
    <div className="max-w-md mx-auto py-8 px-4">
  <h2 className="text-2xl font-bold mb-4">Registration Form</h2>
  {success && <p className="text-green-500 mb-4">Registration successful!</p>}
  {error && <p className="text-red-500 mb-4">{error}</p>}

  
  <form onSubmit={handleSubmit}>
    <div className="mb-4">
      <label htmlFor="firstName" className="block mb-2">First Name:</label>
      <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={handleFirstNameChange}
        required
        className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-indigo-500"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="lastName" className="block mb-2">Last Name:</label>
      <input
        type="text"
        id="lastName"
        value={lastName}
        onChange={handleLastNameChange}
        required
        className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-indigo-500"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="email" className="block mb-2">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
        required
        className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-indigo-500"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="consent" className="block mb-2">
        <input
          type="checkbox"
          id="consent"
          checked={consent}
          onChange={handleConsentChange}
          required
          className="mr-2"
        />
        I consent to the terms and conditions.
      </label>
    </div>
    <button
      type="submit"
      className="bg-indigo-500 text-white py-2 px-4 rounded-md"
    >
      Register
    </button>
  </form>
</div>

  );
};

export default Registration;