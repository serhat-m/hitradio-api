import { JSDOM } from "jsdom"

export default class Scraper {
    private fetchUrl: string

    constructor(fetchUrl: string) {
        this.fetchUrl = fetchUrl
    }

    private async getHtml(fetchUrl: string) {
        try {
            const rawData = await fetch(fetchUrl)
            const html = await rawData.text()
            return html
        } catch(err) {
            throw err
        }
    }

    public async querySelectorAll(selector: string) {
        try {
            const html = await this.getHtml(this.fetchUrl)
            const { document } = new JSDOM(html).window
            return Array.from(document.querySelectorAll(selector))
        } catch(err) {
            throw err
        }
    }
}