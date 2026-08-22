import React from 'react'
import { useState } from 'react'

import Home from './pages/Home'

const Router = () => {

    const [page, setPage] = useState('home')

    return (
        <Home />
    )
}

export default Router