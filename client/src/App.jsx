import React from 'react'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {

    const [username, setUsername] = useState('')
    const [roomId, setRoomId] = useState('')

    return (
        <Routes>
            <Route path="/" element={<Home username={username} roomId={roomId} setUsername={setUsername} setRoomId={setRoomId} />} />
        </Routes>
    )
}

export default App