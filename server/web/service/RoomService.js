import * as RoomRepository from '../repository/RoomRepository.js'

export const getRoom = (roomId) => {
    console.log(`Finding room with id=${roomId}`);
    return RoomRepository.findRoomById(roomId)
}

export const getAllRooms = () => {
    console.log(`Finding all rooms`);
    return RoomRepository.findAllRooms()
}

export const createRoom = () => {
    console.log(`Creating a new room`);
    return RoomRepository.createRoom()
}

export const updateRoom = (roomId, room) => {
    console.log(`Updating room with id=${roomId}`);
    return RoomRepository.saveRoom(roomId, room)
}

export const deleteRoom = (roomId) => {
    console.log(`Deleting room with id=${roomId}`);
    return RoomRepository.deleteRoom(roomId)
}