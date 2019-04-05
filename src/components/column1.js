import React from 'react';
import AboutMe from './aboutMe.js'

const Column1=(props)=>{
    return (
        <div className=" al-self ">

        
        <div className="col1">
        <div className="al-center">
        
          <img className="roundPic" src="https://media.licdn.com/dms/image/C4E03AQHAnNs4ErwWoQ/profile-displayphoto-shrink_200_200/0?e=1558569600&v=beta&t=gXRNlHaeePmHdiL-07-uoR5cwJ9wnuKajZFg5F81xXw">
          </img >

         <h2>Javad Zamani</h2>
         <h3>Front End developer</h3>
        </div>
        {/* <div className="li-gr"></div> */}
        <div className="aboutme">
        <AboutMe> 
        </AboutMe>
        </div>
       
        </div>
        
        </div> 
    )
}

export default Column1;


         