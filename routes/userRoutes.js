const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");

router.post("/register", userController.registration);
router.post("/login", userController.login);

router.get('/allusers',userController.alluser);

module.exports = router;
