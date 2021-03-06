import React from 'react';
import './App.css';
import Routes from './config/Routes'
import Header from './components/Header'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App app-container">
      <Header />
      <Footer />
      <Routes /> 
    </div>
  );
}

export default App;
 