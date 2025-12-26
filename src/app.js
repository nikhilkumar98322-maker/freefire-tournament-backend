const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/tournament", require("./routes/tournament.routes"));
app.use("/api/admin", require("./routes/admin.routes"));
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/wallet", require("./routes/wallet.routes"));
app.use("/api/withdraw", require("./routes/withdraw.routes"));
app.use("/api/result", require("./routes/result.routes"));

module.exports = app;
