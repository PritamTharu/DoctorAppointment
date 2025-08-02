const {queryDB} = require('../db_connection')

async function getAllDoctors() {
  const result = await queryDB('SELECT * FROM doctors');
  return result.rows;
};

module.exports = getAllDoctors
