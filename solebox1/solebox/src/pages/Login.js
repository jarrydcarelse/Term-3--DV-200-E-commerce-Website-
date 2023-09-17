import React, { useState } from 'react';

const Login = () => {
  // State to store user input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Dummy users
  const dummyUsers = [
    { id: 1, email: 'jarrydcarelse@gmail.com', password: 'password1' },
    { id: 2, email: 'user2@example.com', password: 'password2' },
    { id: 3, email: 'user3@example.com', password: 'password3' },
  ];

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the entered email and password match any dummy user
    const user = dummyUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      // Authentication successful, set the logged-in user
      setLoggedInUser(user);
      setErrorMessage('');
    } else {
      // Authentication failed, display an error message
      setLoggedInUser(null);
      setErrorMessage('Invalid email or password');
    }

    // Reset the form fields
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Log In</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {loggedInUser && (
          <p className="success-message">Logged in as {loggedInUser.email}</p>
        )}
      </form>
    </div>
  );
};

export default Login;
