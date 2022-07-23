[Hitradio Ohr](https://www.hitradio-ohr.de) is a radio station that provides speed camera and traffic jam data for the Ortenaukreis region in Germany. Despite their clear website, sometimes things have to be as quick and easy as possible and that's why I developed this API.

# Environment variables

Create a `.env` file in the root directory and pass the following variables:

- `PUBLIC_PORT` `string`
- `CONTAINER_PORT` `string`
- `SCRAPING_URL` `string`
- `SPEED_CAM_SELECTOR` `string`

## Example `.env` file

```
PUBLIC_PORT="80"
CONTAINER_PORT="80"
SCRAPING_URL="https://www.hitradio-ohr.de/verkehr-blitzer"
SPEED_CAM_SELECTOR=".speed-camera-item"
TRAFFIC_JAM_SELECTOR=".traffic-jam-item"
```

# Production Mode

## Start Container

```bash
docker compose -f docker-compose.yaml -f docker-compose.prod.yaml up --build
```

# Development Mode

Since the project is containerized, no TypeScript declarations are available on the host. For `IntelliSense` purposes, you should copy the `node_modules` folder from the container:

```bash
# Navigate to the root directory of the project and run:
docker cp hitradio-api:/app/node_modules $(pwd)
```

## Start Container

```bash
docker compose -f docker-compose.yaml -f docker-compose.dev.yaml up --build
```

# Endpoints

## Get speed camera data

- Method: `GET`
- Route: `/api/speedCam`
- Optional Query Params:
    - Key: `search`, Value: `string` (Keywords can be combined with the `+` operator)
        - Example: `/api/speedCam?search=a5+freiburg,karlsruhe`
- Successful Response:
    
    ```tsx
    {
        "statusCode": 200,
        "results": number,
        "data": string[] | null
    }
    ```
    
- Error Response:
    
    ```tsx
    {
      "statusCode": number,
      "error": string,
      "message": string
    }
    ```
    

## Get traffic jam data

- Method: `GET`
- Route: `/api/trafficJam`
- Optional Query Params:
    - Key: `search`, Value: `string` (Keywords can be combined with the `+` operator)
        - Example: `/api/trafficJam?search=a5+freiburg,karlsruhe`
- Successful Response:
    
    ```tsx
    {
        "statusCode": 200,
        "results": number,
        "data": string[] | null
    }
    ```
    
- Error Response:
    
    ```tsx
    {
      "statusCode": number,
      "error": string,
      "message": string
    }
    ```
    

# Example usage

The possibilities for using such an API are basically endless and tied to the user's vision. I personally use it in connection with Apple Shortcuts. Let's take a look:

iOS Shortcuts Widget             |  “List all traffic jams”-Shortcut Response
:-------------------------:|:-------------------------:
![iOS Shortcuts Widget](https://user-images.githubusercontent.com/51929566/179693002-28cffb58-f798-45d8-bbfe-bd9fb31f59ba.png)  |  ![iOS Shortcuts Widget](https://user-images.githubusercontent.com/51929566/179695770-4dcb3071-2d8b-478b-a152-62b091e24c12.png) 

And since you can't look at your phone while driving, just say: “Hey Siri, List all traffic jams” 😉