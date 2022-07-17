export interface Environment extends NodeJS.ProcessEnv {
    PUBLIC_PORT: number,
    CONTAINER_PORT: number
}