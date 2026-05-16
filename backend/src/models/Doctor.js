import mongoose from "mongoose";

const doctorSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },

    phone: {
      type: String,
      trim: true,
      required,
    },

    department: {
      type: String,
      trim: true,
      required: true,
    },

    gender: {
      type: Boolean,
      required: true,
    },

    password: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { timestamps: true },
);

const Doctor = mongoose.Model("Doctor", doctorSchema);

export default doctorModel;
