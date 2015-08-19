FROM node:latest

RUN apt-get update && apt-get install imagemagick --fix-missing

CMD [ "node" ]