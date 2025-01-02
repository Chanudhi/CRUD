const express = require("express");
const router = express.Router();
//Insert model
const User = require("../Model/usermodel");
//insert user controller
const UserController = require("../Controllers/usercontrol");

router.get("/",UserController.getAllUsers);

router.post("/",UserController.addUsers);

router.get("/:id",UserController.getById);

//export
module.exports = router;
