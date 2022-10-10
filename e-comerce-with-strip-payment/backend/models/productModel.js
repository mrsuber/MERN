const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
      unique: true
    },
    description: {
      type: String,
    },
    _category:{
      type: mongoose.Types.ObjectId,
      ref:'categories'
    },
    image:{
      type:String
    },
    price:{
      type:Number,
      default:0
    }
  },
  { timestamps: true }
);

const Products = mongoose.model('products', productSchema);

module.exports = Products;
