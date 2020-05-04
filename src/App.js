import React, { Component } from 'react';
import './App.css';
import Card from './components/entry/Card'
import Projects from './components/Projects/Projects'
import Resume from './components/Resume/Resume'
import Navbar from './components/Navbar/Navbar';
 

class App extends Component {

  constructor () {
    super();
    this.state = {
      route: 'entry'
    }
  }

  OnRouteChange = (route) =>{
    this.setState({route: route});
  }

  render(){

    const {route} = this.state;

    return (
      <div className="App">
        { route === 'entry' ?
        <Card OnRouteChange = {this.OnRouteChange}/> :
        route === 'projects' ?
        <div>
          <Navbar OnRouteChange = {this.OnRouteChange}/>
          <Projects/>
        </div> :
        <div>
          <Navbar OnRouteChange = {this.OnRouteChange}/>
          <Resume/>
        </div>
        }
      </div>
    );
  }

}

export default App;
