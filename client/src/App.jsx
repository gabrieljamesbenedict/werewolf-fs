import React, { useState, useMemo } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Room from './pages/Room'

const App = () => {
    const [username, setUsername] = useState('')
    const [roomId, setRoomId] = useState('')

    const router = useMemo(() => createBrowserRouter([
        {
            path: "/",
            element: <Home username={username} roomId={roomId} setUsername={setUsername} setRoomId={setRoomId} />
        },
        {
            path: "/room/:roomId",
            element: <Room username={username} />
        }
    ]), [username, roomId])

    return <RouterProvider router={router} />
}

export default App