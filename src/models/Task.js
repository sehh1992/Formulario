import { Schema, model, models } from "mongoose";

const taskSchema = new Schema(
  {
    title: {
      type: String,
      requiered: [true, "el titulo es requerido"],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      requiered: [true, "la descripcion es requerida"],
      trim: true,
    },
  },
  { timestamps: true }
);
export default models.Task || model("Task", taskSchema);
