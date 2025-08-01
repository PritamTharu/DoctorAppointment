const getAllDoctors = require('../models/doctorModel');

async function getDoctors(){
  return getAllDoctors();
};

module.exports = getDoctors
