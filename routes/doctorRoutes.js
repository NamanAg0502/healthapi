// routes/doctorRoutes.mjs
import express from 'express';
import {
  createDoctor,
  getDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
} from '../controllers/doctorController.js';

const router = express.Router();

// Create a new doctor
router.post('/', createDoctor);

// Get all doctors
router.get('/', getDoctors);

// Get a doctor by ID
router.get('/:id', getDoctorById);

// Update a doctor by ID
router.put('/:id', updateDoctor);

// Delete a doctor by ID
router.delete('/:id', deleteDoctor);

export default router;
