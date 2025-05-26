# Use official Node.js image as base
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your app code
COPY . .

# Expose the app port
EXPOSE 3000

# Run the app
CMD [ "node", "index.js" ]
