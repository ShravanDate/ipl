import React, { Component } from 'react';

import ScoreLogo from '../assets/images/score-logo.png';
import playToWinLogo from '../assets/images/playToWinLogo.png';
import Button from '../component/button/button';


class Screen01 extends Component {	

render() {
    return (      
        <div>
        	<section className="screen_mainwarper">
				  <div className="screen_subwarper">
				    <div className="common_logo">
				      <div className="logo"><a href="https://www.google.com/" target="blank"> <img src={ScoreLogo} alt="IPL" /> </a></div>      
				    </div>
				    <div className="home-screen ">
				    <div className="curved-div"></div>
				        <div className="Start-screen homeScreen">
				          <img src={playToWinLogo} alt="" className="playToWinLogo" />      
				            <h2>Exclusive Offers and <br />an all expenses trip to the <br />2019 Cricket World Cup</h2>
				            <div className="clearfix"></div>	
				            
				            
				            <Button buttonElement="button-a start-btn" linkTo="start" buttonName="Start" />
				            <div className="clearfix"></div>
				            <Button buttonElement="button-a start-btn" linkTo="how-to-play" buttonName="How to play" />            
				        </div>   
				      </div>
				  </div>
			</section>
        </div>
    );
  }
}

export default Screen01;
