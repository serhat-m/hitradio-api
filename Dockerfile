FROM node:20.3.1-slim

WORKDIR /app

ARG BUILD_MODE

COPY package.json .

RUN if [ "$BUILD_MODE" = "production" ] ; then npm i --omit=dev ; else npm i ; fi

COPY . .