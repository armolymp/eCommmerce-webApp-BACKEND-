# eCommerce Web Application - Backend

Welcome to the backend repository of our eCommerce web application! This repository contains the server-side code responsible for managing products and handling API requests from the frontend.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Postman Collection](#postman-collection)

## Prerequisites

Before running the backend server, ensure that you have the following software installed on your system:

- Node.js
- npm (Node Package Manager)
- MongoDB (Make sure MongoDB server is running)

## Getting Started

To get the backend server up and running, follow these steps:

1. Clone this repository to your local machine:
   git clone https://github.com/your-username/eCommerce-webapp-backend.git

2. Navigate to the project directory:

3. Install dependencies using npm:

4. Start the server:
   npm start

The server should now be running at `http://localhost:5000`.

## Project Structure

The project structure follows a typical Express.js application architecture:

eCommerce-webapp-backend/
├── controllers/ # Route handlers for API endpoints
├── models/ # Mongoose models for MongoDB schemas
├── routes/ # Express routes for defining API endpoints
├── uploads/ # Directory to store uploaded images
├── .gitignore # Specifies intentionally untracked files to ignore
├── package.json # Project dependencies and scripts
├── server.js # Entry point to start the server
└── README.md # Project documentation

## The backend server provides the following API endpoints for managing products:

- `GET /api/products`: Get all products
- `GET /api/products/:id`: Get a single product by ID
- `POST /api/products`: Add a new product
- `PUT /api/products/:id`: Update an existing product
- `DELETE /api/products/:id`: Delete a product by ID

## To test the API endpoints, you can import the provided Postman collection:

https://api.postman.com/collections/20449299-099bccd8-12b0-484f-a838-4793cb0ef498?access_key=PMAT-01HZ9S2C4GPJZ2Y9M49E3XENVS

## Backend is successfully deployed in HEROKU. Can be accessed using below URL:

https://ecommerce-webapp-21ba80cbdad8.herokuapp.com/api/products
