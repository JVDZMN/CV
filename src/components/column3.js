import React from 'react';
import Contacts from './Contact';
import Socials from './Socials';
import Hobbies from './Hobbies';

const Column3 = (props ) => {
    return(
        <div className="col3 al-self">
        <Contacts></Contacts> 
        <Socials></Socials>
        <Hobbies></Hobbies>       
        </div>
    )
}
export default Column3;