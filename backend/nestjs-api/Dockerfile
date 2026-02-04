# --- Stage 1: Build ---
FROM node:22-alpine AS builder

WORKDIR /app

# Copy configuration and dependency files
COPY package*.json ./
COPY tsconfig*.json ./
COPY nest-cli.json ./

# Install dependencies including devDependencies for build
RUN npm install

# Copy source code
COPY src ./src

# Build the application
RUN npm run build

# --- Stage 2: Production ---
FROM node:22-alpine

WORKDIR /app

# Set environment to production
ENV NODE_ENV=production

# Copy only production dependencies from builder
COPY --from=builder /app/package*.json ./
RUN npm install --only=production

# Copy built assets from builder
COPY --from=builder /app/dist ./dist

# Industrial standard: Non-root user for security
USER node

EXPOSE 3000

CMD ["node", "dist/main"]
