import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Home.css"


const Home = ({username, roomId, setUsername, setRoomId}) => {

    const werewolfTitle = "Welcome to Werewolf FS"
    const werewolfDescription = "Werewolf is a popular social deduction party game where Werewolves kill Villagers one-by-one at night while Villagers try to deduce who are the Werewolves."

    const enterRoom = (roomId) => {
        navigate(`/room/${roomId}`)
    }

    return (
        <div class="container">
            <h1 class="container__title">{werewolfTitle}</h1>
            <p class="container__description">{werewolfDescription}</p>

            <div class="container__form">
                <label class="container__label">Username: </label>
                <input class="container__input" type="text" autoComplete="off" value={username} onChange={e => setUsername(e.target.value)} />
                <br />
                <label class="container__label">Room ID: </label>
                <input class="container__input" type="text" autoComplete="off" value={roomId} onChange={e => setRoomId(e.target.value)} />
                <br />
                <button class="container__but" onClick={() => enterRoom(roomId)}>Enter Game</button>
            </div>
        </div>
    )
}

export default Home