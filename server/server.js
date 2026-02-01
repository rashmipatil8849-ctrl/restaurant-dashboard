const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const orderRoutes = require("./routes/orderRoutes"); 

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/orders", orderRoutes);

// root route (important for Render)
app.get("/", (req, res) => {
  res.send("🚀 Restaurant Dashboard Backend is running");
});

// port
const PORT = process.env.PORT || 5000;

// mongo connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () =>
      console.log(`🚀 Server running on port ${PORT}`)
    );
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
  });
