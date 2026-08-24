import Fastify from 'fastify'
import RoomController from './controller/RoomController.js'

const fastify = Fastify()

fastify.get('/', async () => ({ hello: 'world' }))
fastify.register(RoomController)

fastify.listen({ port: 3000 })