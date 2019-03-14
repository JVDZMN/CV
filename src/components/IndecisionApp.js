import React from 'react';

import Header from './Header.js';
import Experience from './exprience'
import AboutMe from './aboutMe.js'
import Education from './Education'
import Contacts from './Contact'
import Skills from './Skills'
import Interests from './Interests'


Header.defaultProps={
  title:'Mohammad Javad Zamani'
}
export default class IndecisionApp extends React.Component {
  state={
    options:[],
    selectedOption:undefined
  }
  
  componentDidMount=()=> {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing at all
    }
  }
  componentDidUpdate=(prevProps, prevState) =>{
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount=()=> {
    console.log('componentWillUnmount');
  }
  handleDeleteOptions=()=> {
    this.setState(() => ({ options: [] }));
  }
  handleDeleteOption=(optionToRemove)=> {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }
  handlePick=()=> {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(()=>({
      selectedOption:option
    }));
    console.log(option);
  }
  handleAddOption=(option)=> {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
  }
  closeOptionModal=()=>{
    this.setState(()=>(
      {
        selectedOption:undefined
      }
    ));
  }
  render() {
    const subtitle = 'Web Developer';

    return (
      <div >
        
        <Header subtitle={subtitle} />
        
        <div className="container body">
        <AboutMe>
        </AboutMe>
        <Experience></Experience>
        <Education></Education>
        <Interests></Interests>
        <Skills></Skills>
        <Contacts>
        </Contacts>
        </div>
        
        
      </div>
    );
  }
}
