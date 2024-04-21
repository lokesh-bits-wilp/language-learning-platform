# Stage 1: Build Stage
FROM node:18-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Install PM2
RUN npm install pm2 -g

# Copy the microservice code to the container
COPY . .

# Stage 2: Production Stage
FROM build AS production

# # Set the working directory in the container
WORKDIR /app

# Build the microservice
RUN npm run build

# Expose the port on which the microservice will run
EXPOSE 4000