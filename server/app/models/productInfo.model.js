import mongoose from "mongoose";

const schema = new mongoose.Schema({
  description_en: {
    type: String,
    required: true,
  },
  description_ar: {
    type: String,
    required: true,
  },
  additional_info: [
    {
      name_ar: String,
      name_en: String,
      info_ar: String,
      info_en: String,
    },
  ],
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
});

const ProductInfo = mongoose.model("ProductInfo", schema);

export default ProductInfo;
