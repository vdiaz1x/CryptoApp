import React from 'react';

class Graph extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
      return (
            <div className="tile is-parent is-7">
              <article className="tile is-child notification backdrop">
                <p className="title">Graph</p>
                <a className="button">Current</a>
                <a className="button">Button</a>
                <figure className="image is-4by3">
                  <img src="https://bulma.io/images/placeholders/640x480.png"/>
                </figure>
              </article>

        </div>

    );
  }
}

export default Graph;

