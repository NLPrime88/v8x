import express, { request } from "express"
import {Data} from "../models/model1.js"
const router=express.Router();
//create data
router.post("/",async(req,res)=>{
    try {
     if(req.body.name||
        req.body.password){
     const CUdata={
        name:req.body.name,
        password:req.body.password,
       
     }
     
     //console.log(CUdata)
    const cdata=await Data.create(CUdata)
   // console.log(cdata)
     res.status(234).send(cdata)
    
    
    }
    else{

res.status(400).send([])
       // console.log("Please fulfill all of them");
     


    }
    } catch (error) {
        //console.log(error)
        res.status(500).send(error)
    }
})
router.get("/:name",async(req,res)=>{
    try {
     const {name}=req.params
    const fusdata=await Data.find({name:name})
   //console.log(fusdata,'getdauyvaoi veuilabwevluiav')
     res.status(234).json(fusdata)
    
    } catch (error) {
       // console.log(error)
        res.status(500).send(error)
    }
})
router.put("/:id",async(req,res)=>{
    try {
    if(req.body.word ){
   
  
   const {id}=req.params
  // console.log(req.body)
   const result=await Data.findByIdAndUpdate(id,req.body)
   const fusdata=await Data.findOne({_id:id})
  // console.log(fusdata,'put')
   res.status(200).json(fusdata)
  }
    } catch (error) {
        //console.log(error)
        res.status(500).send(error)
    }
})

router.get("/user/:name",async(req,res)=>{
    try {
     const {name}=req.params
    const fusdata=await Data.findOne({name:name})
   //console.log(fusdata,'vkadinwef')
     res.status(234).json(fusdata)
    
    } catch (error) {
       // console.log(error)
        res.status(500).send(error)
    }
})
export default router;