import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    img: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: String,
      required: true,
    },
      desc: {
      type: String,
      required: true,
    },
      category: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("post", postSchema);

