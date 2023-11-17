import React, { useState, useEffect } from 'react';
import { useResource } from 'react-request-hook';

const Login = ({ onRegisterClick }) => {
  const [email, setEmail] = useState('');  // Changed from username to email
  const [password, setPassword] = useState('');
  const [loginResult, login] = useResource(({ email, password }) => ({
    url: '/login', // Adjust this to your API's login endpoint
    method: 'post',
    data: { email, password }  // Changed from username to email
  }));

  useEffect(() => {
    if (loginResult && loginResult.data) {
      console.log('Login successful:', loginResult.data);
    } else if (loginResult && loginResult.error) {
      console.error('Login failed:', loginResult.error);
    }
  }, [loginResult]);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLoginSubmit}>
        <label htmlFor="login-email">Email:</label>
        <input
          type="email"
          name="login-email"
          id="login-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="login-password">Password:</label>
        <input
          type="password"
          name="login-password"
          id="login-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="button-container">
          <input type="submit" value="Login" />
          <button type="button" onClick={onRegisterClick}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
