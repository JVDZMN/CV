import React from 'react';
import Linkedin from './images/linkedin.png';
import GitHub from './images/github.png';
const Socials = (props) => {
    return (
      <div>
        <div className="col3-title">
        SOCIALS
      </div>
      <div className="col3-social-container">
        <div>
            <a href="https://www.linkedin.com/in/javad-zamani-047350111/">
            <img className="col3-img " src={Linkedin}/>
            </a>
          
        
        </div>
        <div>
            <a href="https://github.com/JVDZMN">
            <img className="col3-img " src={GitHub}/>
            </a>
          
        
        </div>
      </div>
      </div>
      
      
    );
  };
  export default Socials;