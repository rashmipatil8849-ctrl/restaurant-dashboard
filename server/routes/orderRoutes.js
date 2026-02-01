const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// GET all orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().populate("items.menuItem");
    res.json(orders);
  } catch (error) {
    console.error("GET /orders error:", error);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
});

// CREATE order
router.post("/", async (req, res) => {
  try {
    const order = new Order(req.body);
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    console.error("POST /orders error:", error);
    res.status(500).json({ message: "Failed to create order" });
  }
});

module.exports = router;
