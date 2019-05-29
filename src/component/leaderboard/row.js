import React from 'react';

const Leaderrow = (props) => {
  return(
      <div className="main-details">
        <div className="user-name-div">
          <p>{props.rank}<span> {props.leadername}</span></p> 
        </div>
        <div className="user-name-div scoreRun">
          <p>{props.score}</p> 
        </div>
      </div>
  )
}

export default Leaderrow;