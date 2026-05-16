import express from "express";

import {
  getAllPatients,
  getOnePatient,
  addPatient,
  updatePatient,
  deletePatient,
} from "../controllers/patient.controller.js";

const router = express.Router();

router.get("/", getAllPatients);
router.get("/:id", getOnePatient);
router.post("/add", addPatient);
router.put("/update:id", updatePatient);
router.delete("/delete:id", deletePatient);

export default router;
