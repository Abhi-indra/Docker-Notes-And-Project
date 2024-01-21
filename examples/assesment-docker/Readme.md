# This project demonstrates the deployment of a multi-container application using Docker Compose. The application consists of a frontend and a backend.

## Project Structure

```
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
```

## Frontend

### Dockerfile

```Dockerfile
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
```

### Building and Running

```bash
cd frontend
docker build -t frontend .
docker run -d -p 3000:3000 frontend
```

## Backend

### Dockerfile

```Dockerfile
# Use an official Node.js runtime as a base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install --production

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port your Node.js app is running on (adjust if needed)
EXPOSE 8050

# Define the command to start your Node.js app
CMD ["node", "server.js"]
```

### Building and Running

```bash
cd backend
docker build -t backend .
docker run -d -p 8050:8050 backend
```

## Docker Compose

### docker-compose.yml

```yaml
version: '3'
services:
  # Frontend Service
  frontend:
    build:
      context: ./frontend
    ports:
      - "3000:3000"
    depends_on:
      - backend

  # Backend Service
  backend:
    build:
      context: ./backend
    ports:
      - "8050:8050"
    environment:
      MONGO_URI: "database url given by developer"
```

### Building and Running with Docker Compose

```bash
docker-compose build
docker-compose up -d
```

