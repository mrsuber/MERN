const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      unique: true,
      trim: true,
      maxlength: [40, 'Category name length must be at most 40 characters'],
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const Category = mongoose.model('categories', categorySchema);

module.exports = Category;
