import React from 'react';
const Header = (props) => {
    return (
      <div className="header">
      <div className="container">
      
         <h1 className="header__title">Javad zamani</h1>
         <h2 className="header__subtitle">Web developer</h2>
        
        <div className="flex-container">
        

         <div className="flex-item">
         <a href="https://www.linkedin.com/in/javad-zamani-047350111/">
          <img 
      src="http://chittagongit.com//images/linkedin-icon-no-background/linkedin-icon-no-background-3.jpg" />
           </a>
         </div>

      <div className="flex-item">
      
      </div>
      
      <div className="flex-item">
      <a href="https://github.com/JVDZMN">
          <img 
      src="http://chittagongit.com/images/github-icon-for-resume/github-icon-for-resume-24.jpg" />
           </a>
      
      </div>
      </div>
      </div>
      </div>
    );
  };
  export default Header;