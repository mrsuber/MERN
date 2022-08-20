const express=require('express');
const router = express.Router();
const { check } = require("express-validator")
const {isResetTokenValid} = require('../middleware/user')
const {register,login,forgotpassword,resetpassword,verifyEmail} = require('../controllers/auth')

router.route("/register").post(register)
router.route("/verify-email").post(verifyEmail)
// router.post("/verify-email",verifyEmail)

router.route("/login").post(login)

router.route("/forgotpassword").post(forgotpassword)

router.route("/reset-password").post(isResetTokenValid, resetpassword)


module.exports = router;
