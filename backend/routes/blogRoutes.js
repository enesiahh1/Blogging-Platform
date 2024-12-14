const express = require("express");
const { createBlog, getAllBlogs } = require("../controllers/blogController");
const { validateRequest } = require("../middlewares/validateRequest");

const router = express.Router();

router.post("/", validateRequest, createBlog);
router.get("/", getAllBlogs);

module.exports = router;
