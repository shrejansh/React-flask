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
    <div className="App bg-dark-light ">
      <header className="App-header w-auto m-auto">
        <Navbar/>
        <Animate/>
        <Home/>
        {/* <Card/> */}
       <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lea React
        </a>
        <p>Show time {currentTime}</p>
        
        {/* <Anime/> */}
      </header>
    </div>
  );
}

export default App;
