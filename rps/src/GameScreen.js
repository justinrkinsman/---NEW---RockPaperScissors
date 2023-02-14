import React from 'react';

function GameScreen(props) {
    return (
        <div>
            <p>Welcome {props.name}</p>
            <p>Choose your weapon</p>
            <button onClick={props.handleUserSelection}>Rock</button>
            <button onClick={props.handleUserSelection}>Paper</button>
            <button onClick={props.handleUserSelection}>Scissors</button>
            <div className='scoreboard'>
              <div className="player1">
                <p>{props.name}</p>
                <p>- {props.userScore}</p>
              </div>
              <div className='cpu-player'>
                <p>{props.cpuScore} -</p>
                <p>Computer</p>
              </div>
            </div>
            {props.roundWinner && <p>{props.roundWinner}</p>}
          </div>
    )
}

export default GameScreen