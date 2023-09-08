// controllers/doctorController.mjs
import Doctor from '../models/Doctor.js';

// Create a new doctor
export async function createDoctor(req, res, next) {
  try {
    const { name, specialization, hospitalId } = req.body;
    const doctor = new Doctor({ name, specialization, hospitalId });
    await doctor.save();
    res.status(201).json(doctor);
  } catch (error) {
    next(error);
  }
}

// Get all doctors
export async function getDoctors(req, res, next) {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (error) {
    next(error);
  }
}

// Get a doctor by ID
export async function getDoctorById(req, res, next) {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }
    res.status(200).json(doctor);
  } catch (error) {
    next(error);
  }
}

// Update a doctor by ID
export async function updateDoctor(req, res, next) {
  try {
    const { name, specialization, hospitalId } = req.body;
    const updatedDoctor = await Doctor.findByIdAndUpdate(
      req.params.id,
      { name, specialization, hospitalId },
      { new: true }
    );
    if (!updatedDoctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }
    res.status(200).json(updatedDoctor);
  } catch (error) {
    next(error);
  }
}

// Delete a doctor by ID
export async function deleteDoctor(req, res, next) {
  try {
    const deletedDoctor = await Doctor.findByIdAndRemove(req.params.id);
    if (!deletedDoctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
}
