// index.mjs
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { handleErrors } from './middleware/errorMiddleware.js';
import config from './config.js';
// Include your routes here
import appointmentRoutes from './routes/appointmentRoutes.js';
import hospitalRoutes from './routes/hospitalRoutes.js';
import doctorRoutes from './routes/doctorRoutes.js';

const app = express();
const port = config.port;

mongoose.connect(config.mongodbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

app.use('/appointments', appointmentRoutes);
app.use('/hospitals', hospitalRoutes);
app.use('/doctors', doctorRoutes);

app.use(handleErrors);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
