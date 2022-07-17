import Fastify from "fastify"

// Create fastify instance
const fastify = Fastify({
    logger: {
        transport: {
            target: "pino-pretty",
            options: {
                colorize: true,
                ignore: "time,pid,hostname"
            }
        }
    }
})

// Routes
fastify.register(require("./src/routes/speedCam"), { prefix: "api" })
fastify.register(require("./src/routes/trafficJam"), { prefix: "api" })

// Start server
async function server() {
    try {
        await fastify.listen({ port: process.env.CONTAINER_PORT, host: "0.0.0.0" })
    } catch(err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

server()