const mongoose = require('mongoose');
const orderDetailSchema = require('./orderModel').OrderDetails.schema;
// const cartSchema = new mongoose.Schema(
  const cartSchema =  mongoose.Schema(
  {
    _customerId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'user',
      required:true
    },
    cartDetails:[{
      type:orderDetailSchema
    }]
  },
  // { timestamps: true }
);

const Cart = mongoose.model('carts', cartSchema);

// module.exports = Cart;
module.exports = {Cart}
