FROM node:10.15.3

MAINTAINER oleksandr.kulagin@gmail.com

WORKDIR / Project

COPY . .

RUN yarn install