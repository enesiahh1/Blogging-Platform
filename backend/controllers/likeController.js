const { Like } = require("../models");

exports.likeBlog = async (req, res) => {
  try {
    const { userId, blogId } = req.body;
    const like = await Like.create({ userId, blogId });
    res.status(201).json(like);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
