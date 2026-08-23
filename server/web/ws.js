import Fastify from 'fastify'
import fastifySocketIO from 'fastify-socket.io'

const fastify = Fastify()

fastify.register(
    fastifySocketIO,
    {
        cors: {
            origin: '*', // TODO: Configure this in the future
            methods: ['GET', 'POST']
        }
    }
)

fastify.ready(
    (error) => {

        if (error) throw error

        fastify.io.on(
            'connection',
            (socket) => {

                console.log(`Socket ${socket.id} has connected`)

            }
        )

    }
)

fastify.listen({ port: 3001 })