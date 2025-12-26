const WithdrawRequest = require("../models/WithdrawRequest");
const Wallet = require("../models/Wallet");

exports.requestWithdraw = async (req, res) => {
  try {
    const { userId, amount } = req.body;

    const wallet = await Wallet.findOne({ userId });
    if (!wallet || wallet.winning < amount) {
      return res.status(400).json({ message: "Insufficient balance" });
    }

    const withdraw = await WithdrawRequest.create({
      userId,
      amount,
      status: "pending"
    });

    res.json({ message: "Withdraw request sent", withdraw });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllWithdraws = async (req, res) => {
  try {
    const withdraws = await WithdrawRequest.find().populate("userId");
    res.json(withdraws);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.approveWithdraw = async (req, res) => {
  try {
    const { withdrawId } = req.body;

    const withdraw = await WithdrawRequest.findById(withdrawId);
    if (!withdraw || withdraw.status !== "pending") {
      return res.status(400).json({ message: "Invalid request" });
    }

    const wallet = await Wallet.findOne({ userId: withdraw.userId });
    if (!wallet || wallet.winning < withdraw.amount) {
      return res.status(400).json({ message: "Insufficient balance" });
    }

    wallet.winning -= withdraw.amount;
    await wallet.save();

    withdraw.status = "approved";
    await withdraw.save();

    res.json({ message: "Withdraw approved" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
