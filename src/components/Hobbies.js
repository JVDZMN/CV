import React from 'react';
import Soccer from './images/soccer.png';
import Dumbbell from './images/dumbbell.png';
import Family from './images/family.png';
import Travel from './images/travel.png';
const Hobbies = (props) => {
    return (
      <div>
      <div className="col3-title">
        HOBBIES
      </div>
      <div className="li-gr2"></div>
      <div className="col3-hobbies-container">
        <div>
          <img className="col3-img " src={Soccer}></img>
          
        </div>
        <div>
          <img className="col3-img" src={Dumbbell}></img>
          
        </div>
        <div>
          <img className="col3-img " src={Family}></img>
          
        </div>
        <div>
          <img className="col3-img" src={Travel}></img>
          
        </div>
        
      </div>
      </div>
      
    );
  };
  export default Hobbies;