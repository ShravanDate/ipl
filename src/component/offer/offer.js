import React, { Component } from 'react';
import Button from '../../component/button/button';


let indents = [];
class Capture extends Component {  
   constructor(props) {
    super(props);
    //this.handleLoad = this.handleLoad.bind(this);
    this.state = {
      imageDetails : ''
    }
  }

  componentDidMount() {
    //window.addEventListener('load', this.handleLoad);
    console.log('aaaaaaaaaaaaaaaa');
    


    setTimeout(
        function() {
            for (let i = 1; i < 15; i++) {
              indents.push(<img key={i} className={'spar-'+i+' active'} src={'assets/images/sparcle-'+i+'.png'} alt="IPL" />);
            }
            this.setState({
              imageDetails: indents
            });
        }
        .bind(this),
        3000
    );

  }

  render() {
    return (
      
<section className="screen_mainwarper">
  <div className="screen_subwarper">
    <div className="home-screen offer-page">
      <div className="main-annimation">
        <div className="anni-sprac"> 

        {this.state.imageDetails}

        </div>
      </div>
      
      <div className="Start-screen offer-screen">
        <h2>That was a near miss! </h2>
        <h3>Try scanning again!</h3>
        <img src="assets/images/fourIcon.png" className="Mask-Group" alt="IPL" /> </div>
      <div className="curved-div-bottom"></div>
    </div>
    <div className="scoreOffer">
      <div className="score">
        <div className="content">
          <p className="currentScore">Your Current Score: 88</p>
          <p>Offer unlocks Every 100 runs</p>
        </div>
      </div>
      <img src="assets/images/offerImg.png" alt="" className="offerImg"  /> 

      
      <Button buttonElement="button-a start-btn" linkTo="start" buttonName="CONTINUE PLAYING" />

      <div className="clearfix"></div>
      
      <Button buttonElement="button-a start-btn" linkTo="leaderboard" buttonName="GO TO LEADERBOARD" />

      </div>
  </div>
</section>

    );
  }
}


export default Capture;