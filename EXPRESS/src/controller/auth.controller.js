require("dotenv").config()
const jwt =require("jsonwebtoken")
const User=require('../model/user.model')

const newToken=(user)=>{
    return jwt.sign({user:user},process.env.JWT_SECRET_KEY,{
        expiresIn:60*60*3,
    })
}
const register=async(req,res)=>{

   try{
        //1) Check if the user is the register user or not

    let user=await User.findOne({email: req.body.email}).exec()
    if(user){
        res.status(400)
        .send({status:"failed",message:"user with the email already exist"})
    }
    //2)if not then create the user
    //3)we will hash the password for the user
 user=await User.create(req.body);
 
 //4) we will create the token for the user
 const token =newToken(user)
 
 //5) return the token and the user details
 return res.status(201).send({user,token});
   }
   catch(e){
       return res.status(500).send({message: e.message})
   }

}

const login=async (req,res)=>{
    try{
        //1)we will find the user with the email
        let user=await User.findOne({email:req.body.email});
        //2)if user is not found then throw an error 400 bad request

        if(!user)
        return res.status(400)
        .json({status:"failed",message:"either the email or password is incorrect"})

        //3) if user found then try to match the password provided with the password in the model
        const match=user.checkPassword(req.body.password)

        //4) if not match then throw an error 400 bad request
        if(!match)
        return res.status(400)
        .json({status:"failed",message:"either the email or password is incorrect"})
         
        //5)return the token and the user details
        const token =newToken(user)
        return res.status(201).json({status:"success",user,token})

    }catch(e){
        return res.status(500).json({message: e.message})
    }
}

module.exports={register,login,newToken}