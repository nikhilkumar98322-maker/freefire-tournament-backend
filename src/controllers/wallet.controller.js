const Wallet = require("../models/Wallet");

exports.getWallet = async (req, res) => {
  try {
    const { userId } = req.params;

    const wallet = await Wallet.findOne({ userId });

    if (!wallet) {
      return res.json({ balance: 0 });
    }

    res.json({ balance: wallet.balance });
  } catch (err) {
    res.status(500).json({ message: "Wallet error" });
  }
};
