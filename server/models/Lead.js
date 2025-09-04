
import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: String, required: true, trim: true },
    status: { 
      type: String, 
      enum: ["New", "Contacted", "Qualified", "Lost"], 
      default: "New" 
    },
    source: { type: String, default: "Web" },
    notes: { type: String, default: "" },
  },
  { timestamps: true }
);

leadSchema.index({ name: "text", email: "text", phone: "text" });

export default mongoose.model("Lead", leadSchema);
