import logo from './logo.svg';
import './App.css';
import {useEffect,useState } from 'react';
import {Anime} from './components/Anime';
import {Navbar} from './components/Navbar'
import {Animate} from "./components/Animate"
// import {Card} from "./components/Card"
import {Home} from "./components/Home";




function App() {

  const [currentTime,setCurrentTime]=useState(0);
  
  useEffect(()=>{
    fetch('/time').then(res=>res.json()).then(data=>{
      setCurrentTime(data.time);
    })
  },[]);

  return (
  
    <div>
      <Navbar/>
    </div>
   
  );
}

export default App;
