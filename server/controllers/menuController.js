const MenuItem = require("../models/MenuItem");

// GET all menu items
exports.getMenuItems = async (req, res) => {
  try {
    const items = await MenuItem.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch menu items" });
  }
};

// CREATE menu item
exports.createMenuItem = async (req, res) => {
  try {
    const item = await MenuItem.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({
      message: "Failed to create menu item",
      error: error.message,
    });
  }
};

// DELETE menu item
exports.deleteMenuItem = async (req, res) => {
  try {
    await MenuItem.findByIdAndDelete(req.params.id);
    res.json({ message: "Menu item deleted" });
  } catch (error) {
    res.status(400).json({ message: "Failed to delete menu item" });
  }
};
