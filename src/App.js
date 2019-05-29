import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './assets/css/App.css';
import Middlewrapper from './component/Middlewrapper';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      abc : '500'
    }
  } 
  render() {
    return (
      
    <Router>               

      <div className="App">
        <Middlewrapper />              
     
      </div>
    </Router>         
    );
  }
}
export default App;