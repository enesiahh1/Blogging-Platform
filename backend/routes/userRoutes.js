const express = require("express");
const { createUser, getAllUsers } = require("../controllers/userControllers");
const { validateRequest } = require("../middlewares/validateRequest");

const router = express.Router();

router.post("/", validateRequest, createUser);
router.get("/", getAllUsers);

module.exports = router;
