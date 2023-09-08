// controllers/hospitalController.mjs
import Hospital from '../models/Hospital.js';

// Create a new hospital
export async function createHospital(req, res, next) {
  try {
    const { name, location } = req.body;
    const hospital = new Hospital({ name, location });
    await hospital.save();
    res.status(201).json(hospital);
  } catch (error) {
    next(error);
  }
}

// Get all hospitals
export async function getHospitals(req, res, next) {
  try {
    const hospitals = await Hospital.find();
    res.status(200).json(hospitals);
  } catch (error) {
    next(error);
  }
}

// Get a hospital by ID
export async function getHospitalById(req, res, next) {
  try {
    const hospital = await Hospital.findById(req.params.id);
    if (!hospital) {
      return res.status(404).json({ error: 'Hospital not found' });
    }
    res.status(200).json(hospital);
  } catch (error) {
    next(error);
  }
}

// Update a hospital by ID
export async function updateHospital(req, res, next) {
  try {
    const { name, location } = req.body;
    const updatedHospital = await Hospital.findByIdAndUpdate(
      req.params.id,
      { name, location },
      { new: true }
    );
    if (!updatedHospital) {
      return res.status(404).json({ error: 'Hospital not found' });
    }
    res.status(200).json(updatedHospital);
  } catch (error) {
    next(error);
  }
}

// Delete a hospital by ID
export async function deleteHospital(req, res, next) {
  try {
    const deletedHospital = await Hospital.findByIdAndRemove(req.params.id);
    if (!deletedHospital) {
      return res.status(404).json({ error: 'Hospital not found' });
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
}
