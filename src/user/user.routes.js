const router = require("express").Router();

const userController = require("./user.controller");

// Retrieve all users
router.get("/", userController.findAll);

module.exports = router;
