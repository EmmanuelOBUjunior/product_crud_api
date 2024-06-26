import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: [true, "Please enter product name"], default: 1 },
    quantity: { type: Number, required: true, default: 0 },
    image: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', ProductSchema)
export default Product
