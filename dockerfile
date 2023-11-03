# Use an official Nodemon.js runtime as a parent image
FROM node:16-alpine


# Set the working directory inside the container
WORKDIR /Users/Suchitra/node-basic

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Bundle your source code into the container
COPY . .

# Expose a port (if your application listens on a specific port)
EXPOSE 7000

CMD node app.js