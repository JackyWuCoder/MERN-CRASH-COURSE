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

app.get("/api/products", async (req, res) => {
    try {
        const products = await Product.find({}); // Get all products
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        console.log("error in fetching products:", error.message);
        res.status(500).json({ success:false, message: "Server Error"});
    }
})

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
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted" });
    } catch (error) {
        console.log("error in deleting product:", error.message);
        res.status(404).json({ success: false, message: "Product not found" });
    }
})

app.put("/api/products/:id", async (req, res) => {
    const { id } = req.params;

    const product = req.body;

    if (mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Product Id" })
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new:true});
        res.status(200).json({ success: true, data: updatedProduct })
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
})

// 5000 (arbitrary choice) is the port number where the Express application will listen for incoming HTTP requests.
// () => is a callback function (optional) that is executed when the server successfully starts.
app.listen(5000, () => {
    connectDB();
    console.log('Server started at http://localhost:5000');
})
