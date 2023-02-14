import React from 'react'

function NameEntry(props){
    return(
        <div>
            <form className='name-form'>
              <label htmlFor="name">Enter your name </label>
              <input id="name" type="text" value={props.name} onChange={props.handleNameChange}/>
            </form>
            <button onClick={props.checkForName}>Start</button>
            {props.errorMessage && <p>{props.errorMessage}</p>}
        </div>
    )
}

export default NameEntry