import { useEffect, useState } from "react";

const useUserInput = () => {
    const [userInput, setUserInput] = useState('');
    const [totalCnt, setTotalCnt] = useState(0);
    const [wrongCnt, setWrongCnt] = useState(0);

    // 1.If keyDown is alphabet, append it
    // 2.If keyDown is Backspace, delete last letter
    const handleKeyDown = (e: { key: any; }) => {
        const char = e.key;
        // setUserInput(userInput + char);
        if (isAlphabet(char)) {
            setUserInput((userInput) => (userInput + char));
            setTotalCnt(prevCnt => prevCnt + 1);
        }
        if (char === 'Backspace') {
            // slice string in javascript
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
            setUserInput((userInput) => (userInput).slice(0, userInput.length - 1));
            setWrongCnt(prevCnt => prevCnt + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        console.log("Added event listener!");
    }, []);

    const reset = () => setUserInput('');

    return {userInput, reset, totalCnt, wrongCnt, setTotalCnt, setWrongCnt};
}

const isAlphabet = (char: string): boolean => {
    return /^[a-z_A_Z]$/.test(char);
}

export default useUserInput;