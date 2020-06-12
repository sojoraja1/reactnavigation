import React,{useState} from 'react';
import {useHistory,useLocation, useParams, Redirect} from 'react-router-dom'
import './login.css';
const Login = (props)=>{

const [loginSuccess, setloginSuccess] = useState(false)
const history = useHistory()

const formsubmission =(e)=>{
console.log("submitted")

const a = document.getElementById("username").value;
const b = document.getElementById("password").value;
if (a=='sundar' && b=='@sundar@') 
{
    setloginSuccess(true)
} 
    e.preventDefault()


} 

    return(
       loginSuccess?<Redirect to={{

           pathname:'/',
           state:{loginSuccess:loginSuccess}
       }} />:( <div className="loginPage">
        
       <div className="container custom">
   <div className="d-flex justify-content-center h-100">
   <p style={{color:'white'}}>{loginSuccess.toString()}</p>
       <div className="card">
           <div className="card-header">
               <h3 >Sign In </h3>
               <div className="d-flex justify-content-end social_icon">
                   <span><i className="fab fa-facebook-square"></i></span>
                   <span><i className="fab fa-google-plus-square"></i></span>
                   <span><i className="fab fa-twitter-square"></i></span>
               </div>
           </div>
           <div className="card-body">
               <form onSubmit={(event)=>formsubmission(event)}>
                   <div className="input-group form-group">
                       <div className="input-group-prepend">
                           <span className="input-group-text"><i className="fas fa-user"></i></span>
                       </div>
                       <input id="username" type="text" className="form-control" placeholder="username"/>
                       
                   </div>
                   <div className="input-group form-group">
                       <div className="input-group-prepend">
                           <span className="input-group-text"><i className="fas fa-key"></i></span>
                       </div>
                       <input id="password" type="password" className="form-control" placeholder="password"/>
                   </div>
               
                   <div className="form-group">
                       <input type="submit" value="Login" className="btn float-right login_btn"/>
                   </div>
               </form>
           </div>
           <div className="card-footer">
               <div className="d-flex justify-content-center links">
                   Don't have an account?<a href="#">Sign Up</a>
               </div>
               <div className="d-flex justify-content-center">
                   <a href="#">Forgot your password?</a>
               </div>
           </div>
       </div>
   </div>
</div>

       

       </div>)
    )
}

export default Login;