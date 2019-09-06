import React from 'react';
import { isBrowser } from '../../utils/checks';
import './App.css';

// Stateless component
export default function App() {
  return (

    <div className="App">
      <header className="App-header">
        <img className="App-logo" alt="logo" />
        <p> {{isBrowser}} </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
  </a>
      </header>
    </div>
  )
}


