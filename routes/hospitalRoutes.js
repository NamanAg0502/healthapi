// routes/hospitalRoutes.mjs
import express from 'express';
import {
  createHospital,
  getHospitals,
  getHospitalById,
  updateHospital,
  deleteHospital,
} from '../controllers/hospitalController.js';

const router = express.Router();

// Create a new hospital
router.post('/', createHospital);

// Get all hospitals
router.get('/', getHospitals);

// Get a hospital by ID
router.get('/:id', getHospitalById);

// Update a hospital by ID
router.put('/:id', updateHospital);

// Delete a hospital by ID
router.delete('/:id', deleteHospital);

export default router;
