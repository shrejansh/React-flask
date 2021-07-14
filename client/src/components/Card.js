import Image from "../Images/pexels-vincent.jpg";
import "./Card.css";
import {motion} from "framer-motion"

export const Card=()=>{
    return(
        <div className="card-out">
           <motion.div whileHover={{scale:1.02}} className="card-box">
                <div className="card-grid">
                    <div className="user-pic">
                        <img src={Image} alt="user-pic" 
                        className="avatar"/>
                    </div>
                    <div className="content">   
                        <p className="content-title">  
                            Lorem ipsum
                        </p>
                        <p className="content-para">
                            It is important to ensure that
                            the contrast ratio between the 
                            color of the placeholder text 
                            and the background of the input 
                            is high enough that people 
                            experiencing low vision conditions 
                            will be able to read it while 
                            also making sure there is enough 
                            of a difference between the 
                            placeholder text and input text 
                            color that users do not mistake 
                            the placeholder for inputed data.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}