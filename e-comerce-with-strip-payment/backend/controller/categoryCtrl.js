const Category = require('../models/categoryModel');
const ErrorResponse = require('../utils/errorResponse')
const categoryCtrl = {
  createCategory: async(req, res,next) => {
      const {name, description} = req.body
      if(!name ||!description){
        res.status(400).json({msg:"Invalid Request, missing parameters"})
        return next(new ErrorResponse("Invalid Request, missing parameters", 400))
      }
      try {
        const findCat = await Category.findOne({name})

        if(findCat){
          res.status(400).json({msg:"Category already exist"})
          return next(new ErrorResponse("Category already exist", 400))
        }

        const newCategory = await new Category({
          name,
          description
        })

        newCategory.save()
        res.status(200).json({
          newCategory:{
            ...newCategory._doc,
          },
          msg:"category created"
        })
      } catch (err) {
        return res.status(500).json({msg:err.message})
      }
  },
  getAllCategory: async(req,res) =>{
    try {
      const getCat = await Category.find({})
      res.status(200).json({
        status:true,
       data:getCat,
       msg:'get catgory sucess'
      })

    } catch (err) {
      return res.status(500).json({msg:err.message})
    }
  }
}

module.exports = categoryCtrl