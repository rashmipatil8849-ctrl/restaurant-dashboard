const express = require("express");
const router = express.Router();
const Menu = require("../models/Menu");

// GET all menu items + SEARCH
router.get("/", async (req, res) => {
  try {
    const { search } = req.query;

    let query = {};

    // 🔍 Search by name (case-insensitive)
    if (search && search.trim() !== "") {
      query = {
        name: { $regex: search, $options: "i" },
      };
    }

    const menuItems = await Menu.find(query);
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch menu items" });
  }
});

// POST menu item
router.post("/", async (req, res) => {
  try {
    const item = new Menu(req.body);
    const savedItem = await item.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE menu item
router.delete("/:id", async (req, res) => {
  try {
    await Menu.findByIdAndDelete(req.params.id);
    res.json({ message: "Menu item deleted" });
  } catch (error) {
    res.status(500).json({ message: "Delete failed" });
  }
});

module.exports = router;
