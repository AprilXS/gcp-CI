FROM node:latest

# Create app directory
WORKDIR /app

# Install app dependencies
COPY nodebuild/package.json /app
COPY nodebuild/server.js /app

RUN npm install

CMD ["node", "server.js"]