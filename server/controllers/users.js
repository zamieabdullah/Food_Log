const pool = require('../db/index');
const jwt = require('jsonwebtoken');

const createUser = async (req, res) => {
    try {
        const { first_name, middle_name, last_name, email, 
            password } = req.body;
        
        const checkEmail = await pool.query('SELECT id FROM account WHERE email_address = $1',
            [email]);
        if (checkEmail.rowCount > 0) {
            return res.status(409).json({message: 'Account is already made with this email address'})
        }
        const user = await pool.query('INSERT INTO account (first_name, middle_name, last_name, email_address, password) VALUES ($1, $2, $3, $4, $5) RETURNING id',
            [first_name, middle_name, last_name, email, password]);
        
        const response = {
            auth : true,
            token : jwt.sign({user: user.rows[0].id}, process.env.JWT_PRIVATE, {expiresIn : '1h'}),
            user : {
                id : user.rows[0].id,
                email : user.rows[0].email_address
            }
        }    
        
        console.log(user);
        
        return res.status(200).json({message: 'Account successfully made'});
    } catch (e) {
        console.error('Failure to create account');
        return res.status(500).json({message: 'Failure to create account'});
    }
}

const loginUser = async (req, res) => {
    try {
        const { email , password } = req.body;
        const user = await pool.query('SELECT id, email_address FROM account WHERE email_address = $1 and password = $2',
            [email, password]);
        
        const response = {
            auth : true,
            token : jwt.sign({user: user.rows[0].id}, process.env.JWT_PRIVATE, {expiresIn : '1h'}),
            user : {
                id : user.rows[0].id,
                email : user.rows[0].email_address
            }
        }
        
        return res.status(200).json({message : response});
    } catch (e) {
        console.error('Failed to retrieve account');
        return res.status(500).json({message: e});
    }
}

const checkUser = async (req, res) => {
    try {
        const id = req.user;
        
        const user = await pool.query('SELECT id, email_address FROM account WHERE id = $1',
            [id]);
        
        const response = {
            id : user.rows[0].id,
            email : user.rows[0].email_address
        }
        
        return res.status(200).json({message : response});
    } catch (e) {
        console.error('Failed to retrieve account');
        return res.status(500).json({message: e});
    }
}

module.exports = { createUser , loginUser , checkUser };