const { Blog, User } = require("../models");

exports.createBlog = async (req, res) => {
  try {
    const { userId, title, content } = req.body;
    const blog = await Blog.create({ userId, title, content });
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.findAll({ include: User });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
