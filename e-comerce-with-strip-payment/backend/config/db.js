const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {});

    console.log('Romis MongoDB Connection Success 👍');
  } catch (error) {
    console.log('Romis MongoDB Connection Failed 💥');
    process.exit(1);
  }
};

module.exports = connectDB;
