import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 

function LoginPage({ onSubmit }) {
  const history = useHistory(); // Initialize useHistory hook

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    onSubmit(username, password);
    history.push('/HomePage'); // Navigate to the home page after form submission
  };

  return (
    <div className="LoginPage">
      {/* Top */}
      <div className="TopBarLogin">
        <h1>Login</h1>
      </div>

      <div className="LoginPage">
        <img src="PhoneBook.png" alt=" PhoneBook image" className="phoneBookImage" />
        <input
          className="textbox"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="textbox"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="submitButton" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
