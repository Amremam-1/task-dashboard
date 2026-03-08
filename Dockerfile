# Use Node image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy env file
COPY .env .env

# Copy project files
COPY . .

# Build the Vite project
RUN npm run build

# Install serve to run the build
RUN npm install -g serve

# Expose port
EXPOSE 5173

# Run the app
CMD ["serve", "-s", "dist", "-l", "5173"]