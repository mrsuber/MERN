const router = require('express').Router()
const categoryCtrl = require('../controller/categoryCtrl')

router.post('/category', categoryCtrl.createCategory) 
router.get('/categories', categoryCtrl.getAllCategory) 


module.exports = router
