const router = require('express').Router()
const stripe = require('stripe')(process.env.STRIPE_S_KEY)
const {Order} = require('../models/orderModel')
const {Cart} = require('../models/cartModel')
const {auth} = require('../middleware/authMiddlerware')

const populate = {
  path:'orderDetails',
  populate:{
    path:'_product',
    model:'products',
    populate:{
      path:'_category',
      model:'categories'
    }
  }
}

router.post('/checkout', auth, (req,res)=>{
  
  Cart.findOne({ _customerId: req.user._id}).exec(async(error,data)=>{
    if(error)return res.status(400).json({status:false, msg:error})
   
    const token = req.body.token
    const totalAmount = req.body.total;
    const charge = await stripe.charges.create({
      amount:totalAmount * 100,
      currency: 'usd',
      description:'Payment for Product',
      source: token.id
    })

    const orderData = {
      _customerId: data._customerId,
      orderDetails: data.cartDetails,
      paymentId: charge.id,
      orderDate: new Date(),
      totalAmount:totalAmount
    }

    const newOrder = Order(orderData)
    newOrder.save(async(error, data)=>{
      
      if(error)return res.status(400).json({status:false, msg:error})
      else{
        await Cart.deleteOne({_customerId:req.user._id})
        return res.status(200).json({status:true, msg:'Order has been created successfully!', data})
      }
    })
   
  })
})

router.get("/orderHistory", auth,(req, res)=>{
  Order.find({_customerId:req.user._id}).sort({orderDate:'desc'}).populate(populate).exec((error, data)=>{
    if(error)return res.status(400).json({status:false, msg:error})
    return res.status(200).json({status:true, msg:'Get customer order history successfully!', data})
  })
})

module.exports = router