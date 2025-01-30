import React, {useState,createContext} from 'react'
export const Apprequest=createContext()
const Prov=({children})=> {
  const reducer=(state,action)=>{
    switch (action.type){
      case "BOOL":
        return {
          ...state,
            variable:action.payload.cool

        }
      default:
        return state
    }
  }

const [dev,setDEv]=useState({variable:false,dispatcher:(action)=>{
  setDEv(state=>reducer(state,action))
 }
 })
    return (
      <Apprequest.Provider value={{dev}}>
         {children}
      </Apprequest.Provider>
    )
  }

export default Prov