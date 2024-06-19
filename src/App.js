import React from 'react';
import './App.css';
import Displaypage from './components/Displaypage';
import User1 from './components/User1';
import User2 from './components/User2';
import User3 from './components/User3';

 import {
  BrowserRouter as
     Router,
     Routes,
      Route,

 } from 'react-router-dom';



function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Displaypage/>}/>         
          
        </Routes>
      </Router>




      

    </div>
  );
}

export default App;
