const express = require("express")
const router = express.Router();
const {registerUser, logOutUser, loginUser} = require('../controllers/authController')
router.post("/register",registerUser);
router.post("/login",loginUser);
router.post("/user",logOutUser);

