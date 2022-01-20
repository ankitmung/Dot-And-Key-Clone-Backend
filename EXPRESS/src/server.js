const app=require('./index')
const render=require("render")
const connect=require('./database/db')




    
    app.listen(3000, async()=>{
        try{
            await connect();
        console.log("listening to the port 3000")
        }catch(e){
            console.log(e)
        }
    })
    
