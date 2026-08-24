import * as RoomService from '../service/RoomService.js'

export default async function RoomController(fastify, options) {
    const roomPath = '/room'

    fastify.get(`${roomPath}`, async (request, response) => {
        return RoomService.getAllRooms()
    })

    fastify.get(`${roomPath}/:id`, async (request, response) => {
        const { id } = request.params
        return RoomService.getRoom(id)
    })

    fastify.post(`${roomPath}`, async (request, response) => {
        return RoomService.createRoom()
    })

    fastify.patch(`${roomPath}/:id`, async (request, response) => {
        const { id } = request.params
        const { body } = request
        return RoomService.updateRoom(id, body)
    })

    fastify.delete(`${roomPath}/:id`, async (request, response) => {
        const { id } = request.params
        return RoomService.deleteRoom(id)
    })
}