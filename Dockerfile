# Base image
FROM node:16.8.0-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies. npm ci may cause issues if package-lock.json isn't upgraded properly and will look for missing dependencies that are pushed up.
RUN npm install

# Copy the rest of the app files
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port the app will run on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
