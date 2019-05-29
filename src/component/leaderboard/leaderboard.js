import React, { Component } from 'react';
import Button from '../../component/button/button';
import Row from '../../component/leaderboard/row'

let leaders = [];
let leaderName = ['shravan','vijay','hitesh','prakash','sunit','krishna','vikas','vivek','nammo','roshan'];

class Capture extends Component {  
   constructor(props) {
    super(props);
    this.state = {      
      leadersDetails : ''
    }
    this.handleClick = this.handleClick.bind(this);    
  }

  
  componentDidMount() {
  
    for(let i = 0; i< leaderName.length; i++){
      leaders.push(<Row key={i} rank={i+1+'.'} leadername={leaderName[i].toUpperCase()} score={100*(i+1)} />)
    }
    this.setState({
      leadersDetails : leaders
    });
  }

  handleClick(){
    console.log('Fired----------');
  }


  render() {
    return (
<section className="leaderboard-page">
  
   <div className="main-leader">  
      <div className="lead-header">
        <div className="currentUser">
          <div className="user">
            <div className="rank">
              <div className="data">
                <div className="content">9999</div>
              </div>
            </div>
            <div className="data">
              <div className="content">Lorem Ipsum</div>
            </div>
          </div>
          <div className="score">
            <div className="data">
              <div className="content">1000</div>
            </div>
          </div>
        </div>
        <div className="text">The Man of the Series wins tickets to  the 2019 Cricket World Cup</div>
      </div>

      <div className="curved-div-bottom yellow-color"></div> 
      <div className="clearfix"></div> 
    </div>  


    <div className="winnerdiv">
      
    </div>
    
    <div className="curved-div"></div>   
    <div className="tab-section">
      <div className="tab-div">  
        <h2 className="leadHeading">LEADERBOARD</h2>      
        <div className="headerSection">
          <div className="col1">NAME</div>
          <div className="col2">RUNS</div>
        </div>

        <div className="tabcontent">

          {this.state.leadersDetails}

        </div>

      </div>
    </div>

     <div className="clearfix"></div> 

    <div className="curved-div white-color"></div>    
    <div className="social-sharing">     
        <div className="content">
          <div className="text2">Challenge Friend</div>        
          <div className="sharing-icon"> 
            <a href="google.com" target="_blank"><img src="assets/images/whatsapp.png" className="whatsapp-icon" alt="IPL" /></a>
            <a href="google.com" target="_blank"><img src="assets/images/facbook.png" className="Facebook-icon" alt="IPL" /></a>
          </div>
        </div>
              
     <div className="clearfix"></div>
      <Button buttonElement="button-a continueBt" buttonName="HOOKS" linkTo="hooks"/* clicked={this.handleClick}*//>

    </div>
</section> 
    );
  }
}


export default Capture;