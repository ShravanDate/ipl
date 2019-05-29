import React from 'react';
import Button from '../../component/button/button';

import Balls from '../../assets/images/Balls.png';
import Mobileimg from '../../assets/images/mobile-img.png';
import ScanNow from '../../assets/images/scan-now.png';
import HandPlus from '../../assets/images/Hand-plus-shadwo.png';
import Fourimg from '../../assets/images/four-img.png';
import Secondhand from '../../assets/images/second-hand.png';
import Touchhand from '../../assets/images/touch-hand.png';

const Steps = (props) => {
	return (    
        <div className="main-wrapper">
		    <div className={props.class01}></div> 
		    <div className={props.class02}>
		      <div className="dotted-div">
		      <h3 className="number">{props.rank} <span>{props.title}</span></h3>  
		        <img src={Balls} className="Scan-img"  alt="IPL"/>
		        <div className="dotted-div-inner"></div>  		        
		        <img src={Mobileimg} className="mobileimg" alt="IPL" />


		        <a href="https://www.google.com/" target="blank" className={props.anchor} ><img src={ScanNow} className={props.stpe01class01} alt={props.altName} /></a>
        		<img src={HandPlus} className={props.stpe01class02} alt={props.altName}/>

		        <img src={Fourimg} className={props.stpe02class01} alt={props.altName}/>
		        <img src={Secondhand} className={props.stpe02class02} alt={props.altName}/>
		        <img src={Touchhand} className={props.stpe02class03} alt={props.altName}/>

		        <a href="https://www.google.com/" target="blank" className={props.anchor01}  ><img src={Fourimg} className={props.stpe03class01} alt={props.altName} /></a>

		      </div>
		      <div className="clearfix"></div>
        	  <Button buttonElement={props.buttonElement01} buttonName="Start" linkTo="start" />

		    </div>
  		</div>

   )
}
export default Steps;