FROM node:20-alpine

WORKDIR /app

#COPY package*.json ./
COPY my-node-app/* ./


RUN npm --version
RUN npm install

#COPY my-node-app /app

EXPOSE 3000

CMD ["node", "index.js"]


# docker build -t node-app-20:0.0.1 .