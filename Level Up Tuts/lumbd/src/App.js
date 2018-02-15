import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    stocks: []
  }

  async componentDidMount() {
    try {
      const res = await fetch('https://www.alphavantage.co/query?apikey=ZFC6ELK98CG1MD7Q&function=TIME_SERIES_DAILY_ADJUSTED&symbol=AAPL');
      const stocks = await res.json();
      console.log(stocks);
      this.setState({
        stocks: stocks.results
      });
    } catch(e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={ logo } className='App-logo' alt='logo' />
        </header>
        
      </div>
    );
  }
}

export default App;
