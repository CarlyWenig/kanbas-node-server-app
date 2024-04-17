import mongoose from "mongoose";
const lessonSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  module: { type: String, required: true }
});
const moduleSchema = new mongoose.Schema({
    id: String,
    name: { type: String, required: true},
    description: String,
    course: String,
    lessons: [lessonSchema]
  },
  { collection: "modules" });
export default moduleSchema;