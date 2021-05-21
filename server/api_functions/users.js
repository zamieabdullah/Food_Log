const users = require("express").Router();
const { createUser } = require("../controllers/users");

users.use("/createUser", createUser); 

module.exports = users;