import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name_en: {
    type: String,
    required: true,
    unique: true,
  },
  name_ar: {
    type: String,
    required: true,
    unique: true,
  },
});

const Category = mongoose.model("Category", schema);

export default Category;