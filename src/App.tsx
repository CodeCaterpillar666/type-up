import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import { Word } from './components/Word';
import { Statistics } from './components/Statistics';
import useUserInput from './hooks/useUserInput';
import { useHotkeys } from 'react-hotkeys-hook';
import { NavBar } from './components/NavBar'
import { MapCard } from './components/Card';

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
    <div>
      <div className="App flex h-screen w-full pb-4 flex flex-col items-center">
        <NavBar />
        <div className="h-1/4"></div>
        <Word word={cet4[idx].name} userInput={userInput}  />
        <div className="h-1/5"></div>
        <Statistics hasStart={true} totalCnt={totalCnt} wrongCnt={wrongCnt} />
      </div>
    </div>
  );
}

export default App;
