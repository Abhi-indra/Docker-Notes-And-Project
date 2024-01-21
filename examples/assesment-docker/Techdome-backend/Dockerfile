# Use an official Node.js runtime as a base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install 

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port your Node.js app is running on (adjust if needed)
EXPOSE 8050

# Define the command to start your Node.js app
CMD ["node", "server.js"]

