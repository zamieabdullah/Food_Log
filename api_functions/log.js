const log = require('express').Router();

const { recordLog, retrieveLog } = require("../controllers/log");
const { verifyAuth } = require("../controllers/auth");

log.post("/recordLog", verifyAuth, recordLog);
log.get("/retrieve", verifyAuth, retrieveLog);

module.exports = log;