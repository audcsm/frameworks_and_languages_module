FROM node:alpine

WORKDIR /vue_client

COPY ./vue_client/package.json ./

RUN npm install

COPY . .

ENV NODE_OPTIONS=--openssl-legacy-provider

RUN npm run build

EXPOSE 8001
CMD ["npm", "run", "serve", "--", "--port", "8001"]