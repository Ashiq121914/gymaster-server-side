const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");

router.post("/register", userController.registration);

router.get('/allusers',userController.alluser);
router.get('/allusers/:email',userController.adminUser);

module.exports = router;
