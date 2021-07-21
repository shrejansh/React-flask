import {IoMenuSharp} from "react-icons/io5";
import "./Navbar.css";
import {Menu} from "./Menu";
import {About} from "./About";
import {Login} from "./Login";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export const Navbar=()=>{
    return(
        <Router>
        <div>
            <div className="nav-container">
                <nav className="nav-class">
                    <div className="nav-start">
                       <ul className="nav-start-items">

                            <li className="nav-brand">   
                                    Brand</li>
                       
                            <li className="nav-items">
                            <Link to="/about">About</Link>
                                </li>

                        </ul>
                    </div>
                    <div className="nav-end">    
                        <ul className="nav-end-items">
                            <li className="nav-items">
                            <Link to="/login">Login</Link>
                                </li>
                            <li className="nav-items" >Register</li>
                           <li className="nav-menu">
                            <Menu/></li>
                        </ul>
                    </div>
                </nav>
            </div>

            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </div>
        </Router>
    )
}