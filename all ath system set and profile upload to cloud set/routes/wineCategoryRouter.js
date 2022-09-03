const router = require('express').Router()
const wineCtrl = require('../controller/wineCtrl')


router.get('/get-wine', wineCtrl.getWine)

router.put('/edit-wine', wineCtrl.updateWine)

router.post('/add-wine', wineCtrl.saveWine)


router.delete('/delete-wine', wineCtrl.deleteWine)

module.exports = router