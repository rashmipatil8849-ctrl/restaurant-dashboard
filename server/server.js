

const express = require("express");
const cors = require("cors");
require("dotenv").config(); 
const connectDB = require("./db");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/orders", require("./routes/orderRoutes"));

connectDB();

app.use("/api/menu", require("./routes/menuRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

