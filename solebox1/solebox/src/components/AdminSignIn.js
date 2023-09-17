// AdminSignIn.js
import React, { useState } from 'react';

function AdminSignIn({ onSignIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Here, you would typically send a request to your backend for authentication
    // If authentication is successful, call onSignIn to grant access to the dashboard
    onSignIn();
  };

  return (
    <div>
      <h2>Admin Sign-In</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
}

export default AdminSignIn;
