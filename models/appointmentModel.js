const { queryDB } = require('../db_connection');

async function getOverlappingAppointments(doctorId, startTime, endTime) {
    const query = `
    SELECT * FROM appointments
    WHERE doctor_id = $1 AND ($2, $3) OVERLAPS (start_time, end_time)
  `;
    const result = await queryDB(query, [doctorId, startTime, endTime]);
    return result.rows;
};


async function createAppointment({ doctorId, patientName, startTime, endTime }) {
    const query = `
    INSERT INTO appointments (doctor_id, patient_name, start_time, end_time)
    VALUES ($1, $2, $3, $4)
    RETURNING id
  `;
    const result = await queryDB(query, [doctorId, patientName, startTime, endTime]);
    return result.rows[0];
};

async function getAppointmentsByDoctorAndDate(doctorId, date) {    
    const query = `
    SELECT * FROM appointments
    WHERE doctor_id = $1 AND DATE(start_time) = $2
  `;
    const result = await queryDB(query, [doctorId, date]);
    return result.rows;
};

module.exports = { getAppointmentsByDoctorAndDate, createAppointment, getOverlappingAppointments }
