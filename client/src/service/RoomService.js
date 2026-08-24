import { api } from "./axios"

export const getRooms = async () => {
    const response = await api.get('/rooms')
    return response.data
}

export const createRoom = async (payload) => {
    const response = await api.post('/rooms', payload)
    return response.data
}

export const updateRoom = async (roomId, payload) => {
    const response = await api.patch(`/rooms/${roomId}`, payload)
    return response.data
}

export const deleteRoom = async (roomId) => {
    await api.delete(`/rooms/${roomId}`)
}