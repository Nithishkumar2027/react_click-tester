import React from 'react';
import './App.css';
import {Header} from './Header.js';
import {Clicker} from './Clicker.js';

class App extends React.Component{

  render(){
    return(
      <div>
        <Header />
        <div className="mato">
          <Clicker />
        </div>
      </div>
    );
  }
}

export default App;
