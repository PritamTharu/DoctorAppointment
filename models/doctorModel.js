const {queryDB} = require('../db_connection')

async function getAllDoctors() {
  const result = await queryDB('SELECT * FROM doctor');
  return result.rows;
};

module.exports = getAllDoctors
