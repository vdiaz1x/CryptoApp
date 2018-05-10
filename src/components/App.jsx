import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home.jsx';
import Stats from './Stats';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data:{},
      chartData:{
        labels: ['Bitcoin', 'Ethereum','EOS','Lifecoin'],
        datasets:[
        {
          label:'Market',
          fill: false,
          data:[
            615794,
            512323,
            123423,
            163423,
            236443,
            232344
          ],
          borderColor:[
            'rgba(255,99,132,0.6)',
            'rgba(255,162,235,0.6)',
            'rgba(255,200,82,0.6)',
            'rgba(255,192,192,0.6)',
            'rgba(255,102,252,0.6)',
            'rgba(255,99,64,0.6)',
            'rgba(255,99,132,0.6)'
          ]
        }
        ]
      }
    }
  }
  hello(a){
    console.log( this.state.chartData.datasets[0].data);
  this.state.chartData.datasets[0].data.push(a.data.quotes.USD.price)
  }
componentWillMount(){
  this.getChartData();
}
  getChartData(){
    fetch('https://api.coinmarketcap.com/v2/ticker/1')
      .then(res => res.json())
      .then((data) => {
        this.hello(data);
        this.setState({
          data: data.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log("app data",this.state.data)
    console.log("app data",this.state.data.name)
    return (

      <div className="App container is-ancestor">
      <Home chartData={this.state.chartData} data={this.state.data}/>
      </div>

    );
  }
}

export default App;
