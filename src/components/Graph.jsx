import React, {Component} from 'react';
import {Bar,Line,Pie} from 'react-chartjs-2';

export default class Graph extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }
  render() {
      return (
            <div className="tile is-parent is-7">
              <article className="tile is-child notification backdrop">
                <p className="title">Graph</p>
                <a className="button">Current</a>
                <a className="button">Button</a>
                <Line
      data={this.state.chartData}
      options={{

      }}
      />
                <figure className="image is-4by3">
                </figure>
              </article>

        </div>

    );
  }
}

