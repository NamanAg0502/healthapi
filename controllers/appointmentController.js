// controllers/appointmentController.mjs
import Appointment from '../models/Appointment.js';

// Create a new appointment
export async function createAppointment(req, res, next) {
  try {
    const { doctorId, patientId, date, time } = req.body;
    const appointment = new Appointment({ doctorId, patientId, date, time });
    await appointment.save();
    res.status(201).json(appointment);
  } catch (error) {
    next(error);
  }
}

// Get all appointments
export async function getAppointments(req, res, next) {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    next(error);
  }
}

// Get an appointment by ID
export async function getAppointmentById(req, res, next) {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }
    res.status(200).json(appointment);
  } catch (error) {
    next(error);
  }
}

// Update an appointment by ID
export async function updateAppointment(req, res, next) {
  try {
    const { doctorId, patientId, date, time } = req.body;
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { doctorId, patientId, date, time },
      { new: true }
    );
    if (!updatedAppointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }
    res.status(200).json(updatedAppointment);
  } catch (error) {
    next(error);
  }
}

// Delete an appointment by ID
export async function deleteAppointment(req, res, next) {
  try {
    const deletedAppointment = await Appointment.findByIdAndRemove(
      req.params.id
    );
    if (!deletedAppointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
}
