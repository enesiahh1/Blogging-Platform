exports.validateRequest = (req, res, next) => {
  if (!req.body) {
    return res.status(400).json({ error: "Invalid request body" });
  }
  next();
};
