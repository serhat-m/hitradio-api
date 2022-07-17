import Fastify from "fastify"
import { Environment } from "./src/types/environment"

// Define environment variables
const env = process.env as Environment

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

// Start server
async function server() {
    try {
        await fastify.listen({ port: env.CONTAINER_PORT, host: "0.0.0.0" })
    } catch(err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

server()