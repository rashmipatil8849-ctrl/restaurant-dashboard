const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    items: [{ type: String, required: true }],
    total: { type: Number, required: true },
    status: {
      type: String,
      enum: ["Pending", "Preparing", "Delivered"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
