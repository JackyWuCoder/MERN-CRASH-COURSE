// Imports the Express Module and assigns it to "express" (Out of date syntax)
// const express = require('express');
import express from "express"; // Import the Express library
// The dotenv library is used to load environment variables from a .env file into your application's process.env object.
import dotenv from "dotenv"; // Import the dotenv library
import { connectDB } from './config/db.js'; // Import connectDB async function (named import)
import Product from './models/product.model.js';

// Loads variables defined in your .env file into the process.env object.
dotenv.config();

const app = express() // Create an instance of an Express application

app.use(express.json()); // allows us to accept JSON data in the req.body

// Define a route for the root URL ("/") that sends "Server is ready" as a response to GET requests.
app.post("/api/products", async (req, res) => {
    const product = req.body; // user will send this data

    if (!product.name || !product.price || !product.image)
    {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    const newProduct = new Product(product)

    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.error("Error in Create product:", error.message);
        res.status(500).json({ success: false, message: "Server Error" })
    }
});

app.delete("/api/products/:id", async (req, res) => {
    const {id} = req.params;
})

// 5000 (arbitrary choice) is the port number where the Express application will listen for incoming HTTP requests.
// () => is a callback function (optional) that is executed when the server successfully starts.
app.listen(5000, () => {
    connectDB();
    console.log('Server started at http://localhost:5000');
})
