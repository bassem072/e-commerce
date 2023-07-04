import mongoose from "mongoose";

var SchemaTypes = mongoose.Schema.Types;
const schema = mongoose.Schema({
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
  price: {
    type: Number,
    required: true,
  },
  discount: {
    value: Number,
    expired_date: Date,
  },
  rate: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      rate: {
        type: Number,
      },
    },
  ],
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Brand",
  },
  sub_category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SubCategory",
  },
});

const Product = mongoose.model("Product", schema);

export default Product;
