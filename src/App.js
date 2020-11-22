import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header.js";
import Dropdown from "./Dropdown.js";
import Notes from "./Notes.js";

function App() {
  return (
    <div>
      <Header/>
      <Dropdown/>
      <Notes/>
    </div>
    
  );
}

export default App;
