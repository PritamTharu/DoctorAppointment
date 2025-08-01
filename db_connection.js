const pg = require('pg')

const client = new pg.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT)
})

async function connectDB() {
    try {
        await client.connect()
        console.log('Connected to the database...');
    } catch (error) {
        console.error('Database connection error...');
        if (error) throw error
    }
}

async function queryDB(queryText, params = []) {
    try {
        const res = await client.query(queryText, params);
        return res;
    } catch (error) {
        console.error('Query error', error);
        if (error) throw error;
    }
}

module.exports = {connectDB,queryDB}