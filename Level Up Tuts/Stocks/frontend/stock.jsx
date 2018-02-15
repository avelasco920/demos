import React from 'react';
import { normalize, schema } from 'normalizr';

class Stock extends React.Component {
  constructor () {
    super();
    this.state = {
      timeSeries: {}
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
   $.ajax({
     url: 'https://www.alphavantage.co/query?apikey=ZFC6ELK98CG1MD7Q&function=TIME_SERIES_DAILY_ADJUSTED&symbol=AAPL',
     type: "GET",
     dataType: "JSON",
     success: function(resp) {
       console.log(resp);
       this.setState(
         { timeSeries: resp["Time Series (Daily)"] },
         () => { this.closingPrices(); }
       );
     }.bind(this),
     error (resp) {
       console.log(resp);
     }
   });
  }

  closingPrices() {
    const timeSeriesArr = Object.values(this.state.timeSeries);
    let newArr =  Array.from(timeSeriesArr).map( (el) => (
      parseFloat(el["4. close"])
    ));
    this.setState({timeSeries: newArr}, () => console.log(this.state.timeSeries));
    return newArr;
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}


export default Stock;
