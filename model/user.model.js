const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");

// getting all data here
router.get("/all", userController.getAllData);

module.exports = router;
