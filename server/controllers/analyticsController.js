const Order = require("../models/Order");

// Get top 5 selling menu items
exports.getTopSellers = async (req, res) => {
  try {
    const topSellers = await Order.aggregate([
      { $unwind: "$items" },
      {
        $group: {
          _id: "$items.menuItem",
          totalQty: { $sum: "$items.quantity" }
        }
      },
      {
        $lookup: {
          from: "menuitems",
          localField: "_id",
          foreignField: "_id",
          as: "details"
        }
      },
      { $sort: { totalQty: -1 } },
      { $limit: 5 }
    ]);

    res.json(topSellers);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch top sellers" });
  }
};
