const mongoose= require("mongoose");

const wineSchema = new mongoose.Schema({
    text:{
        type: String,
        require: true
        
    }
})

module.exports = mongoose.model("Wine", wineSchema);