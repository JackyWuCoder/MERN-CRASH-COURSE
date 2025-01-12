// Imports the Express Module and assigns it to "express" (Out of date syntax)
// const express = require('express');
import express from 'express'; // Import the Express library

const app = express() // Create an instance of an Express application

// 5000 (arbitrary choice) is the port number where the Express application will listen for incoming HTTP requests.
// () => is a callback function (optional) that is executed when the server successfully starts.
app.listen(5000, () => {
    console.log('Server started at http://localhost:5000');
})