const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

/* ---------------- CORS ---------------- */
app.use(cors({
  origin: "https://restaurantdashboardr.netlify.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

/* ---------------- MIDDLEWARE ---------------- */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ---------------- ROUTES ---------------- */
const menuRoutes = require("./routes/menuRoutes");
const orderRoutes = require("./routes/orderRoutes");

app.use("/api/menu", menuRoutes);
app.use("/api/orders", orderRoutes);

/* ---------------- ROOT TEST ROUTE ---------------- */
app.get("/", (req, res) => {
  res.send("🚀 Restaurant Dashboard Backend is running");
});

/* ---------------- START SERVER ---------------- */
const PORT = process.env.PORT || 5000;

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
