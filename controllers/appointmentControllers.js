const {bookAppointment} = require('../services/appointmentServices');

const book = async (req, res) => {
  try {
    const result = await bookAppointment(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = book