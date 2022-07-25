const mongoose = require("mongoose")

const productSchema =mongoose.Schema({
    userId:{
            type:mongoose.Types.ObjectId,
            required:true,
            ref:"user"
    },
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
},{timestamps:true})
module.exports = mongoose.model("OLXproduct" , productSchema)