import { FastifyRequest, FastifyReply } from "fastify"
import Scraper from "../plugins/Scraper"

export default async function getData(url: string, selector: string, req: FastifyRequest, res: FastifyReply) {
    try {
        const scraper = new Scraper(url)
        const filteredDomElements = await scraper.querySelectorAll(selector)

        const query = req.query as { search?: string }
        const tempArr: string[] = []

        if(query.search) {
            const searchTerms = query.search.split(",")
            
            for(const element of filteredDomElements) {
                const elementText = element.textContent?.clean() as string

                for(const searchTerm of searchTerms) {
                    if(elementText.includesFromArr(searchTerm.split(" "))) {
                        !tempArr.includes(elementText) && tempArr.push(elementText) // Check for duplicate with includes function
                    }
                }
            }
        } else {
            for(const element of filteredDomElements) {
                tempArr.push(element.textContent?.clean() as string)
            }
        }
    
        res.send({statusCode: 200, results: tempArr.length, data: tempArr.length > 0 ? tempArr : null})
    } catch(err) {
        throw err
    }
}