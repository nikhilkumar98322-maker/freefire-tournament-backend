const express = require("express");
const router = express.Router();
const adminAuth = require("../middlewares/admin.middleware");
const { banUser, unbanUser } = require("../controllers/user.controller");

router.post("/ban", adminAuth, banUser);
router.post("/unban", adminAuth, unbanUser);

module.exports = router;
