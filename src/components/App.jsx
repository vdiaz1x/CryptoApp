import React from 'react';
import ReactDOM from 'react-dom';
import Graph from './Graph';
import Wallet from './Wallet';
import Nav from '../partials/Header';
import Footer from '../partials/Footer';
import News from './News';
import Stats from './Stats';


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (

      <div className="App container is-ancestor">
      <Nav />
      <Stats
        price="300"
        volume="50K"
        change="6%"
        etc="434"
         />
      <div className="tile is-parent">
      <Graph />
      <Wallet />
      </div>
      <News />
      <Footer />
      </div>

    );
  }
}

export default App;
