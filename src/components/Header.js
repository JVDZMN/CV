import React from 'react';
const Header = (props) => {
    return (
      <div className="header">
      <div className="container">
      
        {props.title && <h1 className="header__title">{props.title}</h1>}
        {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
        
        <div className="flex-container">

         <div className="flex-item">
         <a href="https://www.linkedin.com/in/javad-zamani-047350111/">
          <img 
      src="http://science.psu.edu/sciencejournaljune2012.pdf/archives/december-2013/images-december-2013/linkedin-logo.jpg/image" />
           </a>
         </div>

      <div className="flex-item">
      
      </div>
      
      <div className="flex-item">
      <a href="https://github.com/JVDZMN">
          <img 
      src="https://github.blog/wp-content/uploads/2013/04/fffdd290-a5e2-11e2-8099-e1b5d8286da3.jpg?resize=1234%2C272" />
           </a>
      
      </div>
      </div>
      </div>
      </div>
    );
  };
  export default Header;