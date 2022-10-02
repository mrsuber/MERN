const mongoose = require('mongoose');

// const orderDetailSchema = new mongoose.Schema(
  const orderDetailSchema =  mongoose.Schema(
  {
    _product:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'products',
      required:true
    },
    price:{
      type:Number,
    },
    quantity:{
      type:Number,
      required:true
    },
    amount:{
      type:Number
    }
  },
  {versionKey:false, _id:false},
  { timestamps: true }
);

const OrderDetails = mongoose.model('orderDetails', orderDetailSchema);
// module.exports = OrderDetails;
module.exports = {OrderDetails};
