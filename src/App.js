import React from 'react';
import logo from './logo.svg';
//import './App.css';
import "./styles.scss"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to Alumni Website</h2>
      </header>
      <br></br>
      <div className="card">
        <img src="img_avatar.png" alt="logo" />
        <div className="container">
          <h4><b>Shagundeep Singh</b></h4>
          <p>Computer Science - 2020</p>
        </div>
      </div>
    </div>
  );
}

export default App;