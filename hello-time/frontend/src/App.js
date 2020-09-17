import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [message, setMessage] = useState();

  useEffect(() => {
    setInterval(hello, 250);
  });

  const hello = () => {
    fetch("/api/hello")
    .then(response => response.text())
    .then(m => {setMessage(m)});
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {message}
        </p>
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
  );
}

export default App;
