const express = require("express");
const router = express.Router();

const { getTopSellers } = require("../controllers/analyticsController");

router.get("/top-sellers", getTopSellers);

module.exports = router;
