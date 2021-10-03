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
        <button>Add Alumni</button>
      </header>
      <br></br>
      <div className="inline">
      <div className="card">
        <img src={`https://avatars3.githubusercontent.com/u/25390803?s=400&u=296ed5268e728a4077df9c0e925c1e9b843a7bf8&v=4`} alt="profile pic"
        style={{height: "200px", width: "200px"}} />
        <div className="container">
          <h4><b>Shagundeep Singh</b></h4>
          <p>Computer Science - 2020</p>
          <button>View Details</button>
        </div>
      </div>
      <div className="card">
        <img src={`https://avatars3.githubusercontent.com/u/25390803?s=400&u=296ed5268e728a4077df9c0e925c1e9b843a7bf8&v=4`} alt="profile pic"
        style={{height: "200px", width: "200px"}} />
        <div className="container">
          <h4><b>Sanyam dhawan</b></h4>
          <p>Computer Science - 2020</p>
          <button>View Details</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;