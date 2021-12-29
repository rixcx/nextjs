FROM node:14.17.4-alpine
WORKDIR /usr/src/app/next
COPY package*.json .
RUN npm install