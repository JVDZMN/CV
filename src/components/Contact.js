import React from 'react';
const Contact = (props) => {
    return (
      <div className="header">
      <div className="container">
      <div className="title">Contacts</div>

      <div className="flex-container">

         <div className="flex-item">
         <a href="https://www.facebook.com/javad.zamani.752">
          <img 
      src="http://chittagongit.com/images/facebook-logo-icon-png/facebook-logo-icon-png-10.jpg" />
           </a>
         </div>

      <div className="flex-item">
      <img src="http://chittagongit.com/images/open-email-icon/open-email-icon-1.jpg"></img>
      jvdzmn@gmail.com
      
      </div>
      
      <div className="flex-item">
      <img src="http://chittagongit.com/images/phone-icon-for-website/phone-icon-for-website-5.jpg"
      ></img>
      +4542613421
      </div>
      </div>

      </div>
      </div>
    );
  };
  export default Contact;