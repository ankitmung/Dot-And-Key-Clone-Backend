const mongoose= require("mongoose")
const cartSchema=new mongoose.Schema({
   userID:{type: mongoose.Schema.Types.ObjectId,
    ref:"users"},
   productID:{type: mongoose.Schema.Types.ObjectId,
    ref:"products"},
   size:{type:String}  
},
{
    versionKey:false,
    timestamps:true
})
module.exports=mongoose.model("carts",cartSchema)