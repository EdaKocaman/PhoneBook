import React, { useState } from "react";
import './App.css';

function NewContactPage() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleAdd = () => {
    console.log('Name:', name);
    console.log('Phone Number:', phoneNumber);
  };

  return (
    <div className="NewContact">
      {/* Top */}
      <div className="TopBarNewContact">
        <h1>New Contact</h1>
      </div>

      <div className="newContactCard">
        <img src="NewContact.png" alt="NewContact.png" className="newContactImage"/>
        <input
          className="newContactTextbox"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          className="newContactTextbox"
          type="text"
          placeholder="Phone"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button className="addButton" onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
}

export default NewContactPage;