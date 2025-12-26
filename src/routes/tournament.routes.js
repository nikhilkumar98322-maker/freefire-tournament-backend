const express = require("express");
const router = express.Router();

const {
  createTournament,
  joinTournament,
  getAllTournaments
} = require("../controllers/tournament.controller");

// CREATE TOURNAMENT (admin)
router.post("/create", createTournament);

// GET ALL TOURNAMENTS (admin panel)
router.get("/all", getAllTournaments);

// JOIN TOURNAMENT (user)
router.post("/join", joinTournament);

module.exports = router;
