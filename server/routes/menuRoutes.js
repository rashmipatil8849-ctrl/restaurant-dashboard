// const express = require("express");
// const router = express.Router();
// const MenuItem = require("../models/MenuItem");

// // GET all menu items
// router.get("/", async (req, res) => {
//   try {
//     const items = await MenuItem.find();
//     res.json(items);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to fetch menu items" });
//   }
// });

// // CREATE menu item
// router.post("/", async (req, res) => {
//   try {
//     const item = new MenuItem(req.body);
//     await item.save();
//     res.status(201).json(item);
//   } catch (error) {
//     res.status(400).json({ message: "Failed to create menu item" });
//   }
// });

// // DELETE menu item
// router.delete("/:id", async (req, res) => {
//   try {
//     await MenuItem.findByIdAndDelete(req.params.id);
//     res.json({ message: "Menu item deleted" });
//   } catch (error) {
//     res.status(400).json({ message: "Failed to delete menu item" });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const MenuItem = require("../models/MenuItem");

// ✅ GET all menu items
router.get("/", async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch menu items" });
  }
});

// ✅ POST create menu item
router.post("/", async (req, res) => {
  try {
    const item = new MenuItem(req.body);
    const savedItem = await item.save();
    res.status(201).json(savedItem);
  } catch (err) {
    console.error("CREATE MENU ERROR:", err.message);
    res.status(500).json({ message: "Failed to create menu item" });
  }
});


module.exports = router;
