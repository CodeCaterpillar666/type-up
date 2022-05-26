import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import { Word } from './components/Word';
import { Statistics } from './components/Statistics';
import useUserInput from './hooks/useUserInput';
import { useHotkeys } from 'react-hotkeys-hook';

import { cet4 } from './assets/cet4';


function App() {
  const [idx, setIdx] = useState(0);
  const {userInput, reset, totalCnt, wrongCnt } = useUserInput();

  useHotkeys('RIGHT', () => {
    increaseIdx()
    console.log(idx)
  });
  // useHotkeys('LEFT', () => {
  //   decreaseIdx()
  //   @??? why idx is always 0?
  //   if (idx > 0) console.log(idx)
  // });

  const increaseIdx = () => {
    if (idx < cet4.length) {
      console.log("increase idx by 1")
      setIdx(prevIdx => prevIdx + 1)
    }
  }

  const decreaseIdx = () => {
    if (idx > 0) {
      console.log("decrease idx by 1")
      setIdx(prevIdx => prevIdx - 1)
    }
  }

  if (userInput === cet4[idx].name) {
    reset();
    setIdx(prevIdx => prevIdx + 1);
  }

  return (
    <div className="App">
      <Statistics hasStart={true} totalCnt={totalCnt} wrongCnt={wrongCnt} />
      <Word word={cet4[idx].name} userInput={userInput} />
    </div>
  );
}

export default App;
