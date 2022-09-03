const Users = require('../models/userModel')
const ErrorResponse = require('../utils/errorResponse')


const userCtrl = {
  searchUser: async (req,res) => {
    try {
      const users = await Users.find({username: {$regex:req.query.username}}).limit(10).select("fullname username avatar")
      res.json({users})
    } catch (err) {
      return res.status(500).json({msg:err.message})
    }
  },
  getUser: async (req,res) => {
    try {
      const user = Users.findById(req.params.id).select('-password')
      if(!user){
        res.status(400).json({msg:"User does not exists"})
        return next(new ErrorResponse("User does not exists", 400))
      }

      res.json({user})
    } catch (err) {
      return res.status(500).json({msg:err.message})
    }
  },
  updateUser: async (req,res) => {
    try {
      const {avatar, fullname, gender} = req.body

      if(!fullname){
        res.status(400).json({msg:"Please Add your full name"})
        return next(new ErrorResponse("Please Add your full name", 400))
      }
      await Users.findOneAndUpdate({_id:req.user._id},{
        avatar, fullname, gender
      })
      res.json({msg:"Update Success!"})
    } catch (err) {
      return res.status(500).json({msg:err.message})
    }
  },

}

module.exports = userCtrl
