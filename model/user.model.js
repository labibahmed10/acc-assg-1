const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");

// get a single random user
router.get("/random", userController.getRamdomUser);

// getting all data here
router.get("/all", userController.getAllUser);

// save a single user
router.post("/save", userController.saveAUser);

// update a single user
router.patch("/update/:id", userController.updateAUser);

// Bulk user update
router.patch("/bulk-update", userController.updateMultipleUsers);

// delete a single user
router.delete("/delete/:id", userController.deleteAUser);

module.exports = router;
