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
  description_en: {
    type: String,
    required: true,
  },
  description_ar: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  workers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }],
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
  sub_categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubCategory",
    },
  ],
});

const Store = mongoose.model("Store", schema);

export default Store;