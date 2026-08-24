import Fastify from 'fastify'
import cors from '@fastify/cors'
import RoomController from './controller/RoomController.js'

const fastify = Fastify()

await fastify.register(cors, { 
    origin: '*' 
})

fastify.get('/', async () => ({ hello: 'world' }))
fastify.register(RoomController)

fastify.listen({ port: 3000 })