/* eslint-env browser */
// importing React
import React from 'react';
import ReactDOM from 'react-dom';

// importing font awesome
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import solid from '@fortawesome/fontawesome-free-solid';

// importing bulma
import 'bulma/bulma.sass';
import '../css/style.css';

// imported
import App from './components/App';

// add imported fontawesome icon libraries to the main library
fontawesome.library.add(brands, solid);

// mount our App at #container
ReactDOM.render(
  <App />,
  document.querySelector('#container'),
);
