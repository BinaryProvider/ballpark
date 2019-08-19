FROM node:latest

RUN mkdir -p /usr/src/ballpark-api
WORKDIR /usr/src/ballpark-api

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 4000

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

CMD /wait && npm start