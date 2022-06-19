import React from 'react';
import './App.css';
import Routes from './config/Routes'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import RoutesAuth from './config/RoutesAuth';
// import firebase from './firebase';
// import { useState, useEffect } from 'react';

function App() {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged(user => {
  //     setUser(user);
  //   })
  // }, [])

  return (
    <div className="App app-container">
      <Header />
      <Footer />
      <Routes /> 
      <RoutesAuth />
    </div>
  );
}

export default App;
 