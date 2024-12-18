import React, { useState } from "react";
import './App.css';

function PersonCard({ name, phoneNumber, onEdit }) {
  return (
    <div className="PersonCard">
      <img src='Contact.png' alt='contact image' className="ContactImage"/>
      <h3>{name}</h3>
      <p>Phone number: {phoneNumber}</p>
      <button onClick={onEdit} className="EditRemoveButton">Edit/Remove</button>
    </div>
  );
}

function HomePage({ onNewContactClick }) {
  const [people, setPeople] = useState([
    { id: 1, name: 'Eda', phoneNumber: '123-456-7890' },
    { id: 2, name: 'Efe', phoneNumber: '987-654-3210' },
    { id: 3, name: 'Kaan', phoneNumber: '111-222-3333' },
    { id: 4, name: 'Jeniffer', phoneNumber: '444-555-6666' },
    { id: 5, name: 'Lisa', phoneNumber: '777-888-9999' },
    { id: 6, name: 'Tom', phoneNumber: '555-555-5555' },
  ]);

  const handleEditPerson = (id, name, phoneNumber) => {
    // Handle edit logic here
  };

  return (
    <div className="HomePage">
      {/* Top */}
      <div className="TopBar">
        <h1>Contacts</h1>
      </div>

      {/* Left */}
      <div className="LeftPanel">
        <div className="MainMenu">
          <h3>Main Menu</h3>
        </div>
        <br />
        <input type="text" placeholder="Search" className="SearchInput" />
        <br />
        <button className="FindButton">Find</button>
        <br />
        <br />
        <button className="NewPersonButton" onClick={onNewContactClick}>
          New Person
        </button>
      </div>

      {/* Right */}
      <div className="RightPanel">
        {people.map((person) => (
          <PersonCard
            key={person.id}
            name={person.name}
            phoneNumber={person.phoneNumber}
            onEdit={() => handleEditPerson(person.id, person.name, person.phoneNumber)}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;