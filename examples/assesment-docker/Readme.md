# Multi-Container Application Deployment with Docker Compose

## Complete repo - https://github.com/Abhi-indra/Docker-Notes-And-Project/tree/main/examples/assesment-docker

###Steps:

- Make single directory with name assessment-docker.
- Clone the front-end repository.
- Clone the backend repository.

### For this task am created two containers one is for frontend and another is for backend and the structure of project that i follow are 👍

  project-root/
  ├── backend/
  │   ├── Dockerfile
  │   ├── package.json
  │   ├── server.js
  │   
  ├── frontend/
  │   ├── Dockerfile
  │   ├── package.json
  │   ├── src/
  │   
  ├── docker-compose.yml
  └── README.md


## Frontend-

Write a a Dcokerfile for frontend inside the frontend folder 

Here are the steps: 

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
  
  # Build the React app for production
    RUN npm run build
  
  # Expose the port the app runs on
    EXPOSE 3000
  
  # Define the command to run your app using npm start
    CMD ["npm", "start"]

- After that i run a command to build the image of fronend
  docker build -t frontend .
- When the image is build i create a container to check it is working fine or not and the command is used is 
  docker run -d -p 3000:3000 frontend

## Backend-

Write a a Dcokerfile for backend inside the backend folder 

Here are the steps: 

- Use an official Node.js runtime as a base image
  FROM node:14-alpine

- Set the working directory inside the container
  WORKDIR /app

- Copy package.json and package-lock.json to the working directory
  COPY package*.json ./

- Install project dependencies
  RUN npm install 

- Copy the rest of the application code to the working directory
  COPY . .

- Expose the port your Node.js app is running on (adjust if needed)
  EXPOSE 8050

- Define the command to start your Node.js app
  CMD ["node", "server.js"]


- After that i run a command to build the image of backend
  docker build -t backend .
- When the image is build i create a container to check it is working fine or not and the command is used is 
  docker run -d -p 8050:8050 backend

### Creating Docker-compose.yml file in root folder

  version: '3'
  services:
    - Frontend Service
    frontend:
      build:
        context: ./frontend
      ports:
        - "3000:3000"
      depends_on:
        - backend
  
    - Backend Service
    backend:
      build:
        context: ./backend
      ports:
        - "5000:5000"
      environment:
        MONGO_URI: "database url given by developer"
        
- After that am build the compose file with command
  docker-compose build
- After that am run the compose file with command
  docker-compose up -d

