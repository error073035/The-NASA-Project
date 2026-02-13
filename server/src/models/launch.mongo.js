import mongoose, { mongo } from 'mongoose';

const launchSchema = new mongoose.Schema({
  flightNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  mission: {
    type: String,
    required: true,
  },
  rocket: {
    type: String,
    required: true,
  },
  target: {
    type: String,
    required: true,
  },
  launchDate: {
    type: Date,
    required: true,
  },
  customers: {
    type: [String],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const launch = mongoose.model('Launch', launchSchema);
export default launch;