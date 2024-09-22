# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install the necessary dependencies
RUN npm install

# Copy the rest of the application files into the container
COPY . .

# Expose the port that the app will run on
EXPOSE 3000

# Command to start the app
CMD ["npm", "start"]
