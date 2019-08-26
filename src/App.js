import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Bands from './components/Bands';
import Band from './components/Band';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/bands" component={Bands} />
          <Route exact path="/bands/:name" component={Band} />
        </Switch> 
      </Router>
    )
  }
}

export default App
