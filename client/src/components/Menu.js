import {motion } from "framer-motion"
import React, { useState } from 'react'
import {IoMenuSharp} from "react-icons/io5"

export const Menu=()=>{

    const [animate,setAnimate]=useState(false);
    const boxVariant={
               
                visible:{
                    x:animate?0:210,
                   
                    
                }};

    const listVariant={
       
        visible:{
            x:animate?0:210,
            opacity:animate?1:0,
            transition:{
                delay:0.5,
                staggerChildren:0.2
                
            }
        }
    };
    
    return(
        <div>
            <IoMenuSharp className="absolute top-6 right-8" onClick={()=>setAnimate(!animate)}/>
            <motion.ul className="w-16 h-32 m-4 bg-red-500 inline-block"
            
            variants={boxVariant}
            initial="hidden"
            animate="visible">
                {[1,2,3].map(item=>{
                    return<motion.li 
                    className="w-10 h-5 my-2 ml-1 m bg-gray-200"
                    variants={listVariant}
                    initial="hidden"
                    animate="visible"> {item} </motion.li>
                })}
                
            </motion.ul>

        </div>
    )
}