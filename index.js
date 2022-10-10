const express = require('express')
const app = express()
const mongoose= require('mongoose')
const user = require('./Models/User');
app.use(express.json())
require('dotenv').config({ path:'./config/.env' })

mongoose.connect(process.env.connect_URL, ()=>console.log("database is connected"))

app.listen(process.env.port,()=> 
console.log("listening in the port 5000"))
//////adddd
app.post("/addUser",(req,res)=>{
    let addUser = new user(req.body)
    addUser.save((err,data)=>{
        if(err) throw err
        else res.send(data)
    })
})
////////delete
app.delete("/delete/:id",(req,res)=>{
    contact.findByIdAndDelete({_id:req.params.id},(err,data)=>{
       if(err) throw err
       else res.json({msg:"contact deleted"})
   })
})

/////put
app.put("/update/:id",(req,res)=>{
    user.findByIdAndUpdate({_id:req.params.id},{...req.body},(err,data)=>{
        if (err) throw err
        else res.json(data)
    })
})

/////get
app.get("/getuser",(req,res)=>{
    contact.find((err,data)=>{
       if(err) throw err
       else res.json(data)
   })
})