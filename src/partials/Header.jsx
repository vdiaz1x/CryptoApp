
import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export default function Nav(props) {
  return (
    <div className="container">
      <section className="hero">
              <nav className="navbar">
                    <a className="navbar-item">
                      <img className="logo" src="https://cdn2.iconfinder.com/data/icons/bitcoin-and-mining/44/trolley-256.png" alt="Logo"/>
                    </a>
                    <h1 className="name">
                      CoinApp
                    </h1>
                  <div id="navbarMenuHeroA" className="navbar-menu">
                    <div className="navbar-end">
                      <a className="navbar-item is-active">
                        <h2 className="is-size-5">Home</h2>
                      </a>
                      <a className="navbar-item">
                        <h2 className="is-size-5">About</h2>
                      </a>
                      <a className="navbar-item">
                        <h2 className="is-size-5">Miner Dashboard</h2>
                      </a>
                      <span className="navbar-item">
                      </span>
                    </div>
                  </div>
              </nav>
    </section>
    </div>
);
}
