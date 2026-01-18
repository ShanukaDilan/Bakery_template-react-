# Stage 1: Build stage
FROM node:22-alpine AS build

# Install build dependencies if needed
# RUN apk add --no-cache python3 make g++

WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Use npm ci for deterministic installs and cache mount for speed
RUN --mount=type=cache,target=/root/.npm \
    npm ci

# Copy the rest of the source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production stage
FROM nginx:stable-alpine

# Set up a non-root user for security
RUN addgroup -S nginxuser && adduser -S nginxuser -G nginxuser \
    && chown -R nginxuser:nginxuser /var/cache/nginx /var/run /var/log/nginx /usr/share/nginx/html

# Adjust permissions for directories Nginx needs to write to
RUN touch /var/run/nginx.pid && \
    chown nginxuser:nginxuser /var/run/nginx.pid

# Switch to non-root user
USER nginxuser

# Copy static files from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Use 8080 as non-root users cannot bind to 80
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
