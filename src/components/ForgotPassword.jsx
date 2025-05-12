// src/components/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Optional if you want custom styles

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    // Simple validation
    if (!email || !password) {
      setIsLoading(false);
      setErrorMessage('Please fill in all fields.');
      return;
    }

    try {
      // Simulated login API
      setTimeout(() => {
        setIsLoading(false);
        // redirect or show success
        alert('Logged in!');
      }, 1500);
    } catch (err) {
      setIsLoading(false);
      setErrorMessage('Login failed. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="form-box">
        <h2>Login</h2>

        {errorMessage && <p className="message error">{errorMessage}</p>}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="extra-links">
          <Link to="/forgot-password" className="link">Forgot Password?</Link>
          <p>
            Don't have an account? <Link to="/signup" className="link">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
