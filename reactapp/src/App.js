
import './index.css'
import React, { useEffect } from 'react'
import Users from './component/users'
import {useState,useContext} from 'react'
import axios from 'axios';
import { Apprequest } from './context';
import { useNavigate } from "react-router";
//import { Route,Routes } from 'react-router-dom'



 

    //Destructing
    //const obj={name:'crown',age:5}
    //const {name}=obj  more and more usefull
    //equal to
    //const name=obj.name

export default function App () {
const [pass,setPass]=useState('');
const [name,setName]=useState('');
const [resp,setRes]=useState([]);
const [header,setHeader]=useState(true)
const [load,setLoad]=useState(false)
const [fdata,setFdata]=useState('')
 const dev=useContext(Apprequest).dev.variable
 const dispatcher=useContext(Apprequest).dev.dispatcher

let navigate=useNavigate()
if(load){
if (header){
  if(resp.length!==0){
    if(name===resp[0].name && resp[0].password===pass){
     
   

      // document.getElementById("loginpage").style.display="none";
      // document.getElementById("userpage").style.display="block";
      
     alert("acces granted")
     dispatcher({type:'BOOL',payload:{cool:true}})
     navigate(`/login/${resp[0].name}`)
    }
    else{
      alert("username or password is incorrect")
    }
  }
  else{
    alert("user not found")
  }
}
else{
  if(resp.length===0){
    const buri=`/data`;
    console.log(resp.length)
    const data={name:name,password:pass}
    axios.post(buri,data).then(response=>{
    
      if(response.data){
        alert('User succesfully created.Please sign in')
        
      }
    }
  
  )
    
  }
  else{
   alert("User exist.please Sign in")
  }
}
setLoad(false)
}



  


const postd=()=>{

     if(name && pass){
  
      console.log(name)
      const buri=`data/${name}`;
        
        axios.get(buri).then(response=>{
          
        
          setRes(response.data)
        })
        
 .catch(error=>{
        console.log(error);
       }) 
.finally(()=>setLoad(true))

     
     
 } }
      // useEffect(()=>{

      //   const buri=`http://localhost:5000/data/${name}`;
        
      //   axios.get(buri).then(response=>{
      //     setRes(response.data)
      //   })
        
      // .catch(error=>{
      //   console.log(error);
      // }) 
      // },[name])

 return (

    <div>



      <div id="loginpage">
     
        <div className="lpi">
        {header?
          <h1>Sign in</h1>
          :<h1>Sign Up</h1>}
        
         
  <input value={name} onChange={(e)=>{
 setName(e.target.value);
  }}></input>
  <br/>
  <input value={pass} onChange={(e)=>{
   setPass(e.target.value); }}>
  </input>
  </div>

  <button className="lpb" onClick={()=>{
  /*const uri=`http://localhost:5000/data/${name}`;
  
 */

postd()
}
}
>send</button>



{header?
  
  <p>You don't have any accaunt</p>:
  <p>Already have accaunt</p>


}
  <button id="signup" onClick={()=>{document.getElementById("signin").style.display="block"
document.getElementById("signup").style.display="none"
setHeader(false)
}}
>sign up</button>
 
 <button id="signin" onClick={()=>{document.getElementById("signin").style.display="none"
document.getElementById("signup").style.display="block"
setHeader(true)

}}>sign in</button>
  </div>



  


   </div>
  )
}
//   <div id="userpage">

// <Users users={fdata}/>

//  </div>

