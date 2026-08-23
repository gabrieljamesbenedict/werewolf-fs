import React from 'react'
import { useParams } from 'react-router-dom'

const Room = ({ username }) => {

    const { roomId } = useParams()

  return (
    <div>Your room id is {roomId}</div>
  )
}

export default Room