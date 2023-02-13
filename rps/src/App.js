import './App.css';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const checkForName = () => {
    if (name === "") {
      console.log("Access Denied");
    } else {
      console.log("Access Granted");
    }
  };

  return (
    <div className="App">
      <h1>Rock Paper Scissors</h1>
      <form className='name-form'>
        <label htmlFor="name">Enter your name </label>
        <input id="name" type="text" value={name} onChange={handleNameChange}/>
      </form>
      <button onClick={checkForName}>Start</button>
    </div>
  );
}

export default App;
