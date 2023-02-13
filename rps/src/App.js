import './App.css';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [hasName, setHasName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const checkForName = () => {
    if (name === "") {
      setErrorMessage("You must enter a name!")
    } else {
      setErrorMessage("")
      setHasName(true)
    }
  };

  return (
    <div className="App">
      <h1>Rock Paper Scissors</h1> {
        hasName ? (
          <div>
            <p>Choose:</p>
            <button>Rock</button>
            <button>Paper</button>
            <button>Scissors</button>
          </div>
        ) : (
          <>
            <form className='name-form'>
              <label htmlFor="name">Enter your name </label>
              <input id="name" type="text" value={name} onChange={handleNameChange}/>
            </form>
            <button onClick={checkForName}>Start</button>
          </>
        )
      } 
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default App;
