import React,  { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom'

import '../assets/css/App.css';
import Screen01 from '../component/screen01';
import Step01 from '../component/how-to-play/how-to-play';
import Start from '../component/start/start';
import Scan from '../component/scan/scan';
import Capture from '../component/scan/capture';
import Offer from '../component/offer/offer';
import Leaderboard from '../component/leaderboard/leaderboard';
import Hooks from '../component/hooks/hooks';

class Middlewrapper extends Component {	

  render() {
    const supportsHistory = 'pushState' in window.history;
   
    return (      
        <div className="container">
            <BrowserRouter basename="/" forceRefresh={!supportsHistory}>                      
            <Switch>
                 <Route exact path="/" component = {Screen01} />
                 <Route exact path="/how-to-play" component = {Step01} />
                 <Route exact path="/start" component = {Start} />
                 <Route exact path="/scan" component = {Scan} />
                 <Route exact path="/capture" component = {Capture} />
                 <Route exact path="/offer" component = {Offer} />
                 <Route exact path="/leaderboard" component = {Leaderboard} />
                 <Route exact path="/hooks" component = {Hooks} />
           </Switch>           
           </BrowserRouter>
        </div>
    );
  }
}

export default Middlewrapper;
