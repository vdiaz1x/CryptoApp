import React, { Component } from 'react';
import Graph from './Graph';
import Wallet from './Wallet';
import Nav from '../partials/Header';
import Footer from '../partials/Footer';
import News from './News';
import Stats from './Stats';

export default function Home(props) {
    console.log("this is home data",props.data);
    return (
      <div className="App">
        <Nav />
        <Stats data={props.data}/>
        <div className="tile is-parent">
          <Graph chartData={props.chartData}/>
          <Wallet />
        </div>
        <News />
        <Footer />
      </div>
    );
}



