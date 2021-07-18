import Image from "../Images/pexels-vincent.jpg";
import "./Card.css";
import {motion} from "framer-motion"

export const Card=(props)=>{
    return(
        <div className="card-out">
           <motion.div whileHover={{scale:1.02}} className="card-box">
                <div className="card-grid">
                    <div className="user-pic">
                        <img src={props.image} alt="user-pic" 
                        className="avatar"/>
                    </div>
                    <div className="content">   
                        <p className="content-title">  
                            {props.title}
                        </p>
                        <p className="content-para">
                       {props.content} </p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}