declare global {
    namespace NodeJS {
      interface ProcessEnv {
        PUBLIC_PORT: number,
        CONTAINER_PORT: number,
        SCRAPING_URL: string,
        SPEED_CAM_SELECTOR: string,
        TRAFFIC_JAM_SELECTOR: string
      }
    }
}

export {}