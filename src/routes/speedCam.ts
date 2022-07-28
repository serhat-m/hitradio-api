import { FastifyInstance } from "fastify"
import getData from "../controllers/getData"

export default function speedCam(instance: FastifyInstance, options: { prefix: string }, done: (err?: Error | undefined) => void) {
    instance.route({
        method: "GET",
        url: "/speedCam",
        schema: {
            querystring: {
                search: { type: "string" }
            }
        },
        handler: (req, res) => getData(process.env.SCRAPING_URL, process.env.SPEED_CAM_SELECTOR, req, res)
    })

    done()
}