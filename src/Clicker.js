import React from 'react';
import './App.css';
import {Helper} from './Helper';
import {ScoreList} from './ScoreList'
import 'bootstrap/dist/css/bootstrap.min.css';
export class Clicker extends React.Component{
  constructor(props){
    super(props);
    this.state={
      count: 0,
      seconds: 0,
      status: null,
      scores: [],
    }
  }
  test=()=>{
    window.alert("hello");
  }
  incrementCount =() =>{
    if(this.state.status === 'started' && this.state.seconds !== 10){
      this.setState({
        count: this.state.count +1,
      });
    }
    else{
      window.alert("please start the game");
    }
  }

  reset = () =>{
    clearInterval(this.interval);
    this.setState({
      count: 0,
      seconds: 0,
      status: null
    });
  }

  mainTimer=()=>{
    if(this.state.status === 'started'){
      this.setState({
        seconds: this.state.seconds + 1
      });
    }
    if(this.state.seconds === 10){
      clearInterval(this.interval);
      const score = this.state.count/10;
      window.alert("Clicks per second: "+score);
      return this.scorePusher(score);
    }
  }

  startTimer =()=>{
    if(this.state.status === null){
      this.interval = setInterval(
        ()=> this.mainTimer(), 1000
      );
    }
    this.setState({status: 'started'});
  }
  /*pauseTimer = ()=>{
    if (this.state.status === "started") {
      clearInterval(this.interval);
      this.setState({status:'paused'});
    }
  }
*/
  scorePusher=(score)=>{
    const newArray = this.state.scores.slice();
    newArray.push(score);
    this.setState({
      scores : newArray,
    });
  }

  render(){
    return(
      <div className="row container-fluid">
      <div className="col-12 col-md-8">
        <div className="clicker border border-secondary rounded">
          <div className="clicker-display d-flex align-items-center bg-light text-secondary disp disabled"
               onClick={this.incrementCount}>

            <div className="mx-auto display-1">
              {this.state.count}
            </div>
          </div>
          <div className="clicker-button-panel d-flex flex-row btn-group">
            <button className="btn btn-warning w-50" onClick={this.reset}>
              <i className="fa fa-refresh fa-lg"></i><br/>Restart
            </button>
            <button className="btn btn-success w-50" onClick={this.startTimer}>
              <i className="fa fa-play fa-lg"></i><br/>Play
            </button>
            <Helper />
          </div>
        </div>
        <center>
          {/*<button className="btn btn-primary mt-5 ml-5 controls" onClick={this.pauseTimer}>
            <i className="fa fa-pause fa-2x"></i>
          </button>*/}
          <h4 className="time border border-secondary rounded">
            Time: {this.state.seconds}
          </h4>
        </center>

      </div>
      <div className="col-6 col-md-4 scores">
        <h3>Your Scores:</h3>
        <ScoreList numbers={this.state.scores}/>
      </div>

    </div>

    );
  }
}
