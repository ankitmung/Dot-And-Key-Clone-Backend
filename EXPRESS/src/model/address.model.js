const mongoose= require("mongoose")
const addressSchema=new mongoose.Schema({
   userID:{type: mongoose.Schema.Types.ObjectId,ref:"users"},
   email:{type: String},
   firstname:{type:String},
   lastname:{type:String},
   address_one:{type:String},
   address_two:{type:String},
   city:{type:String},
   state:{type:String},
   pincode:{type:String},
   phonenum:{type:String},
   country:{type:String}
},
{
    versionKey:false,
    timestamps:true
})
module.exports=mongoose.model("addresses",addressSchema)
