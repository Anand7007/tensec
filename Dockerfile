FROM node:16-alpine
COPY package.json / app/
COPY src / index/

WORKDIR /index

RUN npm install

CMD [ "node", "index.js" ]