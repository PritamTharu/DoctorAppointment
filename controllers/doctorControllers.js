const getDoctors = require('../services/doctorService');
const { getAvailableSlots } = require('../services/appointmentServices');

async function getAllDoctors(req, res){
    const doctors = await getDoctors();
    res.json(doctors);
};

async function getAllAvailableSlots(req, res){
    
    const { id } = req.params;
    const { date } = req.query;  

    try {
        const result = await getAvailableSlots(id, date);
        res.json(result);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = { getAllDoctors, getAllAvailableSlots }
