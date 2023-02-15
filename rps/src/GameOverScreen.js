import React from 'react';

function GameOver(props) {
    function resetGame() {
        props.setUserScore(0)
        props.setCpuScore(0)
        props.setGameWinner("")
        props.setRoundWinner("")
    }

    function returnToNameEntryScreen() {
        props.setName("")
        props.setHasName(false)
        props.setUserScore(0)
        props.setCpuScore(0)
        props.setGameWinner("")
        props.setRoundWinner("")
    }

    return (
        <div className='gameWinner'>
            {props.gameWinner && <p>{`Game over. ${props.gameWinner} wins!`}</p>}
            <p>{`Final Score:`}</p>
            <div>
              <p>{`Player: ${props.userScore}`}</p>
                <p>{`Computer: ${props.cpuScore}`}</p>
            </div>
            <button onClick={resetGame}>New Game</button>
            <button onClick={returnToNameEntryScreen}>Re-enter Name</button>
        </div>
    )
}

export default GameOver