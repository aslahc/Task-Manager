// app.js
const express = require("express");
const cors = require("cors");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
app.use(
  cors({
    origin: "*", // Allows requests from any origin, for now (hosting puropose)
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"], // Include OPTIONS for preflight
    credentials: true, // Allow credentials if needed
  })
);
app.use(express.json());

app.use(taskRoutes); // Use task routes

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
