dotenv = require("dotenv");
dotenv.config();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Import the express module
const express = require('express');

// Create an instance of express
const app = express();

// Define the port to run the server on
const port = process.env["SERVER_PORT"] || 3000;

// Define a route for the root URL ("/") with a GET method
app.get('/', async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

// Start the server and listen on the defined port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});