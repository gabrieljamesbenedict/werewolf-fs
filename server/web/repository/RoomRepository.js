import crypto from 'crypto'

const rooms = new Map()

const generateID = (existingIds = []) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let id
    do {
        id = Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
    } while (existingIds.includes(id))
    return id
}



export const findRoomById = (roomId) => {
    return rooms.get(roomId)
}

export const findAllRooms = () => {
    return rooms
}

export const createRoom = () => {
    const generatedRoomId = generateID(rooms.keys)
    const room = { generatedRoomId, playerList: [] }
    rooms.set(generatedRoomId, room)
    return room
}

export const saveRoom = (roomId, room) => {
    rooms.set(roomId, room)
    return room
}

export const deleteRoom = (roomId) => {
    rooms.delete(roomId)
}