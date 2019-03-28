import React from 'react';
import GitHub from './images/github.jpg';
const Skills = (props) => {
    return (
      <div className="header">
      <div className="container">
      <div className="title">Skills</div>

      <div className="flex-container">
        <div className="flex-item " > 
          <img className=" image" src={GitHub}>
          </img>
        </div>
        <div className="flex-item "> 
        <img className=" image" src="https://image.shutterstock.com/display_pic_with_logo/4213018/1330812905/stock-photo-illustration-css-icon-1330812905.jpg"></img>
        </div>
        <div className="flex-item "> 
        <img className=" image" src="http://chittagongit.com/images/js-icon/js-icon-21.jpg"></img>
        </div>
        <div className="flex-item "> 
        <img className=" image" src="http://chittagongit.com/images/nodejs-icon/nodejs-icon-15.jpg"></img>
        </div>
        <div className="flex-item "> 
        <img className=" image" src="https://cdn-images-1.medium.com/max/871/1*d2zLEjERsrs1Rzk_95QU9A.png"></img>
        </div>
        <div className="flex-item "> 
        <img className=" image" src="https://cdn-images-1.medium.com/max/1600/1*Ce0gUe0LbnhL7ebnDGTp5w.png"></img>
        </div>
        
      </div>

      
      </div>
      </div>
    );
  };
  export default Skills;