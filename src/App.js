import React from 'react';
import './App.css';
import bernatQiLogoTransparent from './img/bernatqi-logo-tranparent.png';
import Button from './components/Button';
import Counter from './components/Counter';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numClicks: 0
    };
    this.manageClick = this.manageClick.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
  }

  manageClick() {
    this.setState(({ numClicks }) => ({ numClicks: numClicks + 1 }));
  }

  resetCounter() {
    this.setState({ numClicks: 0 });
  }

  render() {
    return (
      <div className="App">
        <div className='bernatqi-logo-container'>
          <img
            className='bernatqi-logo'
            src={bernatQiLogoTransparent}
            alt='BernatQi logo' />
        </div>
        <div className='main-container'>
          <Counter
            numClicks={this.state.numClicks} />
          <Button
            text='Click'
            isClickButton={true}
            manageClick={this.manageClick} />
          <Button
            text='Reset'
            isClickButton={false}
            manageClick={this.resetCounter} />
        </div>
      </div>
    );
  }
}

export default App;
