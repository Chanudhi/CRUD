const express = require("express");
const router = express.Router();
//Insert model
const User = require("../Model/usermodel");
//insert user controller
const UserController = require("../Controllers/usercontrol");

router.get("/",UserController.getAllUsers);

router.post("/",UserController.addUsers);
//export
module.exports = router;
