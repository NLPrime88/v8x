import mongoose from 'mongoose'
const UserData=new mongoose.Schema({

     name:{
        type:String,
        required:true,
     },
     password:{
        type:String,
        required:true
     },
     word:{
      type:[String],
      default:[]
     }




},
{
    timestamps:true,
})


export const Data=mongoose.model( "Guns",UserData,'Users')