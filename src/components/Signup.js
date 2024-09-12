import React from 'react';
import './Signup.css'; // Import the CSS file for styling

function Signup() {
  return (
    <div className="login-container">
      <div className="logo-container">
        <img src="logo192.png" alt="Logo" className="logo" />
      </div>
      <div className="form-container">
        <form>
          <h2>Create Account</h2>
          
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
          
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
          
          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
