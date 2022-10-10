const mongoose=require('mongoose')
const Schema=mongoose.Schema()

const UserSchema={
    First_Name:{
        type:String,
        required:true,
    },
    age:Number,
    Last_Name:{
        type:String,
        require:true,
    }

}
const user = mongoose.model("user", UserSchema)
module.exports=user