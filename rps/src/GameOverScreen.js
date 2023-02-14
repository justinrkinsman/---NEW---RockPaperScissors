import React from 'react';

function GameOver(props) {
    return (
        <div className='gameWinner'>
            {props.gameWinner && <p>{`Game over. ${props.gameWinner} wins!`}</p>}
            <p>{`Final Score:`}</p>
            <div>
              <p>{`Player: ${props.userScore}`}</p>
                <p>{`Computer: ${props.cpuScore}`}</p>
            </div>
            <button>New Game</button>
            <button>Re-enter Name</button>
        </div>
    )
}

export default GameOver