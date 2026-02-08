const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();
router.post("/register", async (req, res) => {
  const pass = await bcrypt.hash(req.body.password, 10);
  await User.create({ email: req.body.email, password: pass });
  res.json({ msg: "Usuario creado" });
});
router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.json({ msg: "No existe" });
  const ok = await bcrypt.compare(req.body.password, user.password);
  if (!ok) return res.json({ msg: "Contraseña mal" });
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.json({ token });
});
module.exports = router;
