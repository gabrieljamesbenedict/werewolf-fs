import * as RoomRepository from '../repository/RoomRepository.js'

export const getRoom = (roomId) => {
    return RoomRepository.findRoomById(roomId)
}

export const getAllRooms = () => {
    return RoomRepository.findAllRooms()
}

export const createRoom = () => {
    return RoomRepository.createRoom()
}

export const updateRoom = (roomId, room) => {
    return RoomRepository.saveRoom(roomId, room)
}

export const deleteRoom = (roomId) => {
    return RoomRepository.deleteRoom(roomId)
}