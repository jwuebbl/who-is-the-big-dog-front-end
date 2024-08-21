import React from 'react';
import './Login.css'; // Import the CSS file for styling

function Login() {
  return (
    <div className="login-container">
      <div className="logo-container">
        <img src="logo192.png" alt="Logo" className="logo" />
      </div>
      <div className="form-container">
        <form>
          <h2>Login</h2>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
