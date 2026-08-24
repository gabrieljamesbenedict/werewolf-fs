export default async function RoomController(fastify, options) {
    const roomPath = '/room'

    fastify.get(`${roomPath}`, async (request, response) => {
        return { hello: 'all world' }
    })

    fastify.get(`${roomPath}/:id`, async (request, response) => {
        return { hello: 'world' }
    })

    fastify.post(`${roomPath}`, async (request, response) => {
        return request.body
    })

    fastify.patch(`${roomPath}/:id`, async (request, response) => {
        return { updated: true }
    })

    fastify.delete(`${roomPath}/:id`, async (request, response) => {
        return { success: true }
    })
}