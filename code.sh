#!/bin/bash

#  build app
npm run build

# Docker login
docker login

# Build Docker image
sudo docker build -t vite-react-app:latest .

# Run Docker container 
# docker run -p 8080:8080 vite-react-app:latest

# Tag Docker image
docker tag vite-react-app:latest gabriel2024/group_assignment-todo-list:latest

# Push Docker image to Docker Hub
sudo docker push gabriel2024/group_assignment-todo-list:latest

# Pull Docker image from Docker Hub
docker pull gabriel2024/group_assignment-todo-list:latest

# Run Docker container with pulled image
docker run -p 8080:8080 gabriel2024/group_assignment-todo-list:latest 