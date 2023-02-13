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
            <p>Welcome {name}</p>
            <p>Choose your weapon</p>
            <button>Rock</button>
            <button>Paper</button>
            <button>Scissors</button>
            <div className='scoreboard'>
              <div className="player1">
                <p>{name}</p>
                <p>- 0</p> {/*replace with state userScore */}
              </div>
              <div className='cpu-player'>
                <p>0 -</p> {/*replace with state cpuScore */}
                <p>Computer</p>
              </div>
            </div>
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
