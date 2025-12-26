const express = require("express");
const router = express.Router();
const { getWallet } = require("../controllers/wallet.controller");

// User wallet
router.get("/:userId", getWallet);

module.exports = router;
