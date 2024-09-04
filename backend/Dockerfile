# Use the official Node.js image with Alpine Linux
FROM node:20.12.0-alpine3.19

# Set the working directory inside the container
WORKDIR /backend

# Copy package.json and package-lock.json (if it exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port the app will run on
EXPOSE 3000

# Command to start your application
CMD ["npm", "start"]
