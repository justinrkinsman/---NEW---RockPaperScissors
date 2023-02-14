import './App.css';
import React, { useState, useEffect} from 'react';
import GameOver from './GameOverScreen';

function App() {
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [hasName, setHasName] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);
  const [userSelection, setUserSelection] = useState(null);
  const [cpuSelection, setCpuSelection] = useState('');
  const [roundWinner, setRoundWinner] = useState('');
  const [gameWinner, setGameWinner] = useState('');

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

  const handleUserSelection = (event) => {
    setUserSelection(event.target.textContent)
  }

  useEffect(() => {
    if (userScore === 5) {
      setGameWinner(name)
    }
    if (cpuScore === 5) {
      setGameWinner("Computer")
    }
  }, [userScore, cpuScore, name])

  useEffect(() => {
    if (userSelection && cpuSelection) {
      const results = {
        Rock: { Rock: "Draw", Paper: "Loss", Scissors: "Win" },
        Paper: { Rock: "Win", Paper: "Draw", Scissors: "Loss" },
        Scissors: { Rock: "Loss", Paper: "Win", Scissors: "Draw" },
      };
      if (results[userSelection][cpuSelection] === "Win") {
        setUserScore(userScore + 1);
        setRoundWinner(`${name} Wins - ${userSelection} beats ${cpuSelection}`)
      }
      if (results[userSelection][cpuSelection] === "Loss") {
        setCpuScore(cpuScore + 1);
        setRoundWinner(`Computer Wins - ${cpuSelection} beats ${userSelection}`)
      }
      if (results[userSelection][cpuSelection] === "Draw") {
        setRoundWinner("Draw");
      }
      setUserSelection(null);
      setCpuSelection("");
    }
  }, [userSelection, cpuSelection, userScore, cpuScore, name]);

  useEffect(() => {
    if (userSelection && !cpuSelection) {
      const options = ["Rock", "Paper", "Scissors"];
      const randomSelection =
        options[Math.floor(Math.random() * options.length)];
      setCpuSelection(randomSelection);
    }
  }, [userSelection, cpuSelection])

  return (
    <div className="App">
      <h1>Rock Paper Scissors</h1> {
        gameWinner && cpuScore && userScore ? (
              <GameOver gameWinner={gameWinner} cpuScore={cpuScore} userScore={userScore}/>
            ) : hasName ? (
          <div>
            <p>Welcome {name}</p>
            <p>Choose your weapon</p>
            <button onClick={handleUserSelection}>Rock</button>
            <button onClick={handleUserSelection}>Paper</button>
            <button onClick={handleUserSelection}>Scissors</button>
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
            {roundWinner && <p>{roundWinner}</p>}
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