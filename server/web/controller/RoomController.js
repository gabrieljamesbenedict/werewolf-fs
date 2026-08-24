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
        const { body } = request.params
        return RoomService.createRoom(body)
    })

    fastify.patch(`${roomPath}/:id`, async (request, response) => {
        const { id, body } = request.params
        return RoomService.updateRoom(id, body)
    })

    fastify.delete(`${roomPath}/:id`, async (request, response) => {
        const { id } = request.params
        return RoomService.deleteRoom(id)
    })
}