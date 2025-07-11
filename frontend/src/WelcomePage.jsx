import React from 'react';
import './index.css';

const WelcomePage = ({ user }) => {
  const username = user.email.split('@')[0];

  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <h2>Welcome, {username.charAt(0).toUpperCase() + username.slice(1)} 👋</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Password:</strong> {user.password}</p>
      </div>
    </div>
  );
};

export default WelcomePage;
