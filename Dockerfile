# Build stage - needs ALL dependencies including devDependencies for Vite
FROM node:20-slim AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including devDependencies needed for build)
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage - serve static files with 'serve'
FROM node:20-slim

WORKDIR /app

# Copy built static files from build stage
COPY --from=build /app/dist ./dist

# Install serve globally to serve static files
RUN npm install -g serve

# Expose port 8080 (Cloud Run default)
EXPOSE 8080

# Set PORT environment variable
ENV PORT=8080

# Serve the built static files from dist folder
# The serve command will listen on the PORT environment variable
CMD ["sh", "-c", "serve -s dist -l $PORT"]
