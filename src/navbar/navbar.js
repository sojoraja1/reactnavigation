import React,{useState,useEffect} from "react";
import './navbar.css'
const Welcome = (props)=>{
    console.log(props.location.state)
const [mylogin, setmylogin] = useState(props.location.state)

useEffect(() => {
  
    if (typeof(mylogin)!='undefined') {
        props.name(mylogin)
        
    }
    
}, [mylogin])

    return(

        <div className="welcomeComponent">

        <h1 >Welcome to Baba Book </h1>
      
        </div>
    )
}

export default Welcome;