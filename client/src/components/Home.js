
import { useState,useEffect } from "react";
import {Card} from "./Card";
import Image from "../Images/pexels-vincent.jpg";

export const Home =()=>{
    const [list, setList] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
          .then(response => response.json())
          .then(setList);
       }, []);
    console.log(list,"==this one");
    return(
        <div>
        {list.map(todo => 
         <Card image={Image} title={todo.title} content={todo.content}/>)}
      </div>
        )
}