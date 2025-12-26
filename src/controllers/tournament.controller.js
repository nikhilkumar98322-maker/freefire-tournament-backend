const Tournament = require("../models/Tournament");

// CREATE
exports.createTournament = async (req, res) => {
  try {
    const tournament = await Tournament.create(req.body);
    res.json(tournament);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// JOIN (dummy for now)
exports.joinTournament = async (req, res) => {
  res.json({ message: "Joined (test)" });
};

// GET ALL
exports.getAllTournaments = async (req, res) => {
  try {
    const tournaments = await Tournament.find().sort({ createdAt: -1 });
    res.json(tournaments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
