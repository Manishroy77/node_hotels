const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true,   
    },
    price:{
        type : Number,
        required : true
    },
    taste : {
        type : String,
        required : true,
        enum : ['sweet' , 'sour' , 'spicy']
    },
    is_drink:{
        type : Boolean,
        default : false
    },
    ingredients:{
        type : [String],
        required : true
    },
    num_sales : {
        type : Number,
        default : 0
    }
})

const menu = mongoose.model('menu' , menuSchema);
module.exports = menu;