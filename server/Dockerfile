# Use official Node.js LTS Alpine image for smaller size
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (for better Docker layer caching)
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy the rest of the backend source code
COPY . .

# Expose the port the server listens on
EXPOSE 5000

# Start the Node.js server
CMD ["node", "index.js"]
