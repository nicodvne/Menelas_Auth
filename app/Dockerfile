FROM node:lts-alpine3.17
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . ./
EXPOSE 8090

CMD ["npm" , "run", "dev"]