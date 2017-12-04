FROM node:8-alpine

ENV BUILD_DEPS 'python make g++'

WORKDIR /www
COPY ./package.json ./package-lock.json ./index.js /www/

RUN apk update \
  && apk add --no-cache --virtual ${BUILD_DEPS} \
  && npm i \
  && apk del ${BUILD_DEPS}

CMD ["node", "index.js"]
