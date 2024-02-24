import mongoose, { Schema } from "mongoose";

const notesSchema = new Schema(
  {
    title: String,
    description: String
  }, {
    timestamps: true,
  }
)

const Note = mongoose.models.Note || mongoose.model("Note", notesSchema);

export default Note;