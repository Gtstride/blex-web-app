import React from "react"
import { Router } from 'react-router-dom'
import history from './services/history'
import Routes from './Routes'

import Footer from "./components/Footer/Footer"

// import './App.css';


const MainApp = () => {
  return (
    <div className="App">
      <Router history={history}>
        <Routes />
      </Router>
      <Footer />
    </div>
  );
}

export default MainApp;
