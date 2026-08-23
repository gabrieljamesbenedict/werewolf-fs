import Fastify from 'fastify'
const fastify = Fastify()

fastify.get('/', async () => ({ hello: 'world' }))

fastify.listen({ port: 3000 })