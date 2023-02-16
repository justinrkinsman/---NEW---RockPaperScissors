import React from 'react';
import './gameScreen.css'

function GameScreen(props) {
    return (
        <div>
            <p>Welcome {props.name}</p>
            <div className="slide-in-one">
              <img src="https://see.fontimg.com/api/renderfont4/aoWm/eyJyIjoiZnMiLCJoIjo1MywidyI6MTAwMCwiZnMiOjUzLCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiIzgyOEMzMCIsInQiOjF9/Q2hvb3NlIFlvdXIgV2VhcG9u/boss-fight.png" alt="Boss fonts"></img>
            </div>
            <div class="game-body">
              <div className="buttons">
                <button onClick={props.handleUserSelection}>Rock</button>
                <button onClick={props.handleUserSelection}>Paper</button>
                <button onClick={props.handleUserSelection}>Scissors</button>
              </div>
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
            </div>
            {props.roundWinner && <p>{props.roundWinner}</p>}
          </div>
    )
}

export default GameScreen