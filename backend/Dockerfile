FROM strapi/strapi:3.4.1-node14-alpine

LABEL com.centurylinklabs.watchtower.enable="false"

ENV NODE_ENV production
WORKDIR /svr/app

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY favicon.ico .
COPY public/robots.txt public/
COPY extensions/ extensions/
COPY api/ api/
COPY config/ config/

RUN npm run build

EXPOSE 1337

RUN export NODE_OPTIONS=--openssl-legacy-provider

CMD ["npm", "run", "start"]
