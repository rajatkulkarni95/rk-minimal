import { useState, useEffect, useRef } from "react";

const FORWARD = "forward";
const BACKWARD = "backward";

interface IReturn {
  word: string;
}

export const useTypingText = (
  words: string[],
  keySpeed = 1000,
  maxPauseAmount = 50
): IReturn => {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState<string[]>([]);
  const direction = useRef(BACKWARD);
  const typingInterval = useRef<ReturnType<typeof setInterval>>();
  const letterIndex = useRef<number>(0);

  useEffect(() => {
    // Start at 0
    let pauseCounter = 0;

    const typeLetter = () => {
      if (letterIndex.current >= words[wordIndex].length) {
        direction.current = BACKWARD;

        // Begin pause by setting the maxPauseAmount prop equal to the counter
        pauseCounter = maxPauseAmount;
        return;
      }

      const segment = words[wordIndex].split("") as string[];
      setCurrentWord(currentWord.concat(segment[letterIndex.current]));
      letterIndex.current = letterIndex.current + 1;
    };

    const backspace = () => {
      if (letterIndex.current === 0) {
        const isOnLastWord = wordIndex === words.length - 1;

        setWordIndex(!isOnLastWord ? wordIndex + 1 : 0);
        direction.current = FORWARD;

        return;
      }

      const segment = currentWord.slice(0, currentWord.length - 1);
      setCurrentWord(segment);
      letterIndex.current = currentWord.length - 1;
    };

    typingInterval.current = setInterval(() => {
      // Wait until counter hits 0 to do any further action
      if (pauseCounter > 0) {
        pauseCounter = pauseCounter - 1;
        return;
      }

      if (direction.current === FORWARD) {
        typeLetter();
      } else {
        backspace();
      }
    }, keySpeed);

    return () => {
      if (typingInterval.current) {
        clearInterval(typingInterval.current);
      }
    };
  }, [currentWord, wordIndex, keySpeed, words, maxPauseAmount]);

  return {
    word: currentWord.join(""),
  };
};
