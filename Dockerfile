FROM node:18

RUN apt-get update
RUN apt-get install lshw -y
RUN lshw
RUN curl ifconfig.me/ip
# RUN lshw -short
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

# Bundle app source
COPY . .

EXPOSE 8080
USER ROOT
CMD [ "node", "server.js" ]
