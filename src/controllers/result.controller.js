const MatchResult = require("../models/MatchResult");
const Tournament = require("../models/Tournament");
const Wallet = require("../models/Wallet");

exports.uploadResult = async (req, res) => {
  try {
    const { tournamentId, userId, kills, rank } = req.body;

    const tournament = await Tournament.findById(tournamentId);
    if (!tournament) {
      return res.status(404).json({ message: "Tournament not found" });
    }

    // Kill points
    const killPoints = kills * tournament.perKillPoint;

    // Rank reward
    let winningAmount = 0;
    if (rank === 1) winningAmount = tournament.prizePool * 0.5;
    else if (rank === 2) winningAmount = tournament.prizePool * 0.3;
    else if (rank === 3) winningAmount = tournament.prizePool * 0.2;

    // Save match result
    await MatchResult.create({
      tournamentId,
      userId,
      kills,
      rank,
      killPoints,
      winningAmount
    });

    // Update wallet
    const wallet = await Wallet.findOne({ userId });
    if (wallet) {
      wallet.winning += winningAmount;
      await wallet.save();
    }

    res.json({ message: "Result uploaded successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
