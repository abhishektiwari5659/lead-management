
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import leadRoutes from "./routes/leadRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (_, res) => res.send("Lead Management API OK"));
app.use("/api/leads", leadRoutes);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (e) {
    console.error("Failed to start server:", e.message);
    process.exit(1);
  }
};

start();
