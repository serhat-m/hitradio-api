FROM node:18.5.0-slim

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .