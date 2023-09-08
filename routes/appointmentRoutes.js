// routes/appointmentRoutes.mjs
import express from 'express';
import {
  createAppointment,
  getAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
} from '../controllers/appointmentController.js';

const router = express.Router();

// Create a new appointment
router.post('/', createAppointment);

// Get all appointments
router.get('/', getAppointments);

// Get an appointment by ID
router.get('/:id', getAppointmentById);

// Update an appointment by ID
router.put('/:id', updateAppointment);

// Delete an appointment by ID
router.delete('/:id', deleteAppointment);

export default router;
