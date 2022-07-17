import { FastifyRequest, FastifyReply } from "fastify"
import Scraper from "../plugins/Scraper"

export default async function getData(url: string, selector: string, req: FastifyRequest, res: FastifyReply) {
    try {
        const scraper = new Scraper(url)
        const filteredDomElements = await scraper.querySelectorAll(selector)

        const query = req.query as { search?: string }
        const tempArr = []

        if(query.search) {
            const searchTerms = query.search.split(",")
            
            for(const element of filteredDomElements) {
                const elementText = element.textContent?.clean() as string

                for(const searchTerm of searchTerms) {
                    if(elementText.includesFromArr(searchTerm.split(" "))) {
                        tempArr.push(elementText)
                    }
                }
            }
        } else {
            for(const element of filteredDomElements) {
                tempArr.push(element.textContent?.clean())
            }
        }
    
        res.send({results: tempArr.length, data: tempArr.length > 0 ? tempArr : null})
    } catch(err) {
        throw err
    }
}