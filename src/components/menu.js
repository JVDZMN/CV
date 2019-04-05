import React from 'react';
import Item from './item';
class Menu extends React.Component {

  constructor() {
    super();
    this.state = {
      displayMenu: false,
      data:{}
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  };

  loadData() {
    console.log("loading data");
        fetch('https://api.myjson.com/bins/89cj4')
            .then(response => 
              response.json())
            .then(data => {
                this.setState({data: data });
                console.log(this.state.data);
        });
  }
  

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({displayMenu: true}, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  }

  componentDidMount(){
    console.log("DIDMOUNT");
      this.loadData();
      console.log(this.state);
  }


  render() {
    return (
      <div className="dropdown" style = {{background: 'blue', width: '200px'}} >
        <div className="button" onClick={this.showDropdownMenu}> dk </div>
        
        { this.state.displayMenu ? (
          <ul className="menu-ul">
            <li className="menu-li">om os</li>
            <li className="menu-li">Hvordan deltager jeg</li>
            <li className="menu-li">podcast show</li>
            <li className="menu-li">Fortrolighedspolitik</li>

          </ul>
        )
          : (
            null
          )
        }

      </div>

    );
  }
}

export default Menu;
