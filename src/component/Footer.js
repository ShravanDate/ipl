import React, { Component } from 'react';
import '../assets/css/App.css';
let a = 50;
let b = 500;
class Footer extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			abc : '50'
		}
	}	
	footerClick = () => {
		console.log('aaaaaaaaaaaaaaa');
	}
	render() {
	    return (	      
	        <footer className="App-Footer">
	          <h1 onClick={this.footerClick}>Footer Here{a+b}</h1>

	        </footer>

              
           
	    );
	}
}

export default Footer;
