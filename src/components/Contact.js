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
      src="https://banner2.kisspng.com/20180319/rlw/kisspng-facebook-logo-computer-icons-clip-art-clipart-png-collection-facebook-logo-5ab036598fec59.6546079515214976895895.jpg" />
           </a>
         </div>

      <div className="flex-item">
      <img src="https://icons-for-free.com/free-icons/png/512/1313515.png"></img>
      jvdzmn@gmail.com
      
      </div>
      
      <div className="flex-item">
      <img src="https://banner2.kisspng.com/20180319/xde/kisspng-mobile-phones-computer-icons-telephone-prepay-mobi-mobile-phone-icon-phone-telephone-icon-5ab06601b6ff39.7540539915215098897496.jpg"
      ></img>
      +4542613421
      </div>
      </div>

      </div>
      </div>
    );
  };
  export default Contact;