const Tournament = require("../models/Tournament");
const Join = require("../models/Join");
const Wallet = require("../models/Wallet");

exports.createTournament = async (req, res) => {
  try {
    const tournament = await Tournament.create(req.body);
    res.json(tournament);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.joinTournament = async (req, res) => {
  try {
    const userId = req.user.id;
    const { tournamentId } = req.body;

    // Prevent double join
    const alreadyJoined = await Join.findOne({ userId, tournamentId });
    if (alreadyJoined) {
      return res.status(400).json({ message: "Already joined tournament" });
    }

    const tournament = await Tournament.findById(tournamentId);
    if (!tournament) {
      return res.status(404).json({ message: "Tournament not found" });
    }

    const wallet = await Wallet.findOne({ userId });
    if (!wallet || wallet.deposit < tournament.entryFee) {
      return res.status(400).json({ message: "Insufficient balance" });
    }

    wallet.deposit -= tournament.entryFee;
    await wallet.save();

    await Join.create({ userId, tournamentId });

    res.json({ message: "Tournament joined successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
