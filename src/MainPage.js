import React from 'react';
import logo from './Logo quiz.png';
import {Link} from 'react-router-dom';


export default function MainPage() {
  return <div> <header className="App-header">
  <img src={logo} className="blink" alt="logo" />
    <p>
      Answer the multiple choice questions
    </p>
    <Link to = "/Start" >
      Click to Start!
    </Link>
  </header>
  </div>;
}
