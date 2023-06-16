
# PRODUCTION DOCKERFILE
# ---------------------
# This Dockerfile allows to build a Docker image of the NestJS application
# and based on a NodeJS 16 image. The multi-stage mechanism allows to build
# the application in a "builder" stage and then create a lightweight production
# image containing the required dependencies and the JS build files.
# 
# Dockerfile best practices
# https://docs.docker.com/develop/develop-images/dockerfile_best-practices/
# Dockerized NodeJS best practices
# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md
# https://www.bretfisher.com/node-docker-good-defaults/
# http://goldbergyoni.com/checklist-best-practice-of-node-js-in-production/

FROM node:20-bullseye-slim 
RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN npm config ls -l
RUN apt-get update -y && apt-get install iputils-ping -y
RUN ping -c 4 registry.npmjs.org
RUN npm i
RUN npm run build \
    && npm prune --production


CMD ["node", "dist/main.js"]
