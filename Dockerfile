# Base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Install required system dependencies
RUN apk add --no-cache --virtual .gyp python3 make g++

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies. npm ci may cause issues if package-lock.json isn't upgraded properly and will look for missing dependencies that are pushed up.
RUN npm install

# Copy the rest of the app files
COPY . .

# Build the Next.js app
RUN npm run build

# Remove the build-time dependencies
RUN apk del .gyp

# Expose the port the app will run on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
