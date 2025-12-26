const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const adminRoutes = require("./routes/admin.routes");
const tournamentRoutes = require("./routes/tournament.routes");
const walletRoutes = require("./routes/wallet.routes");
const withdrawRoutes = require("./routes/withdraw.routes");
const resultRoutes = require("./routes/result.routes");

const app = express();

app.use(cors());
app.use(express.json());

/**
 * ✅ ROOT TEST ROUTE (VERY IMPORTANT)
 */
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Free Fire Tournament Backend is LIVE 🚀",
  });
});

/**
 * API ROUTES
 */
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/tournament", tournamentRoutes);
app.use("/api/wallet", walletRoutes);
app.use("/api/withdraw", withdrawRoutes);
app.use("/api/result", resultRoutes);

module.exports = app;
