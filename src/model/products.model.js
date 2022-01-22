const mongoose= require("mongoose")
const productSchema=new mongoose.Schema({
   title:{type:String},
   images:[{type:String}],
   size:[{type:String}],
   description:[{type:String}],
   perks:[{type:String}],
   price:{type:Number},
   discount:{type:Number},
   rating:{type:Number},
},
{
    versionKey:false,
    timestamps:true
})
module.exports=mongoose.model("products",productSchema)