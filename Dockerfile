# Build-time stage
FROM node:14.19.1-alpine3.15 as build

# Set buildtime variables
ARG API_URL
ARG OPTIONS_JSON
ARG AUTH_TOKEN
ARG HOME_PAGE

USER node

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node package.json yarn.lock ./

RUN yarn install --immutable

COPY --chown=node:node . ./

RUN yarn build

# Run-time stage
FROM node:14.19.1-alpine3.15

# Set app host for dockerized run
ENV HOST=0.0.0.0
# Set app port
ENV PORT=3000
# Set tz
ENV TZ=UTC

USER node

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node nuxt.config.js package.json yarn.lock ./

RUN yarn install --immutable --production && yarn cache clean --all

COPY --chown=node:node static/ ./static
COPY --chown=node:node --from=build /home/node/app/.nuxt ./.nuxt

EXPOSE 3000

CMD [ "yarn", "start" ]
