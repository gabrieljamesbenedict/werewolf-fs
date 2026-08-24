import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { io } from 'socket.io-client'

const Room = ({ username }) => {

    const { roomId } = useParams()

    const [playerList, setPlayerList ] = useState([username])
    const navigate = useNavigate()

    useEffect(()=> {
      const socket = io('http://localhost:3001',
        {
          auth: {
            username: username
          }
        }
      )

      socket.emit(
        'join_room',
        roomId
      )

      socket.on(
        'player_joins',
        (u) => {
          setPlayerList(prev => [...prev, u])
          console.log(`${u} has joined this room`)
        }
      )

      socket.on(
        'player_leaves',
        (u) => {
          setPlayerList(prev => prev.filter(player => player !== u))
          console.log(`${u} has left this room`)
        }
      )

      return () => {
        socket.disconnect()
      }
    },[])

    const leaveRoom = () => {
      navigate("/")
    }

    return (
      <div>
        <button onClick={() => leaveRoom()}>Back to Main</button>
        <p>Your room id is {roomId}</p>
        <p>Player List:</p>
        {
          playerList.map(
            (item, index) => (
              <p key={index}>{item}</p>
            )
          )
        }
      </div>
    )
}

export default Room