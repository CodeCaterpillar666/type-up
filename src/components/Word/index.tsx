import { Letter } from "../Letter";
import useUserInput from "../../hooks/useUserInput";
import { LetterState } from "../Letter/index";
import React, { useEffect, useState } from "react";

interface WordProps {
  word: string;
  userInput: string;
}

export const Word: React.FC<WordProps> = ({ word, userInput }) => {

  useEffect(() => {}, [userInput]);

  return (
    <>
        {word.split('').map((letter, index) => {
          if (index >= userInput.length) {
            return (<Letter key={index} letter={letter} state={'default'} />)
          } else if (letter === userInput[index]) {
            return (<Letter key={index} letter={letter} state={'correct'} />)
          } else {
            return (<Letter key={index} letter={letter} state={'wrong'} />)
          }
        })}
    </>
  )
};