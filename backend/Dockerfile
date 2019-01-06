FROM gcr.io/google-appengine/nodejs

# Working directory is where files are stored, npm is installed, and the application is launched
WORKDIR /app

# Copy application to the /app directory.
# Add only the package.json before running 'npm install' so 'npm install' is not run if there are only code changes, no package changes
COPY package.json /app/package.json
RUN npm install
COPY . /app

# Expose port so when container is launched you can curl/see it.
EXPOSE 8080

# The command to execute when Docker image launches.
CMD ["npm", "start"]