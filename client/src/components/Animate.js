import React, { useState } from 'react'
 
import {motion} from "framer-motion"

export const Animate=()=>{

    const [animate,setAnimate] = useState(false)
    const boxVariant={
        hidden:{
            x:"-100vw"
        },
        visible:{
            x:0,
            transition:{
                when:"beforeChildren",
                staggerChildren:0.2
            }
            
        }
    }
    const listVariant={
        hidden:{
            x:-10,
            opacity:0
        },
        visible:{
            x:0,
            opacity:1,
            transition:{
                delay:0.5,
                staggerChildren:0.2
                
            }
        }
    }

    return(
        <div >
            <motion.div className="w-16 h-16 m-4 bg-red-500"
            animate={{
                x:animate? "50vh":"0vh",
                opacity:animate?1:0.5,
                rotate:animate?360:0
            }}
            initial={{
                opacity:0.5
            }}
            transition={{
                type:"spring",
                stiffness:100
            }}
            onClick={()=>setAnimate(!animate)}/>

            <motion.div className="w-16 h-16 m-4 bg-red-500"
            drag
            dragConstraints={{
                right:20,
                left:-10,
                top:10,
                bottom:10
            }}
            whileHover={{scale:1.2}}
            whileTap={{scale:0.9}}/>

            <motion.ul className="w-16 h-32 m-4 bg-red-500"
            variants={boxVariant}
            initial="hidden"
            animate="visible"
            >
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