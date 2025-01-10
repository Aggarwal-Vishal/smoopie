import mongoose from "mongoose";

const recipieSchema = new mongoose.Schema({
  recipieName: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  procedure: {
    type: String,
    required: true,
  },
});

export const recipie = mongoose.model("recipie", recipieSchema);
