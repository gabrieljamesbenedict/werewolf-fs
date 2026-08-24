import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { io } from 'socket.io-client'

const Room = ({ username }) => {

    const { roomId } = useParams()

    const [playerList, setPlayerList ] = useState([])
    const navigate = useNavigate()

    useEffect(()=> {
      const socket = io('http://localhost:3001')

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
        <p>Player List</p>
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