import React, { Component } from 'react';
import Graph from './Graph';
import Wallet from './Wallet';
import Nav from '../partials/Header';
import Footer from '../partials/Footer';
import News from './News';
import Stats from './Stats';

export default class Home extends Component {
   constructor(props) {
    super(props);
    this.state = {
     chartData:props.chartData
    }
  }
  render() {
    return (
      <div className="App">
        <Nav />
      <Stats
        price="300"
        volume="50K"
        change="6%"
        etc="434"
         />
      <div className="tile is-parent">
      <Graph chartData={this.state.chartData}/>
      <Wallet />
      </div>
      <News />
      <Footer />
      </div>
    );
  }
}



