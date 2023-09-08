// models/Doctor.js
import { Schema, model } from 'mongoose';

const doctorSchema = new Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  hospitalId: {
    type: Schema.Types.ObjectId,
    ref: 'Hospital',
    required: true,
  },
});

const Doctor = model('Doctor', doctorSchema);

export default Doctor;
