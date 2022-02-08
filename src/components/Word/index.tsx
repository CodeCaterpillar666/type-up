import { Letter } from "../Letter";
import useUserInput from "../../hooks/useUserInput";
import { LetterState } from "../Letter/index";
import { useEffect, useState } from "react";

interface WordProps {
  word?: string; 
}

export const Word: React.FC<WordProps> = ({ word = "testword" }) => {
  const {userInput, reset} = useUserInput();
  const [hasWrong, setHasWrong] = useState(false);

  useEffect(() => {
    if (hasWrongInput(userInput, word)) {
      // 加一个动画，震动一下表示出错了
      reset();
    }
  }, [userInput]);

  return (
    <>
      {/* <div>
        User Input: {userInput}
      </div> */}
      <div>
        {word.split('').map((letter, index) => {
          return (<Letter letter={letter} state={getLetterState(userInput, word, index)} />)
        })}  
      </div>
    </>
  )
};

const hasWrongInput = (userInput: string, word: string): boolean => {
  let userInputLen = userInput.length;
  for (let i = 0; i < userInputLen; i++) {
    if (userInput[i] !== word[i]) return true;
  }
  return false;
};

const getLetterState = (userInput: string, word: string, index: number): LetterState => {
  let userInputLen = userInput.length;
  if (index >= userInputLen) return 'default';
  if (userInput.charAt(index) === word.charAt(index)) return 'correct';
  return'wrong';
};