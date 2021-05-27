const pool = require("../db/index");

const createUser = async (req, res) => {
    try {
        const { first_name, middle_name, last_name, email, 
            password } = req.body;
        const checkEmail = await pool.query('SELECT id FROM account WHERE email_address = $1',
            [email]);
        if (checkEmail.rowCount > 0) {
            return res.status(409).json({message: 'Account is already made with this email address'})
        }
        const creatingUser = await pool.query('INSERT INTO account (first_name, middle_name, last_name, email_address, password) VALUES ($1, $2, $3, $4, $5)',
            [first_name, middle_name, last_name, email, password]);
        return res.status(200).json({message: 'Account successfully made'});
    } catch (e) {
        console.error('Please fill out all required boxes');
        return res.status(500).json({message: 'Please fill out all required boxes'});
    }
}

const loginUser = async (req, res) => {
    try {
        const { email , password } = req.body;
        const gettingUser = await pool.query('SELECT * FROM account WHERE email_address = $1 and password = $2',
            [email, password]);
        return res.status(200).json({gettingUser});
    } catch (e) {
        console.error('Failed to retrieve account');
        return res.status(500).json({message: e});
    }
}

module.exports = { createUser , loginUser };