import React from 'react'
import { useState } from 'react'
import Home from './pages/Home'

const Router = () => {

    const [page, setPage] = useState('home')
    const [username, setUsername] = useState('')
    const [roomId, setRoomId] = useState('')

    return (
        <Home username={username} roomId={roomId} setUsername={setUsername} setRoomId={setRoomId} />
    )
}

export default Router