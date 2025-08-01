const { getAppointmentsByDoctorAndDate, createAppointment, getOverlappingAppointments } = require('../models/appointmentModel');
const dayjs = require('dayjs');

async function bookAppointment({ doctorId, patientName, startTime, endTime }){
    const conflicts = await getOverlappingAppointments(doctorId, startTime, endTime);

    if (conflicts.length > 0) {
        throw new Error('Doctor is not available for the selected time slot');
    }

    const appointment = await createAppointment({ doctorId,patientName,startTime,endTime, });

    return {
        message: 'Appointment booked successfully',
        appointmentId: appointment.id,
    };
};

async function getAvailableSlots(doctorId, date){
    const workingHours = {
        start: dayjs(`${date}T09:00:00`),
        end: dayjs(`${date}T17:00:00`),
    };

    const appointments = await getAppointmentsByDoctorAndDate(doctorId, date);
    const slots = [];
    let slot = workingHours.start;
    while (slot.add(30, 'minute').isBefore(workingHours.end.add(1, 'minute'))) {
        const slotEnd = slot.add(30, 'minute');
        const overlapping = appointments.some((appt) =>
            dayjs(appt.start_time).isBefore(slotEnd) && dayjs(appt.end_time).isAfter(slot)
        );
        if (!overlapping) {
            slots.push(`${slot.format('HH:mm')}-${slotEnd.format('HH:mm')}`);
        }
        slot = slotEnd;
    }
    return {
        doctorId, date, availableSlots: slots,
    };
};

module.exports = { bookAppointment, getAvailableSlots }