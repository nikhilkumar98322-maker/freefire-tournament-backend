const express = require("express");
const router = express.Router();
const {
  requestWithdraw,
  getAllWithdraws,
  approveWithdraw
} = require("../controllers/withdraw.controller");

// User withdraw request
router.post("/request", requestWithdraw);

// Admin get all withdraws
router.get("/all", getAllWithdraws);

// Admin approve withdraw
router.post("/approve", approveWithdraw);

module.exports = router;
