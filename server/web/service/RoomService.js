import * as RoomRepository from '../repository/RoomRepository.js'

export const getRoom = (roomId) => {
    return RoomRepository.findById(roomId)
}

export const getAllRooms = () => {
    return RoomRepository.findAllRooms()
}

export const createRoom = (roomId, room) => {
    return RoomRepository.save(roomId)
}

export const updateRoom = (roomId) => {
    return RoomRepository.save(roomId)
}