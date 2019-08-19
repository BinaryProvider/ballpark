FROM node:latest

RUN mkdir -p /usr/src/ballpark-client
WORKDIR /usr/src/ballpark-client

COPY package*.json ./

RUN npm install --loglevel=error 

COPY . ./

EXPOSE 3000

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

CMD /wait && npm start