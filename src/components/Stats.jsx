
import React from 'react';

function Stats(props) {

  if (!props.data.quotes){
    return <div/>
  }
  console.log('rendered twice');
  return(
    <div className="container">
    <hr/>
          <nav className="level">
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Symbol</p>
                <p className="title">{props.data.symbol}</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Price</p>
                <p className="title">{props.data.quotes.USD.price}</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Volume</p>
                <p className="title">{props.data.quotes.USD.volume_24h}</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">24 HR Change</p>
                <p className="title">{props.data.quotes.USD.percent_change_24h}</p>
              </div>
            </div>
          </nav>

    </div>)
}


export default Stats;
