import React, { Component } from 'react';
import Steps from '../../component/how-to-play/play-steps';

class Step01 extends Component {
		
	render() {
		return (      
		    <section className="screen_mainwarper">
			  <div className="screen_subwarper">
				  <Steps altName="ipl" class01="curved-div" class02="scan-now-div" rank="1" title="Tap on the Scan Button" stpe01class01="Scan-img" stpe01class02="Hand-plus" anchor="show" stpe02class01="hide" stpe02class02="hide" stpe02class03="hide" stpe03class01="hide" buttonElement01="hide"/>
				  <Steps altName="ipl" class01="curved-div  color-change" class02="scan-now-div second-section" rank="2" title="Point the camera  at a 4 / 6 while watching the match" stpe01class01="hide" stpe01class02="hide" stpe02class01="Scan-img" stpe02class02="secondHand" stpe02class03="Hand-plus touchHand"  anchor="hide" anchor01="hide" stpe03class01="hide" buttonElement01="hide" />
				  <Steps altName="ipl" class01="curved-div" class02="scan-now-div third-sec" rank="3" title="Give us a few seconds to analyse the image" stpe01class01="hide" stpe01class02="hide" stpe02class01="hide" stpe02class02="hide" stpe02class03="hide" stpe03class01="Scan-img"   anchor="hide" anchor01="show" buttonElement01="button-a start-btn"/>
				</div>
			</section>
		);
	}
}

export default Step01;
