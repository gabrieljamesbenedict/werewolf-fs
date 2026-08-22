import React from 'react'

const Home = () => {

    const werewolfTitle = "Welcome to Werewolf FS"
    const werewolfDescription = "Werewolf is a popular social deduction party game where Werewolves kill Villagers one-by-one at night while Villagers try to deduce who are the Werewolves."

    return (
        <div style={{padding: 16}}>
            <h1>{werewolfTitle}</h1>
            <p>{werewolfDescription}</p>
            <br />
            <label htmlFor="">Username: </label>
            <input type="text" />
            <br />
            <label htmlFor="">Room ID: </label>
            <input type="text" />
            <br />
            <button>Enter Game</button>
        </div>
    )
}

export default Home