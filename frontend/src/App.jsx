import React, { useEffect, useState } from 'react';
import LoginPage from './LoginPage';
import WelcomePage from './WelcomePage';

function App() {
  const [user, setUser] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true); // Flag for loading

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('loggedInUser');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    } catch (err) {
      console.error("Error parsing user from localStorage:", err);
    } finally {
      setCheckingAuth(false); // Always stop loading
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
    }
  }, [user]);

  if (checkingAuth) return <div>Loading...</div>;
  
  return (
    <div>
      {user ? (
        <WelcomePage user={user} setUser={setUser} />
      ) : (
        <LoginPage setUser={setUser} />
      )}
    </div>
  );
}

export default App;
