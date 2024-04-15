import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    number: Number,
    startDate: Date,
    endDate: Date,
    department: String,
    credits: Number,
    description: String
  },
  { collection: "courses" });
export default courseSchema;