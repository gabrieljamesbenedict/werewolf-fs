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

                socket.data.username = socket.handshake.auth.username

                socket.on(
                    'join_room',
                    (roomId) => {
                        socket.data.roomId = roomId
                        socket.join(roomId)
                        socket.to(roomId).emit(
                            'player_joins',
                            socket.data.username
                        )
                    }
                )

                socket.on(
                    'disconnect',
                    (error) => {
                        const username = socket.data.username
                        const roomId = socket.data.roomId
                        socket.to(roomId).emit(
                            'player_leaves',
                            username
                        )
                    }
                )

            }
        )

    }
)

fastify.listen({ port: 3001 })