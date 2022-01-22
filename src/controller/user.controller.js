const express=require('express')
const router=express.Router()
const user=require('../model/user.model')

router.post("", async (req,res)=>{
  try{
    const users=new user(req.body)
    const createUser=await users.save()  
    
    res.status(201).send(createUser)
    
  }catch(e){
      res.status(400).send(e)
  }
})

router.get("" ,async (req,res)=>{
    try{
      const users=user.find().lean().exec()
      res.status(201).send(users)
    }catch(e){
        res.status(400).send(e)
    }
  })

  module.exports=router;