
import React, {Component} from 'react';

class Stats extends Component {
  render() {
    const {price}=this.props;
    const {volume}=this.props;
    const {change}=this.props;
    const {etc}=this.props;
  return (
    <div className="container">
    <hr/>
          <nav className="level">
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Price</p>
                <p className="title">{price}</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Volume</p>
                <p className="title">{volume}</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">24 Hr</p>
                <p className="title">{change}</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Etc</p>
                <p className="title">{etc}</p>
              </div>
            </div>
          </nav>

    </div>
);
}
}

export default Stats;
