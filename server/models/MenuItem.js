const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, index: true },
    description: String,
    category: {
      type: String,
      required: true,
      enum: ["Appetizer", "Main Course", "Dessert", "Beverage"],
    },
    price: { type: Number, required: true },
    ingredients: [String],
    isAvailable: { type: Boolean, default: true },
    preparationTime: Number,
    imageUrl: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Menu", menuSchema);
