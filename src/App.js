import React, { useEffect,useState ,useRef} from 'react'
import {BrowserRouter as Router,Link,withRouter,Route,Switch,useHistory,useParams,useRouteMatch} from 'react-router-dom'
import './App.css'
import Welcome from './navbar/navbar'
import Login from './components/login'
const App =()=>{
  
  const [login, setlogin] = useState(false)

  const showLoginOrLogout = (my)=>{
    if (typeof(my) != "undefined") {
      setlogin(false)
    }
    setlogin(my)

  } 

  return(

    <div className="mainApp">
{ <Router>
        <div className="navigationBar">
      <nav className="navbar bg-dark navbar-expand-sm bg-light ">
        <ul className="navbar-nav">
        <li className="nav-item">
            <Link  to="/" className="nav-link" href="#">
              Home
            </Link>
          </li>
         
          <li className="nav-item">
           {login? <Link  to="/logout" className="nav-link" href="#">
              Logout
            </Link>: <Link  to="/login?name=sundar" className="nav-link" href="#">
              Login
            </Link>}
          </li>
          <li className="nav-item">
            <Link  to="/about" className="nav-link" href="#">
              About
            </Link>
          </li>
         
        </ul>
      </nav>
    </div>

    <Switch>
    <Route exact path="/" render={(props)=>{

        return(<Welcome name={showLoginOrLogout} {...props}/>)
    }}/>
   
    <Route path="/login" component={(props)=><Login  {...props}/>} />
    <Route path='/logout' render={(props)=>{

      setlogin(false)
      console.log(props.history)
      return props.history.push('/')


    }} />
    <Route  exact path ="/about" render={()=>{

return(<h1>About</h1>)


}}/>
    <Route path="*" render={()=>{

        return(<h1>Error</h1>)
    }}/>


    </Switch>


    </Router>
 }

    </div>
  )
}

export default App;