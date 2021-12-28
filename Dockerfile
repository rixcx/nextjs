FROM node:14.17.4-alpine
WORKDIR /usr/src/app/next
RUN cd /usr/src/app/next
COPY package*.json /usr/src/app/next
RUN npm install
RUN npm install microcms-js-sdk