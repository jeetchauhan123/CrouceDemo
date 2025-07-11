import React, { useState } from 'react';
import LoginPage from './LoginPage';
import WelcomePage from './WelcomePage';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      {user ? (
        <WelcomePage user={user} />
      ) : (
        <LoginPage setUser={setUser} />
      )}
    </div>
  );
}

export default App;
