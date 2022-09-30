const router = require('express').Router()
const productCtrl = require('../controller/productCtrl')

router.post('/product', productCtrl.createProduct) 
router.get('/product', productCtrl.getAllProducts) 


module.exports = router
