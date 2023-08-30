import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './components/routes/About';
import Home from './components/routes/Home';
import Navigation from './components/Navigation';
import Detail from './components/routes/Detail';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" component={About} ></Route>
      <Route path="/movie-detail" component={Detail}></Route>
    </HashRouter>
  );
}

export default App;