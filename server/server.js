const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

const connectDB = require("./db");
const menuRoutes = require("./routes/menuRoutes");

app.use("/api/menu", menuRoutes);


// Middleware
app.use(cors());
app.use(express.json());

connectDB();

// ✅ IMPORT ROUTES (ONLY ONCE)
const orderRoutes = require("./routes/orderRoutes");

// ✅ ROOT ROUTE (important for Render)
app.get("/", (req, res) => {
  res.send("🚀 Restaurant Dashboard Backend is running");
});

// ✅ MOUNT ROUTES (THIS WAS MISSING / WRONG)
app.use("/api/orders", orderRoutes);

// PORT (Render needs process.env.PORT)
const PORT = process.env.PORT || 5000;

// DB CONNECT
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
  });
