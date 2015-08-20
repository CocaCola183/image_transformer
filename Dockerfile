FROM node:latest

RUN apt-get update && apt-get install -y imagemagick --fix-missing

CMD [ "node" ]