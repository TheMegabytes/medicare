import mongoose from "mongoose";

const patientSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    DoB: {
      type: Date,
      required: true,
    },

    gender: {
      type: Boolean,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Patient = mongoose.Model("Patient", patientSchema);

export default Patient;
