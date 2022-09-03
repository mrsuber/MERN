const router = require('express').Router()
const authCtrl = require('../controller/authCtrl')
const {isResetTokenValid} = require('../middleware/authMiddlerware')


router.post('/register', authCtrl.register)

router.post('/login', authCtrl.login)

router.post('/logout', authCtrl.logout)

router.post('/refresh_token', authCtrl.generateAccessToken)

router.post('/verify-email', authCtrl.verifyEmail)
router.post('/resend-email', authCtrl.resendEmail)

router.post('/forgotpassword', authCtrl.forgotpassword)

router.post('/reset-password', isResetTokenValid, authCtrl.resetpassword)




module.exports = router
