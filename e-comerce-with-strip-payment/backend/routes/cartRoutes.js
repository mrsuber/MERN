const router = require('express').Router()
const {auth} = require('../middleware/authMiddlerware')
const cartCtrl = require('../controller/cartCtrl')
const {Cart} = require('../models/cartModel')
const Product = require('../models/productModel')

// router.post('/carts/addToCart',auth, cartCtrl.addToCart) 
// router.get('/carts',auth, cartCtrl.getAllCart) 


// module.exports = router
const populate = {
  path:'cartDetails',
  populate:{
    path:'_product',
    model:'products',
    populate:{
      path:'_category',
      model:'categories'
    }
  }
}

router.post("/addToCart", auth, async (req, res)=>{
  //find if customer cart already exists
  const customerCart = await Cart.findOne({_customerId: req.user._id})
  const product = await Product.findById(req.body._productId)
  const cartDetails = {
    _product:req.body._productId,
    quantity: req.body.quantity,
    price: product.price,
    amount: product.price * req.body.quantity,
  }

   // if customer cart already exist,
   if(customerCart){
    //find and update quantity if item exist already in cart
    Cart.findOneAndUpdate({
      _customerId:req.user._id,
      "cartDetails._product": req.body._productId


    },{
      $inc:{
        "cartDetails.$.quantity":req.body.quantity,
        "cartDetails.$.amount": product.price * req.body.quantity
      }
    },{new: true}
    ).populate(populate)
    .exec()
    .then((data, error)=>{
      if(error)return res.status(400).json({status:false, msg:error})
      if(data){
        return res.status(200).json({status:true, msg:"Add Item to cart successfully!",data})
      }else{
        //if item does'nt exist in cart, push item to cart
        Cart.findOneAndUpdate({
          _customerId: req.user._id
        },
        {
          $push:{
            cartDetails:{
              ...cartDetails
            }
          }
        },
        {new: true}
        ).populate(populate)
        .exec()
        .then((data, error) =>{
          if(error)return res.status(400).json({status:false, msg:error})
          return res.status(200).json({status:true, msg:"Add item to cart successfully!",data})
        })
      }
    })
}else{
  //if cucstomer cart does not exist, add new customer cart
  const newCart = new Cart({
    _customerId: req.user._id,
    cartDetails
  })
  newCart.save((error, data)=>{
    if(error)return res.status(400).json({status:false, msg:error})
    return res.status(200).json({status:true, msg:'Add item to cart successfully!!!', data})
  })
}
})

router.put("/updateCartItem", auth, async(req,res)=>{
  const _productId = req.body._productId
  const quantity = req.body.quantity;
  const product = await Product.findById(_productId);
  Cart.findOneAndUpdate({
    _customerId: req.user._id,
    "cartDetails._product":_productId,
  },{
    $set:{
      "cartDetails.$.quantity":quantity,
      "cartDetails.$amount":quantity * product.price
    }
  },{new: true}).populate(populate).exec((error, data)=>{
    if(error)return res.status(400).json({status:false, msg:error})
    return res.status(200).json({status:true, msg:'Item in cart has been updated successfully!!!', data})
  })
})

router.put("/removeCartItem/:id", auth, async(req,res)=>{
  const _productId = req.params.id
 
  Cart.findOneAndUpdate({
    _customerId: req.user._id,
   
  },{
    $pull:{
      cartDetails: {_product:_productId}
    }
  },{new: true}).populate(populate).exec((error, data)=>{
    if(error)return res.status(400).json({status:false, msg:error})
    return res.status(200).json({status:true, msg:'Item in cart has been removed successfully!!!', data})
  })
})

router.get("/cart", auth, async(req,res)=>{
  await Cart.findOne({_customerId: req.user._id})
     .populate(populate)
     .exec((error, data)=>{
      if(error)return res.status(400).json({status:false, msg:error})
      return res.status(200).json({status:true, msg:'Get customer cart successfully!', data})
     })
   
})

module.exports = router;