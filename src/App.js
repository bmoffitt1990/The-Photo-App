import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from './Components/LandingPage/LandingPage'

function App() {
  return (
    <Router>
      <Route exact={true} path="/" render= {()=> 
        <LandingPage/>
      }/>
      <div className="app">
      </div>  
    </Router>
    
  );
}

export default App;
