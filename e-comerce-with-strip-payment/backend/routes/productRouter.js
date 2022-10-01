const router = require('express').Router()
const productCtrl = require('../controller/productCtrl')

router.post('/product', productCtrl.createProduct) 
router.post('/products', productCtrl.getAllProducts) 


module.exports = router
