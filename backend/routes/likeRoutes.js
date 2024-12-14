const express = require("express");
const { likeBlog } = require("../controllers/likeController");
const { validateRequest } = require("../middlewares/validateRequest");

const router = express.Router();

router.post("/", validateRequest, likeBlog);

module.exports = router;
