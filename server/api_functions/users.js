const users = require("express").Router();
const { getUser } = require("../controllers/users");
 
users.get("/:getUser", getUser);

module.exports = users;