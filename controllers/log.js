const pool = require('../db/index');
const jwt = require('jsonwebtoken');

const recordLog = async (req, res) => {
    try {
        const id = req.user;
        let status = 200;

        const {food_name, food_type, description} = req.body;
        const type = await pool.query('SELECT id FROM food_type WHERE type = $1', [food_type.toUpperCase()]);
        if (type.rowCount == 0) {
            return res.status(40).json({message: 'Unavailable input'});
        }

        const record = await pool.query('INSERT INTO food_log (account_id, food_type_id, name, time_eaten, description) VALUES ($1, $2, $3, now(), $4)', [id, type.rows[0].id, food_name, description]);

        return res.status(200).json({message : 'Successfully recorded'});
    } catch (e) {
        return res.status(500).json({message : 'Failed to record'});
    }
};

const retrieveLog = async (req, res) => {
    try {
        const id = req.user;

        const retrievedLogs = await pool.query('SELECT name, food_type.type, description, time_eaten FROM food_log, food_type WHERE food_log.account_id = $1 AND food_log.food_type_id = food_type.id', [id]);

        let logs = []

        retrievedLogs.rows.forEach((log) => {
            let date = new Date(log.time_eaten);
            let str_date = date.getDate().toString() + '/'
                            + (date.getMonth() + 1).toString() + '/'
                            + date.getFullYear().toString() + ' '
                            + date.getHours().toString() + ':'
                            + date.getMinutes().toString()

            let type = log.type.charAt(0).toUpperCase() + log.type.slice(1).toLowerCase()

            let data = {
                food_name : log.name,
                food_type : type,
                food_description : log.description,
                time_eaten : str_date
            }
            logs.push(data);
        });



        return res.status(200).json({logs : logs});
    } catch (e) {
        console.log(e)
        return res.status(500).json({message : 'Failed to retrieve logs'});
    }
}

module.exports = { recordLog, retrieveLog }