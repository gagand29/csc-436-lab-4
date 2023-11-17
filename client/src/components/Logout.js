import React, { useContext } from 'react';
import './Styles.css';
import { StateContext } from '../contexts';

export default function Logout() {
  const { dispatch } = useContext(StateContext);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <div className="login-container">
      <h2>Logout</h2>
      <form className="login-form" onSubmit={handleLogout}>
        <div className="button-container">
          <input type="submit" value="Logout" />
        </div>
      </form>
    </div>
  );
}
