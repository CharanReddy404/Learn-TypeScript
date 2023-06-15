FROM node:latest

WORKDIR /todo-ts

COPY package*.json ./

RUN npm install --production

COPY . .

RUN npm install typescript --save-dev

RUN npx tsc

EXPOSE 3000

CMD ["npm","start"]