FROM node:18-alpine
WORKDIR /usr/src/app

# Install production dependencies first (cache friendly)
COPY package*.json ./
RUN npm ci --omit=dev

# Copy source
COPY . .

EXPOSE 3000
CMD ["npm", "start"]
