const Products = require('../models/productModel');
const ErrorResponse = require('../utils/errorResponse')
const Category = require('../models/categoryModel')


const productCtrl = {
  createProduct: async(req, res,next) => {
      const {name, description,category,image,price} = req.body
      if(!name ||!description || !category || !image || !price){
        res.status(400).json({msg:"Invalid Request, missing parameters"})
        return next(new ErrorResponse("Invalid Request, missing parameters", 400))
      }
      try {
        const findCat = await Category.findOne({name:category})

        if(!findCat){
          res.status(400).json({msg:"Category does not exist"})
          return next(new ErrorResponse("Category does not exist", 400))
        }

        const newProduct = await new Products({
          name,
          description,
          _category:findCat._id,
          image,
          price
        })

        newProduct.save()
        res.status(200).json({
          status:true,
          data:newProduct,
          msg:"product created"
        })
      } catch (err) {
        return res.status(500).json({msg:err.message})
      }
  },
  getAllProducts: async(req,res) =>{
    try {
      const getProducts = await Products.find().populate("_category").exec()
      res.status(200).json({
        status:true,
       data:getProducts,
       msg:'get products success'
      })

    } catch (err) {
      return res.status(500).json({msg:err.message})
    }
  }
}

module.exports = productCtrl