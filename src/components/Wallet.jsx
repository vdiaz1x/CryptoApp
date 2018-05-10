import React from 'react';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
      return (
         <div className="container tile is-parent">
          <article className="tile is-child notification backdrop">
            <div className="content">
              <p className="title">Wallet</p>
              <div className="tabs is-boxed is-centered">
                  <ul>
                  <li className="is-active"> <a>
                <span aria-hidden="true"></span>
                <span>Info</span>
                </a>
                </li>
                <li>
                <a>
                <span aria-hidden="true"></span>
                <span>About</span>
                  </a>
                  </li>
                  <li>
                 <a>
                <span aria-hidden="true"></span>
                <span>Comments</span>
              </a>
            </li>
            <li>

            </li>
                </ul>
              </div>
              <table className="table is-striped is-hoverable">
                <tr>
                  <th>Coins</th>
                  <th>Amount</th>
                  <th>Comments</th>
                </tr>
                <tr>
                  <td><img className="coin-icons" src="https://apk4free.net/wp-content/uploads/2018/04/bitcoin.png"/></td>
                  <td>300</td>
                  <td>Lorem ipsum dolor </td>
                </tr>
                <tr>
                  <td><img className="coin-icons" src="https://apk4free.net/wp-content/uploads/2018/04/bitcoin.png"/></td>
                  <td>20</td>
                  <td>Lorem ipsum dolor </td>
                </tr>
                <tr>
                <td><img className="coin-icons" src="https://apk4free.net/wp-content/uploads/2018/04/bitcoin.png"/></td>
                  <td>5</td>
                  <td>Lorem ipsum dolor </td>
                </tr>
                <tr>
                <td><img className="coin-icons" src="https://apk4free.net/wp-content/uploads/2018/04/bitcoin.png"/></td>
                  <td>5</td>
                  <td>Lorem ipsum dolor </td>
                </tr>
              </table>
            </div>
          </article>
        </div>
    );
  }
}

export default Wallet;

