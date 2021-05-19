const express = require("express")
const cors = require("cors")
const app = express()

// Middleware
app.use(cors)

app.listen(3000, () => {
    console.log("Running on port 3000")
})