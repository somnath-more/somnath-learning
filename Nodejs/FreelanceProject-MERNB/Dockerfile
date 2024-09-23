FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json into the container
COPY package.json ./

# Install the necessary dependencies
RUN npm install

# Copy the rest of the application files into the container
COPY . .

# Set environment variables
ENV PORT=5555
ENV DB_CONNECTION_URL=mongodb://mongo::27017/website_tut

# Expose the port that the app will run on
EXPOSE 5555

# Command to start the app
CMD ["npm", "start"]
