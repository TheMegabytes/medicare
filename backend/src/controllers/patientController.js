import mongoose, { Mongoose } from "mongoose";

export const getAllPatients = (req, res) => {
  try {
    const patients = mongoose.find({});
    res.status(200).json(patients);
  } catch (error) {
    console.error(error);
  }
};

export const getOnePatient = (req, res) => {
  try {
    const patient = mongoose.findById({ id });

    if (!id) {
      res.status(404).json(`User with id of ${id} is not found!`);
      return;
    }

    res.status(200).json(patient);
  } catch (error) {
    console.error(error);
  }
};

export const addPatient = (req, res) => {
  try {
    const newPatient = mongoose.save();
  } catch (error) {}
};

export const updatePatient = (req, res) => {
  res.status(200).json({ message: "Patient updated successfully" });
};

export const deletePatient = (req, res) => {
  res.status(200).json({ message: "Deleted successfully" });
};
