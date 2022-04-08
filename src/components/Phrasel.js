import Word from "./Word";
import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import CountUp from "react-countup";
import Progressbar from "./Progressbar";

function Phrasel({
  phrase,
  usedLetters,
  setUsedLetters,
  tries,
  setTries,
  alphabet,
  correct,
  setCorrect,
  guessing,
  setGuessing,
  phraseLetters,
  seconds,
  setSeconds,
  minutes,
  setMinutes,
  hint,
  setHint,
  timeLeft,
  setTimeLeft,
  playing,
  selectedWord,
  setSelectedWord,
  phraseGuess,
  setPhraseGuess,
  wordGuess,
  setWordGuess,
  guessingPhrase,
  setGuessingPhrase,
  guessingWord,
  setGuessingWord
}) {
  // const [guess, setGuess] = useState("");
  const { width, height } = useWindowSize();
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    if (correct === null) {
      let myInterval = setInterval(() => {
        if (seconds >= 0) {
          setSeconds(seconds + 1);
        }
        if (seconds === 59) {
          setMinutes(minutes + 1);
          setSeconds(0);
        }
      }, 1000);
      return () => {
        clearInterval(myInterval);
      };
    } else {
      setHint(false);
    }
  });

  useEffect(() => {
    if (tries === 0) {
      let leftInterval = setInterval(() => {
        if (timeLeft > 0) {
          setTimeLeft(timeLeft - 1);
        }
      }, 100);
      return () => {
        clearInterval(leftInterval);
      };
    }
  });

  useEffect(() => {
    if (tries === 0 && correct === null) {
      setGuessingPhrase(true);
    }
  });

  useEffect(() => {
    if (timeLeft === 0) {
      setCorrect(false);
      setUsedLetters(alphabet);
      setTimeLeft(100);
      setSelectedWord("");
    }
  });

  useEffect(() => {
    if (
      phraseLetters.every((element) => usedLetters.includes(element)) &&
      correct !== false
    ) {
      // setUsedLetters(alphabet);
      setCorrect(true);
      setSelectedWord("");
      // console.log(usedLetters)
    }
  });

  useEffect(() => {
    if (phrase.phrase.toString().toLowerCase() === phraseGuess.toLowerCase()) {
      setUsedLetters(alphabet);
      setCorrect(true);
      setSelectedWord("");
      window.scrollTo(0, 0);
      setPhraseGuess("");
    }
  });

  // const containsAll = phraseLetters.every((element) => {
  //   return usedLetters.includes(element);
  // });

  let phraseWords = phrase.phrase.split(" ");

  // const handleChange = (e) => {
  //   setGuess(e.target.value);
  //   if (
  //     phrase.phrase.toString().toLowerCase() === e.target.value.toLowerCase()
  //   ) {
  //     setUsedLetters(alphabet);
  //     setCorrect(true);
  //     setSelectedWord("");
  //     window.scrollTo(0, 0);
  //     setPhraseGuess("");
  //     setWordGuess("");
  //     setGuessingPhrase(false);
  //     setGuessingWord(false);
  //   }
  // };

  const inputClass = () => {
    if (tries === 0) {
      return "noLine";
    } else {
      return "inputGuess";
    }
  };

  const guessThePhrase = () => {
    setGuessingPhrase(!guessingPhrase);
    setWordGuess("");
  };

  return (
    <div>
      <div className="wordContainer">
        {phraseWords.map((word, i) => (
          <Word
            id={i}
            key={i}
            word={word}
            usedLetters={usedLetters}
            correct={correct}
            value={word}
            setUsedLetters={setUsedLetters}
            tries={tries}
            setTries={setTries}
            selectedWord={selectedWord}
            setSelectedWord={setSelectedWord}
            playing={playing}
            wordGuess={wordGuess}
            guessingWord={guessingWord}
            setGuessingWord={setGuessingWord}
            setPhraseGuess={setPhraseGuess}
            setWordGuess={setWordGuess}
            setGuessingPhrase={setGuessingPhrase}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        ))}
      </div>

      {correct === true || (correct === false && tries === 0) ? null : (
        <div>
          {!hint ? null : <div className="hint">{phrase.hint}</div>}

          {selectedWord !== "" ? null : (
            <div onClick={guessThePhrase}>
              <input
                type="text"
                // onChange={(e) => handleChange(e)}
                className={inputClass()}
                inputGuess
                id="myTextField"
                placeholder={
                  guessingPhrase
                    ? "Complete the phrase"
                    : "Tap to guess the phrase"
                }
                onFocus={() => setGuessing(true)}
                disabled
                value={phraseGuess}
              />
            </div>
          )}

          {tries > 0 ? null : (
            <Progressbar
              bgcolor="rgb(88, 0, 0)"
              progress={timeLeft}
              height={5}
            />
          )}
          <br />
        </div>
      )}
      {correct === true ? <Confetti width={width} height={height} /> : null}
      {correct === true ? (
        <div>
          <h3>You Got It!</h3>
          <h5>
            Total words:{" "}
            <CountUp start={0} end={phraseWords.length} duration={0.3} />
          </h5>
          <h5>
            Total letters:{" "}
            <CountUp
              start={0}
              end={phrase.phrase.split("").filter((s) => s !== " ").length}
              duration={0.3}
            />
          </h5>
          <h5>
            Different Letters:{" "}
            <CountUp
              delay={0.3}
              start={0}
              end={phraseLetters.length}
              duration={0.5}
            />
          </h5>
          <h5>
            Balance used: ${/* {phraseLetters.length + 5}
            {tries} */}
            <CountUp
              delay={0.8}
              start={0}
              end={phraseLetters.length + 5 - tries}
              duration={0.7}
              decimals={2}
            />
          </h5>
          <h5>
            Balance remaining: $
            <CountUp
              delay={1.5}
              start={0}
              end={tries}
              duration={0.7}
              decimals={2}
            />
          </h5>
          <h5>
            {`Time: `}
            <CountUp delay={2.2} start={0} end={minutes} duration={1} />:
            {seconds < 10 ? "0" : null}
            <CountUp delay={2.3} start={0} end={seconds} duration={0.5} />
          </h5>
          {/* <h3>
            Your score:{" "}
            <CountUp
              delay={1.5}
              start={0}
              end={phraseWords.length + phraseLetters.length + tries}
              duration={1}
            />
            !
          </h3> */}
        </div>
      ) : null}
      {correct === false ? <h5>You'll get 'em next time</h5> : null}
    </div>
  );
}

export default Phrasel;
