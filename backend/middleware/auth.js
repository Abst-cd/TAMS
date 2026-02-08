const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.json({ msg: "Sin permiso" });
  req.user = jwt.verify(token, process.env.JWT_SECRET);
  next();
};
