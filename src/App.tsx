import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import "./App.css";
import Header from './Header';

function App() {
  return (
    <Router> {/* Wrap the contents in a Router */}
      <div className="App">
        <Header />  {/* This is your custom header component */}
        <h1 className="welcomeHeader">Bröderna Näs Inc</h1>
        <img className="broderImage" src="broderna.jpg" alt="Bröderna" />
      </div>
    </Router>
  );
}

export default App;
