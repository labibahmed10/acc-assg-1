const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");

// get a single random user
router.get("/random", userController.getRamdomUser);

// getting all data here
router.get("/all", userController.getAllData);

module.exports = router;
