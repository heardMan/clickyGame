import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import MainContent from './components/main-content';
import Footer from './components/footer';
//import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
     
        <div className="App">
          <Navbar />
          <MainContent />
          <Footer />
          
        </div>
      
    );
  }
}

export default App;
