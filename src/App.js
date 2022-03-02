import './App.css';
import MainPage from './MainPage';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Questions from './Questions';
import Login from './Login';
import { useState } from 'react';



function App() { 
  const Info  = [
    {Question: "how to make a egg?", Options: ["use a pan", "use a break", "sit on it"], Answer: 0, PgNum: 1},
    {Question: "how to make a car?", Options: ["use a tool", "use a feather", "sit in it"], Answer: 1, PgNum: 2},
    {Question: "how to make a window?", Options: ["use sand", "get an installer", "put it in"], Answer: 0, PgNum: 3},
    {Question: "how to make a brick?", Options: ["use iron", "play pokemon", "call AA"], Answer: 2, PgNum: 4},
    {Question: "how to make a stick?", Options: ["use iron", "play pokemon", "call AA"], Answer: 0, PgNum: 5},
    {Question: "how to make a bow?", Options: ["use iron", "play pokemon", "call AA"], Answer: 1, PgNum: 6},
    {Question: "how to make a egg?", Options: ["use a pan", "use a break", "sit on it"], Answer: 0, PgNum: 7},
    {Question: "how to make a car?", Options: ["use a tool", "use a feather", "sit in it"], Answer: 1, PgNum: 8},
    {Question: "how to make a window?", Options: ["use sand", "get an installer", "put it in"], Answer: 0, PgNum: 9},
    {Question: "how to make a brick?", Options: ["use iron", "play pokemon", "call AA"], Answer: 2, PgNum: 10},
    {Question: "how to make a stick?", Options: ["use iron", "play pokemon", "call AA"], Answer: 0, PgNum: 11},
    {Question: "how to make a bow?", Options: ["use iron", "play pokemon", "call AA"], Answer: 1, PgNum: 12},
    {Question: "how to make a egg?", Options: ["use a pan", "use a break", "sit on it"], Answer: 0, PgNum: 13},
    {Question: "how to make a car?", Options: ["use a tool", "use a feather", "sit in it"], Answer: 1, PgNum: 14},
    {Question: "how to make a window?", Options: ["use sand", "get an installer", "put it in"], Answer: 0, PgNum:15},
    {Question: "how to make a brick?", Options: ["use iron", "play pokemon", "call AA"], Answer: 2, PgNum: 16},
    {Question: "how to make a stick?", Options: ["use iron", "play pokemon", "call AA"], Answer: 0, PgNum: 17},
    {Question: "how to make a bow?", Options: ["use iron", "play pokemon", "call AA"], Answer: 1, PgNum: 18},
    {Question: "how to make a egg?", Options: ["use a pan", "use a break", "sit on it"], Answer: 0, PgNum: 19},
    {Question: "how to make a car?", Options: ["use a tool", "use a feather", "sit in it"], Answer: 1, PgNum: 20}
  ];

  const [setIsAuth] =useState(false)
  return (
    <Router>
    <Routes>
      <Route path = "/" element = {<Login setIsAuth={setIsAuth}/>}/>  
      <Route path = "/Start" element = {<Questions Question={Info}/>}/> 
      <Route path = "/Main" element = {<MainPage />}/>  
    </Routes>
    </Router>
  );
}

export default App;
