import React from 'react';
import Phone from './images/phone.png';
import gmail from './images/gmail.png';
const Contact = (props) => {
    return (
      <div>
        <div className="col3-title">
        CONTACT
      </div>
      <div className="col3-contact-container">
        <div>
          <img className="col3-img " src={Phone}></img>
          +4542613421
        </div>
        <div>
          <img className="col3-img" src={gmail}></img>
          &nbsp;jvdzmn@gmail.com
        </div>
      </div>
      </div>
      
      
    );
  };
  export default Contact;