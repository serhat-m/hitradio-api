[Hitradio Ohr](https://www.hitradio-ohr.de) is a radio station that provides speed camera and traffic jam data for the Ortenaukreis region in Germany. Despite their clear website, sometimes things have to be as quick and easy as possible and that's why I developed this API.

# Installation

```bash
docker compose -f docker-compose.yaml -f docker-compose.prod.yaml up --build
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