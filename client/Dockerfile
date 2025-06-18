# Stage 1: Build the React app
FROM node:18-alpine AS build

WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN npm install

# Copy source and build
COPY . .

# Accept dynamic environment variable
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL

# Build React app
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine

# Copy custom Nginx config if available
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build output to Nginx HTML directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port
EXPOSE 80

# Run Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
COPY nginx.conf /etc/nginx/conf.d/default.conf
