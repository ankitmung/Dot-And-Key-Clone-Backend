const express=require('express')
const app=express()
const render=require("render")
app.use(express.static("public"));
app.use(express.json())
const userController=require('./controller/user.controller')
const Product=require("./model/products.model")
app.use("/user",userController)
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs"); // root directory for views views/



app.use("/products",(req,res)=>{
  return res.render("products")
})
app.get("/data",async(req,res)=>{
  try{
    const data=await Product.find({}).lean().exec();
    console.log(data)
    return res.json({res:data})
  }catch(err){
    return res.status(400).json(err.message)
  }
})



app.get("/loginpage",(req,res)=>{
return res.render("login")
})

app.get("/signuppage",(req,res)=>{
return res.render("signUp")
})

app.get("/index",(req,res)=>{
return res.render("index")
})
const User= require("./model/user.model")
const {register,login}=require('./controller/auth.controller');
const { find } = require('./model/user.model');
app.post("/register",register)
app.post("/login",login)



module.exports=app;