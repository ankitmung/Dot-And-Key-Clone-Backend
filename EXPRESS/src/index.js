const express=require('express')
const app=express()
const render=require("render")
app.use(express.json())
const userController=require('./controller/user.controller')
app.use("/user",userController)

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs"); // root directory for views views/
app.use(express.static("public"));





app.get("/edit",(req,res)=>{
return res.render("login")
})
const User= require("./model/user.model")
const {register,login}=require('./controller/auth.controller')
app.post("/register",register)
app.post("/login",login)
app.post("/users", async (req, res) => {
    try {
      const item = await User.create(req.body);
  
      return res.status(201).send(item);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  })


module.exports=app;