import './App.css';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [hasName, setHasName] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);
  const [userSelection, setUserSelection] = useState('')
  const [cpuSelection, setCpuSelection] = useState('')

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

  const increaseUserScore = () => {
    setUserScore(userScore + 1)
  }

  const increaseCpuScore = () => {
    setCpuScore(cpuScore + 1)
  }

  return (
    <div className="App">
      <h1>Rock Paper Scissors</h1> {
        hasName ? (
          <div>
            <p>Welcome {name}</p>
            <p>Choose your weapon</p>
            <button onClick={increaseUserScore}>Rock</button>
            <button onClick={increaseCpuScore}>Paper</button>
            <button>Scissors</button>
            <div className='scoreboard'>
              <div className="player1">
                <p>{name}</p>
                <p>- {userScore}</p>
              </div>
              <div className='cpu-player'>
                <p>{cpuScore} -</p>
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
