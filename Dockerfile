FROM node:slim

RUN apt update
RUN apt install curl -y

WORKDIR /tech-lab-server/

COPY data ./data/
COPY utils ./utils/
COPY index.js ./
COPY package.json ./

RUN npm install
CMD npm start

EXPOSE 8080/tcp
