import express from "express";

//local imports
import {
  getAllDoctors,
  getOneDoctor,
  addDoctor,
  updateDoctor,
  deleteDoctor,
} from "../controllers/doctor.controller.js";

const router = express.Router();

router.get("/", getAllDoctors);
router.get("/:id", getOneDoctor);
router.post("/add", addDoctor);
router.put("/:id", updateDoctor);
router.delete("/:id", deleteDoctor);

export default router;
