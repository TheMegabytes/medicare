import express from "express";
import dotenv from "dotenv";

// dotenv config
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from Express");
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
