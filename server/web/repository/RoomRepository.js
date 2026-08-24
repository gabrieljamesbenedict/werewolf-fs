import crypto from 'crypto'
import { RoomModel } from '../model/RoomModel.js'

const rooms = new Map()

const generateID = (existingData = []) => { 
    const ids = Array.isArray(existingData) 
        ? existingData.map(item => item.roomId || item) 
        : Object.keys(existingData || {})

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let id
    do {
        id = Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
    } while (ids.includes(id))
    
    return id
}



export const findRoomById = (roomId) => {
    return rooms.get(roomId)
}

export const findAllRooms = () => {
    return Array.from(rooms.values())
}

export const createRoom = () => {
    const generatedRoomId = generateID(rooms.keys)
    const room = RoomModel(generatedRoomId)
    rooms.set(generatedRoomId, room)
    return room
}

export const saveRoom = (roomId, body) => {
    const room = rooms.get(id)
    const updatedRoom = { ...room, ...body}
    rooms.set(roomId, updatedRoom)
    return updatedRoom
}

export const deleteRoom = (roomId) => {
    rooms.delete(roomId)
}