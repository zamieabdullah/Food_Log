const Pool = require("pg").Pool;

config = {
    user: process.env.USER,
    pass: process.env.PASS,
    host: process.env.HOST,
    port: 5432,
    database: "food_log"
};

pool = new Pool(config);

module.exports = pool;