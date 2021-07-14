import {IoMenuSharp} from "react-icons/io5";
import "./Navbar.css";
import {Menu} from "./Menu";

export const Navbar=()=>{
    return(
        <div>
            <div className="nav-container">
                <nav className="nav-class">
                    <div className="nav-start">
                       <ul className="nav-start-items">
                          <li className="nav-brand">   
                                Brand</li>
                            <li className="nav-items">
                                About</li>
                        </ul>
                    </div>
                    <div className="nav-end">    
                        <ul className="nav-end-items">
                            <li className="nav-items">Login</li>
                            <li className="nav-items" >Register</li>
                           <li className="nav-menu">
                            <Menu/></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}