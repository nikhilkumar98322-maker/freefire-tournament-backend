const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

/**
 * ADMIN LOGIN
 */
exports.adminLogin = async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });
  if (!admin) return res.status(401).json({ message: "Admin not found" });

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) return res.status(401).json({ message: "Wrong password" });

  const token = jwt.sign(
    { id: admin._id, role: admin.role },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.json({ success: true, token });
};
