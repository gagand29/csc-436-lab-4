import React, { useState, useEffect } from 'react';
import { useResource } from 'react-request-hook';

export default function Registration() {
  const [email, setEmail] = useState('');  // Changed from username to email
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registerResult, register] = useResource(({ email, password }) => ({
    url: '/register', // Adjust this to your API's registration endpoint
    method: 'post',
    data: { email, password }  // Changed from username to email
  }));

  useEffect(() => {
    if (registerResult && registerResult.data) {
      console.log('Registration successful:', registerResult.data);
    } else if (registerResult && registerResult.error) {
      console.error('Registration failed:', registerResult.error);
    }
  }, [registerResult]);

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      register({ email, password });
    } else {
      console.error('Passwords do not match');
    }
  };

  return (
    <div className="registration-container">
      <form className="registration-form" onSubmit={handleRegistrationSubmit}>
        <label htmlFor="register-email">Email:</label>
        <input
          type="email"
          name="register-email"
          id="register-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="register-password">Password:</label>
        <input
          type="password"
          name="register-password"
          id="register-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="confirm-password">Confirm Password:</label>
        <input
          type="password"
          name="confirm-password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div className="button-container">
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
}
