// Import Express.js
const express = require("express");

// Create an Express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Set port
const port = process.env.PORT || 3000;

// Import routes
const webhookRoutes = require("./src/routes/webhookRoutes");

// Use routes
app.use("/", webhookRoutes);

// Start the server
app.listen(port, () => {
  console.log(`\nListening on port ${port}\n`);
});
