# Use official Node.js LTS Alpine image for smaller size
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy all backend source files
COPY . .

# Expose port your server listens on (default 5000)
EXPOSE 5000

# Start the server
CMD ["node", "index.js"]
