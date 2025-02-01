// Imports the Express Module and assigns it to "express" (Out of date syntax)
// const express = require('express');
import express from "express"; // Import the Express library
// The dotenv library is used to load environment variables from a .env file into your application's process.env object.
import dotenv from "dotenv"; // Import the dotenv library
import { connectDB } from "./config/db.js"; // Import connectDB async function (named import)
import productRoutes from "./routes/product.route.js";

// Loads variables defined in your .env file into the process.env object.
dotenv.config();

const app = express() // Create an instance of an Express application
const PORT = process.env.PORT || 5000;

app.use(express.json()); // allows us to accept JSON data in the req.body

app.use("/api/products", productRoutes);

// 5000 (arbitrary choice) is the port number where the Express application will listen for incoming HTTP requests.
// () => is a callback function (optional) that is executed when the server successfully starts.
app.listen({PORT}, () => {
    connectDB();
    console.log('Server started at http://localhost:5000');
})
