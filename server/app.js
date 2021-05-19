const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db/index");

const env = require("dotenv");
env.config();

const port = process.env.PORT || 3000

// Middleware
app.use(cors);
app.use(express.json());

app.post("/hello", async (req, res) => {
    try {
        console.log("Hello World")
    } catch (e) {
        console.log(e.message)
    }
})

app.listen(port, () => {
    console.log("Running on port", port);
});