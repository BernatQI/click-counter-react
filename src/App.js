import './App.css';
import bernatQiLogoTransparent from './img/bernatqi-logo-tranparent.png';
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manageClick = () => {
    setNumClicks(numClicks + 33);
  };
  const resetCounter = () => {
    setNumClicks(0);
  };

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
          numClicks={numClicks} />
        <Button
          text='Click'
          isClickButton={true}
          manageClick={manageClick} />
        <Button
          text='Reset'
          isClickButton={false}
          manageClick={resetCounter} />
      </div>
    </div>
  );
}

export default App;
