import React from 'react';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
      return (
      <div className="tile is-child container notification hero">
            <article className="tile is-child notification backdrop">
              <p className="title">News</p>
              <p className="subtitle">View News About Your Currency Here</p>
              <figure className="media-left">
              </figure>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                  </p>
                </div>
                <nav className="level">
                  <div className="level-left">
                    <a className="level-item">
                      <span className="icon is-small"><i className="fas fa-reply"></i></span>
                    </a>
                    <a className="level-item">
                      <span className="icon is-small"><i className="fas fa-retweet"></i></span>
                    </a>
                    <a className="level-item">
                      <span className="icon is-small"><i className="fas fa-heart"></i></span>
                    </a>
                  </div>
                </nav>
              </div>
              <div className="media-right">
                <button className="delete"></button>
              </div>
              <hr/>
              <div className="media-content">
                  <div className="content">
                      <p>
                        <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                        <br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                      </p>
                </div>
                <nav className="level">
                    <div className="level-left">
                        <a className="level-item">
                           <span className="icon is-small"><i className="fas fa-reply"></i></span>
                        </a>
                        <a className="level-item">
                            <span className="icon is-small"><i className="fas fa-retweet"></i></span>
                          </a>
                        <a className="level-item">
                            <span className="icon is-small"><i className="fas fa-heart"></i></span>
                        </a>
                    </div>
                </nav>
              </div>

              <div className="media-right">
                <button className="delete"></button>
              </div>
              <hr/>
              <div className="media-content">
                  <div className="content">
                      <p>
                        <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                        <br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                      </p>
                </div>
                </div>
                <nav className="level">
                    <div className="level-left">
                        <a className="level-item">
                           <span className="icon is-small"><i className="fas fa-reply"></i></span>
                        </a>
                        <a className="level-item">
                            <span className="icon is-small"><i className="fas fa-retweet"></i></span>
                          </a>
                        <a className="level-item">
                            <span className="icon is-small"><i className="fas fa-heart"></i></span>
                        </a>
                    </div>
                </nav>
                </article>
              </div>
                    );
  }
}

export default Wallet;
