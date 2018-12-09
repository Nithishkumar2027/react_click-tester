import React from 'react';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';

export class Header extends React.Component {
  render(){
    return(
      <div>
        <Navbar color="dark" light expand="md">
          <NavbarBrand><h1 id="head">Click tester <span id="span">(game)</span></h1></NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
