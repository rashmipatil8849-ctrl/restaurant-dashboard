const Order = require("../models/Order");

// GET all orders
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};

// CREATE order
exports.createOrder = async (req, res) => {
  try {
    const { items, total } = req.body;

    const order = new Order({ items, total });
    await order.save();

    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ message: "Failed to create order" });
  }
};

// UPDATE status
exports.updateStatus = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(order);
  } catch (err) {
    res.status(400).json({ message: "Status update failed" });
  }
};
