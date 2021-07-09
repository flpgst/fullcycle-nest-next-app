
FROM node:14.15.4-alpine3.12

RUN apk add --no-cache bash

ADD . /home/node/api

WORKDIR /home/node/api

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]