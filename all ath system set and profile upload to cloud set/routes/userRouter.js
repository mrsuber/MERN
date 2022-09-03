const router = require('express').Router()
const {auth} = require('../middleware/authMiddlerware')
const userCtrl = require('../controller/userCtrl')

router.get('/search', auth, userCtrl.searchUser) //v7
router.get('/user/:id', auth, userCtrl.getUser) //v7
router.patch('/user', auth, userCtrl.updateUser) //v7


module.exports = router
