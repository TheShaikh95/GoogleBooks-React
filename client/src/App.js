import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Saved from './pages/Saved';
import Navbar from './components/NavBar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/saved" component={Saved}></Route>
      </Switch>
    </Router>
  );
}

export default App;
