import Letter from "./Letter";
import React, { useEffect } from "react";

function Word({
  id,
  key,
  word,
  usedLetters,
  correct,
  setUsedLetters,
  tries,
  setTries,
  selectedWord,
  setSelectedWord,
  playing,
  wordGuess,
  guessingWord,
  setGuessingWord,
  setPhraseGuess,
  setWordGuess,
  setGuessingPhrase,
  selectedId,
  setSelectedId
}) {
  let letters = word.split("");

  useEffect(() => {
    // if (wordGuess.length === word.length) {
    if (wordGuess === word) {
      setUsedLetters(usedLetters.concat(letters));
      setTries(tries - 1);
      setSelectedWord("");
      setGuessingWord(false);
      setWordGuess("");
    }
    // }
  });

  // const handleChange = (e) => {
  //   if (e.target.value.length === word.length) {
  //     if (e.target.value === word) {
  //       setUsedLetters(usedLetters.concat(letters));
  //       setTries(tries - 1);
  //       setSelectedWord("");
  //     } else {
  //       setTimeout(() => {
  //         setTries(tries - 2);
  //         setSelectedWord("");
  //       }, 500);
  //     }
  //   }
  // };

  const handleClick = () => {
    if (correct === null) {
      if (
        (selectedId !== id || !guessingWord) &&
        letters.every((l) => usedLetters.includes(l)) === false
      ) {
        setSelectedWord(word);
        setGuessingWord(true);
        setPhraseGuess("");
        setWordGuess("");
        setGuessingPhrase(false);
        setSelectedId(id);
      } else {
        setSelectedWord("");
        setGuessingWord(false);
        setPhraseGuess("");
        setWordGuess("");
        setGuessingPhrase(false);
        setSelectedId(null);
      }
    }
  };

  const className = () => {
    if (selectedWord !== "" && playing) {
      if (selectedId === id) {
        return "selectedWord";
      } else if (selectedId !== null && selectedId !== id) {
        return "blurredWord";
      }
    } else {
      return "word";
    }
  };

  return (
    <div>
      <div
        // className={!completing ? "word" : "selectedWord"}
        className={className()}
        onClick={handleClick}
        id="wordBoxes"
      >
        {letters.map((letter) => (
          <Letter letter={letter} usedLetters={usedLetters} correct={correct} />
        ))}
        <br />
      </div>
      {selectedId !== id || selectedWord !== word ? null : (
        <input
          className={
            wordGuess.length <= selectedWord.length ? "inputWord" : "wrongWord"
          }
          placeholder="guess the word"
          // onChange={handleChange}
          maxlength={word.length}
          disabled
          value={wordGuess}
          type="text"
        />
      )}
    </div>
  );
}

export default Word;
