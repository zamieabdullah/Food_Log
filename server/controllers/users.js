const pool = require("../db/index");

const createUser = async (req, res) => {
    try {
        const { first_name, middle_name, last_name, email_address, password } = req.body;
        const creatingUser = await pool.query("INSERT INTO account (first_name, middle_name, last_name, email_address, password) VALUES ($1, $2, $3, $4, $5)",
            [first_name, middle_name, last_name, email_address, password]);
        res.status(200).json({message: "Connection Success"});
    } catch (e) {
        console.error("Failed to make connection")
        res.status(500).json({message: "Connection Failure"});
    }
}

module.exports = { createUser };