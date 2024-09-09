# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your application to the container
COPY . .

# Build the React application (if needed)
RUN npm run build

# Expose port 6666 for the application
EXPOSE 6666

# Start the application
CMD ["npm", "start"]
