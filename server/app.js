const express = require("express");
const cors = require("cors");
const app = express();

const env = require("dotenv");
env.config();

const pool = require("./db/index");

const port = process.env.PORT

// Middleware
app.use(cors());
app.use(express.json());

// API functions
const router = require("./api_functions/index");

app.use("/api", router);

app.listen(port, () => {
    console.log("Running on port", port);
});