// Imports the Express Module and assigns it to "express" (Out of date syntax)
// const express = require('express');
import express from "express"; // Import the Express library
// The dotenv library is used to load environment variables from a .env file into your application's process.env object.
import dotenv from "dotenv"; // Import the dotenv library
import { connectDB } from './config/db.js'; // Import connectDB async function (named import)

// Loads variables defined in your .env file into the process.env object.
dotenv.config();

const app = express() // Create an instance of an Express application

// Define a route for the root URL ("/") that sends "Server is ready" as a response to GET requests.
app.post("/products", (req, res) => {});

// 5000 (arbitrary choice) is the port number where the Express application will listen for incoming HTTP requests.
// () => is a callback function (optional) that is executed when the server successfully starts.
app.listen(5000, () => {
    connectDB();
    console.log('Server started at http://localhost:5000');
})
