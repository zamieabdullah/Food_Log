const users = require("express").Router();
const { createUser, loginUser } = require("../controllers/users");

users.post("/createUser", createUser); 
users.get("/loginUser", loginUser);

module.exports = users;