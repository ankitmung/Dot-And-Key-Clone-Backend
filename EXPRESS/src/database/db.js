const mongoose=require('mongoose')
const { mountpath } = require('..')

const connect= ()=>{
    return mongoose.connect('mongodb+srv://lee:rishav12345@cluster0.qijlu.mongodb.net/user')
}

module.exports=connect;
