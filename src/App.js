import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from './Components/LandingPage/LandingPage'
import Page from './Components/Page/Page'

//I called router in this level and then again in landing page. I needed the router call becuase I used link. I forgot that the router tag would pass down from app to the landing page so I was actually calling it twice. Nested router calls fuck something up in the background. Simple fix by just calling router here and not in landing page
function App() {
  return (
    <Router>
    <div className="app">
      <Route exact={true} path="/" component={LandingPage}/>
      <Route path="/ThePhotoApp" component={Page}/>
      </div>  
    </Router>
    
  );
}

export default App;