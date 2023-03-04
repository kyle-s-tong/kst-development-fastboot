FROM public.ecr.aws/docker/library/node:18-alpine

# Required for TZ to be picked up
RUN apk --no-cache add tzdata

WORKDIR /usr/src/app

# Give the node user ownership of the app directory to allow creation of logs
# and so on
RUN chown node /usr/src/app

# Fastboot server files
COPY --chown=node:node /srv/. /usr/src/app/srv/.

# Dependencies
COPY --chown=node:node /srv/package.json ./
COPY --chown=node:node /srv/yarn.lock ./

# Requred to install node-gyp so that NewRelic can monitor event loop and GC
RUN apk add --no-cache --virtual build-deps python3 make g++ &&  \
  # Install deps (this is the minimal package.json from /srv)
  yarn install --frozen-lockfile &&  \
  # Remove packages afterwards to keep image small
  apk del build-deps


# Enable ember-cli-fastboot's rehydration render mode
ENV EXPERIMENTAL_RENDER_MODE_SERIALIZE=true

# NZ timezone
ENV TZ=Asia/Seoul

# Built app
COPY --chown=node:node /dist/. /usr/src/app/dist/.

USER node

EXPOSE 3000

ENTRYPOINT [ "node", "srv/app.js" ]
