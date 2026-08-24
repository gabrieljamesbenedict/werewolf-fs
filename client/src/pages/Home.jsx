import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../styles/Home.css"


const Home = ({username, roomId, setUsername, setRoomId}) => {

    const werewolfTitle = "Welcome to Werewolf FS"
    const werewolfDescription = "Werewolf is a popular social deduction party game where Werewolves kill Villagers one-by-one at night while Villagers try to deduce who are the Werewolves."

    const navigate = useNavigate()

    const enterRoom = (roomId) => {
        navigate(`/room/${roomId}`)
    }

    return (
        <div>
            <h1>{werewolfTitle}</h1>
            <p>{werewolfDescription}</p>

            <div>
                <label>Username: </label>
                <input type="text" autoComplete="off" value={username} onChange={e => setUsername(e.target.value)} />
                <br />
                <label>Room ID: </label>
                <input type="text" autoComplete="off" value={roomId} onChange={e => setRoomId(e.target.value)} />
                <br />
                <button onClick={() => enterRoom(roomId)}>Enter Game</button>
            </div>
        </div>
    )
}

export default Home