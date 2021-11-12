const Pool = require("pg").Pool;

config = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
};

// production configuration
const proConfig = {
    connectionString: process.env.DATABASE_URL
}

pool = new Pool(process.env.NODE_ENV === "production" ? proConfig : config);

module.exports = pool;