import React, { useContext } from "react"
import {useState,useEffect} from "react";
import '../index.css'
import { Apprequest } from "../context";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
 function User(prop){ 
 const [word,setWord]=useState('')
const [load,setLoad]=useState(false)
const [resd,setResd]=useState([])
const [event,setEvent]=useState(false) 
const [arr,setArr]=useState(prop.words)
const [myev,setM]=useState(true)
const [fold,setF]=useState([])
console.log(arr,"hastosaveveryone")
console.log(prop.id)
const buri=`/data/${prop.id}`
  const m=async()=>{
 let f= await axios.put(buri,{word:arr})

 setArr(f.data.word)
}
if(load){
 
 
m()
setLoad(false)
}


 
  
 

const handled=()=>{

setArr(prev=>[...prev,word])
setLoad(true)
}

const clickevent=(e)=>{setEvent(!event);}


    return(
 

        <div>
  {(!load)? arr.map((item,i)=><h1 key={i}>{item}</h1>)
    :<h1>Pending...</h1>}

    <h1 className="hed" onClick={clickevent}>{prop.name}</h1>
        {event?
         <p>{prop.password}</p>
        :null
  }

<form action="">
  <textarea value={word} onChange={(e)=>{setWord(e.target.value)}} id='peri'></textarea>


</form>
<button id='userf' onClick={()=>handled()}>Add coment</button>

        </div>
        
        )
  }


 
export default function Users(){
     //console.log(props,"kwd")
    const navigate= useNavigate()
    const[loader,setLoder]=useState(false)

const dev=useContext(Apprequest).dev.variable
    const [b,setB]=useState({})
  
   const params=useParams()
  
   useEffect(()=>{
    const buri=`/data/user/${params.id}`;
          
    axios.get(buri).then(response=>{
      
  
      setB(response.data)

    })
    
  .catch(error=>{
    console.log(error);
   }) 
   .finally(()=>{
    setLoder(true)
   })
  
  
  },[params.id])
  


if(dev){
if(loader){
    return(
      <div>
        
    {/* {b.word.map((item)=>{
      return(
        <h1>{item}</h1>
      )
    })}   */}
 {/* {b.word[0].type} */}

          <User id={b._id} name={ b.name} password= {b.password} words={b.word}/> 
        
        
        
   
<button id="userb" onClick={()=>{
navigate(-1)


}}> 
  
  
  Log out
  
  </button>


      </div>
   


    );
  }}
  else{
   return(
<h1 id="herf">This user is private </h1>
  
   )
  }
}
