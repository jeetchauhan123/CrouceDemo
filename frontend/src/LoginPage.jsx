import React, { useState } from 'react';
import './index.css';

const allowedUsers = ['shrey@gmail.com', 'hritik@gmail.com', 'jeet@gmail.com'];

const LoginPage = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (!allowedUsers.includes(email)) {
      setError('Invalid email. Access denied.');
      return;
    }

    const username = email.split('@')[0];
    const expectedPassword = username + '123';

    if (password !== expectedPassword) {
      setError(`Incorrect password. It should be "${expectedPassword}"`);
      return;
    }

    setUser({ email, password });
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password (e.g., name123)"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <p className="error-text">{error}</p>}
      </form>
    </div>
  );
};

export default LoginPage;
