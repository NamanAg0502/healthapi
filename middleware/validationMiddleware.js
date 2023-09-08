// middleware/validationMiddleware.mjs
import { body, validationResult } from 'express-validator';

// Validation middleware for appointment creation
export const validateAppointment = [
  body('doctorId').notEmpty().isMongoId(),
  body('patientId').notEmpty().isMongoId(),
  body('date').notEmpty().isISO8601(),
  body('time').notEmpty(),
];
