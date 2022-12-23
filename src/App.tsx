import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import { Word } from './components/Word';
import { Statistics } from './components/Statistics';
import useUserInput from './hooks/useUserInput';
import { useHotkeys } from 'react-hotkeys-hook';
import { NavBar } from './components/NavBar'
import Footer from './components/Footer'

import axios from 'axios';

import { cet4 } from './assets/cet4';

// https://stackoverflow.com/questions/25469244/how-can-i-define-an-interface-for-an-array-of-objects
interface DictionaryItem {
  name?: string;
  trans?: string;
}
interface Dictionary extends Array<DictionaryItem>{}

function App() {
  const [idx, setIdx] = useState(0);
  const {userInput, reset, totalCnt, wrongCnt } = useUserInput();

  useHotkeys('RIGHT', () => {
    increaseIdx()
    console.log(idx)
  });

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
        {
          cet4
          ? <Word word={cet4[idx].name!} userInput={userInput}  />
          : <p>loading...</p>
        }
        
        <div className="h-1/5"></div>
        <Statistics hasStart={true} totalCnt={totalCnt} wrongCnt={wrongCnt} />
        <Footer description='' title='' />
      </div>
    </div>
  );
}

export default App;
