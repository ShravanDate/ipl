import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, IndexLink  } from "react-router-dom";
import '../assets/css/App.css';
import App from '../App';
import Page01 from '../component/page1';
import Page02 from '../component/page2';
import Page03 from '../component/page3';
import Page04 from '../component/page4';
import Page05 from '../component/page5';
import Middlewrapper from '../component/Middlewrapper';

class Header extends Component {
	
  render() {
    return (      
        <header className="App-header">
          <h1>Header Here</h1>             
              <nav>
                <ul>
                  <li> <Link to="page1">Page01</Link> </li>
                  <li> <Link to="page2">Page02</Link> </li>
                  <li> <Link to="page3">Page03</Link> </li>
                  <li> <Link to="page4">Page04</Link> </li>
                  <li> <Link to="page5">Page05</Link> </li>
                </ul>
              </nav>

            
          
         
        </header>
    );
  }
}

export default Header;
