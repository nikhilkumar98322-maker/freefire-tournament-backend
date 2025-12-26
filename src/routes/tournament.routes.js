const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth.middleware");
const admin = require("../middlewares/admin.middleware");
const {
  createTournament,
  joinTournament
} = require("../controllers/tournament.controller");

// Admin
router.post("/create", auth, admin, createTournament);

// User
router.post("/join", auth, joinTournament);

module.exports = router;
