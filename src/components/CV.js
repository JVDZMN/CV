import React from 'react';

import Column1 from './column1'
import Column2 from './column2'
import Column3 from './column3'


export default class IndecisionApp extends React.Component {
  
  render() {
    

    return (
      <div className="grid-container">
        <div></div>
        <Column1></Column1>
        <Column2></Column2>
        <Column3></Column3>
      </div>  
      
      
    );
  }
}
