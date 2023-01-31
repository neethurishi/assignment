# Use node image as base image
FROM node:14

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build Angular application
RUN npm run build

# Expose port 4200
EXPOSE 4200

# Set default command to run Angular application
CMD [ "npm", "start" ]
