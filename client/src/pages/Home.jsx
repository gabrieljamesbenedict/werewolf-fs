import React from 'react'

const Home = () => {

    const werewolfTitle = "Welcome to Werewolf FS"
    const werewolfDescription = "Werewolf is a popular social deduction party game where Werewolves kill one-by-one at night while Villagers try to deduce who is the enemy."

    return (
        <div>
            <h1>{werewolfTitle}</h1>
            <p>{werewolfDescription}</p>
        </div>
    )
}

export default Home