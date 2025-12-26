const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth.middleware");
const admin = require("../middlewares/admin.middleware");
const { uploadResult } = require("../controllers/result.controller");

router.post("/upload", auth, admin, uploadResult);

module.exports = router;
