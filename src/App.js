import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Nice try Spideman but I'm to gay for ballroom dancing!</p>
        <a
          className="App-link"
          href="https://bad-dragon.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Don't  click
        </a>
      </header>
    </div>
  );
}

export default App;
