const Cart = require('../models/cartModel')
const Product = require('../models/productModel')
const ErrorResponse = require('../utils/errorResponse')

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

const cartCtrl = {
  addToCart: async(req, res,next) => {
      const {name, description} = req.body
      try {
        
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
            "cartDatails._product": req.body._productId


          },{
            $inc:{
              "cartDetails.$.quantity":req.body.quantity,
              "cartDetails.$.amount": product.price * req.body.quantity
            }
          },{new: true}
          ).populate(populate)
          .exec()
          .then((data, error)=>{
            if(error)return res.json({status:false, error})
            if(data){
              return res.status(200).json({status:true, msg:"Add Item to cart successfully!",data})
            }else{
              //if item does'nt exist in cart, push item to cart
              Cart.findOneAndUpdate({
                _customerId: req.customerId
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
                if(error)return res.json({status:false, error})
                return res.status(200).json({status:true,msg:"Add item to cart successfully!"})
              })
            }
          })
      }else{
        //if cucstomer cart does not exist, add new customer cart
        const newCart = new Cart({
          _customerId: req.customerId,
          cartDetails
        })
        newCart.save((error, data)=>{
          if(error)return res.json({status:false, error})
          return res.status(200).json({status:true, msg:'Add item to cart successfully!!!', data})
        })
      }
      
      
      } catch (err) {
        return res.status(500).json({msg:err.message})
      }
  },
  getAllCart:(req,res) =>{
    
     Cart.findOne({_customerId: req.user._id})
     .populate(populate)
     .exec((error, data)=>{
      if(error)return res.json({status:false, error})
      return res
      .status(200)
      .json({
        status:true, 
        msg:'Get customer cart successfully!', 
        data})
     })
   
  }
}

module.exports = cartCtrl