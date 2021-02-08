import React , { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Todo from './components/Todo';
import NoMatch from './components/NoMatch';

import { BrowserRouter,Route,Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/contact' component={Contact}></Route>
            <Route path="/:todo_id" component={Todo}></Route>
            <Route component={NoMatch}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
