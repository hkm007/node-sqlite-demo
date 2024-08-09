# Use the official Node.js image as a base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000 for the app
EXPOSE 8000

# Command to run the app
CMD ["npm", "start"]
