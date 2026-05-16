import express from "express";
import cors from "cors";
import dotenv from "dotenv";

//local imports
import connectDB from "./config/db.js";
import patientRoutes from "./routes/patient.route.js";
import doctorRoutes from "./routes/doctor.routes.js";

//dotenv configuration
dotenv.config();

const app = express();
const port = process.env.PORT || process.argv[2] || 3000;

app.use(cors());
app.use("/api/patients/", patientRoutes);
app.use("/api/doctors", doctorRoutes);

//connect to a database
// connectDB();

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
