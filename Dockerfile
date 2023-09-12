FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install git
RUN apt-get update

RUN apt-get install git

RUN mkdir configs

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "src/server.js" ]