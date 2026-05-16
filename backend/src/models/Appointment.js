import mongoose from "mongoose";

const appointmentSchema = new Schema(
  {
    date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true },
);

const Appointment = mongoose.Model("Appointment", appointmentSchema);

export default Appointment;
