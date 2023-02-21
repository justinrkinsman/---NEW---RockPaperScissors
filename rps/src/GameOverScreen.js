import React from 'react';

function GameOver(props) {
    function resetGame() {
        props.gameSettings.setUserScore(0)
        props.gameSettings.setCpuScore(0)
        props.gameSettings.setGameWinner("")
        props.gameSettings.setRoundWinner("")
    }

    function returnToNameEntryScreen() {
        props.gameSettings.setName("")
        props.gameSettings.setHasName(false)
        props.gameSettings.setUserScore(0)
        props.gameSettings.setCpuScore(0)
        props.gameSettings.setGameWinner("")
        props.gameSettings.setRoundWinner("")
    }

    return (
        <div className='gameWinner'>
            {props.gameWinner === "Computer" ? (
                <div className="loser">
                    <p>You Lose!</p>
                </div>
            ) : (
                <div className="winner">
                    <p>You Win!</p>
                </div>
            )}
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