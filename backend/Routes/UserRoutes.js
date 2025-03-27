const express = require('express');
const { getAllUsers, addUser } = require('../Controllers/userControllers');
const router = express.Router();

router.get("/", getAllUsers);
router.post("/", addUser);

module.exports = router;
