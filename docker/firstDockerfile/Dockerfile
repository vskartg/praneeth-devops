FROM node:20-alpine

LABEL version=1.0

WORKDIR /praneeth/app/

COPY package.json .
COPY helloworld.js .

RUN npm install

EXPOSE 3000

ENTRYPOINT ["node", "helloworld.js"]