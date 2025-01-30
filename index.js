import express from 'express'

import {MongoClient} from "mongodb"
import path from 'path'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import { Data } from './models/model1.js';
import  router from './router/router1.js'
import  cors from 'cors'
//import cors from "cors"
//import { Data } from './models/model1.js';
dotenv.config()
const app=express()

const __dirname=path.resolve()

app.listen(5000,()=>{
    console.log(`App listening on port:${5000}`)})
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        next();
      });
app.use(express.json())
app.use("/data",router)

if (process.env.NODE_ENV==='production'){
    app.use(express.static(path.join(__dirname,"/reactapp/build")))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,"reactapp","build","index.html"))
    })
}
  

mongoose.connect(process.env.URI,{
    "dbName":"Userdata"
}).then(()=>{
    console.log("yasincim Connected database succesfully ")

})
.catch(error=>{
    console.log(error);
})


app.get("/",(req,res)=>{
   return res.status(304).send("Lady hear me tonight");
})