const mongoose= require("mongoose")
const cartSchema=new mongoose.Schema({
   userID:{type: mongoose.Schema.Types.ObjectId,
    ref:"users"},
   productID:{type: mongoose.Schema.Types.ObjectId,
    ref:"products"},
   size:{type:String},
   quantity:{type:Number,required:false.valueOf,default:1} 
},
{
    versionKey:false,
    timestamps:true
})
module.exports=mongoose.model("carts",cartSchema)