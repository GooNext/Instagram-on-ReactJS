import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Feed from './components/Feed/Feed';
import Profile from './components/Profile/Profile';
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Route path = '/' component = {Feed} exact/>
        <Route path = '/profile' component = {Profile} exact/>
      </Router>
    </div>
  );
}

export default App;
