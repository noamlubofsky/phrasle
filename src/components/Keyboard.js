import React, { useState } from "react";

function Keyboard({
  usedLetters,
  setUsedLetters,
  tries,
  setTries,
  alphabet,
  setCorrect,
  playing,
  afford,
  setAfford,
  setSelectedWord,
  phraseGuess,
  setPhraseGuess,
  wordGuess,
  setWordGuess,
  guessingPhrase,
  setGuessingPhrase,
  guessingWord,
  setGuessingWord,
  correct,
  selectedWord
}) {
  const [clicked, setClicked] = useState("");

  let letterPrices = {
    a: 2,
    b: 1,
    c: 1,
    d: 1,
    e: 2,
    f: 1,
    g: 1,
    h: 1,
    i: 2,
    j: 0.5,
    k: 1,
    l: 2,
    m: 1,
    n: 1,
    o: 2,
    p: 1,
    q: 0.5,
    r: 2,
    s: 2,
    t: 2,
    u: 2,
    v: 0.5,
    w: 0.5,
    x: 0.5,
    y: 1,
    z: 0.5
  };

  const handleClick = (e) => {
    if (guessingPhrase) {
      setPhraseGuess(phraseGuess + e.target.value);
    }
    if (guessingWord) {
      // if (wordGuess.length < selectedWord.length) {
      setWordGuess(wordGuess + e.target.value);
      // }
    }
    if (!guessingPhrase && !guessingWord) {
      setClicked(e.target.value);
      setTimeout(() => setClicked(""), 700);
      setSelectedWord("");
      if (tries > 0 && playing) {
        if (tries >= letterPrices[e.target.value]) {
          setUsedLetters([...usedLetters, e.target.value]);
          setTries(tries - letterPrices[e.target.value]);
        } else if (tries < letterPrices[e.target.value]) {
          setAfford(false);
          setTimeout(() => setAfford(true), 700);
        }
      } else if (playing) {
        setUsedLetters(alphabet);
        setCorrect(false);
      }

      if (tries === letterPrices[e.target.value]) {
        // setUsedLetters(alphabet);
        document.getElementById("myTextField").focus();
      }
    }
  };

  const backspace = () => {
    if (guessingPhrase) {
      setPhraseGuess(phraseGuess.slice(0, -1));
    }
    if (guessingWord) {
      setWordGuess(wordGuess.slice(0, -1));
    }
  };

  const keyClass = (v) => {
    if (guessingPhrase || guessingWord) {
      return "key";
    } else if (tries === 0 || usedLetters.some((l) => l.toLowerCase() === v)) {
      return "selectedWrongKey";
    } else {
      return "key";
    }
  };

  return (
    <div>
      <button className={keyClass("q")} value={"q"} onClick={handleClick}>
        <div value={"q"} className="innerLetter">
          Q
        </div>
        {guessingPhrase || guessingWord || correct !== null ? null : (
          <div className={!afford && clicked === "q" ? "tooMuch" : "price"}>
            50¢
          </div>
        )}
      </button>
      <button className={keyClass("w")} value={"w"} onClick={handleClick}>
        <div value={"w"} className="innerLetter">
          W
        </div>
        {guessingPhrase || guessingWord || correct !== null ? null : (
          <div
            value={"w"}
            className={!afford && clicked === "w" ? "tooMuch" : "price"}
          >
            50¢
          </div>
        )}
      </button>
      <button className={keyClass("e")} value={"e"} onClick={handleClick}>
        <div value={"e"} className="innerLetter">
          E
        </div>
        {guessingPhrase || guessingWord || correct !== null ? null : (
          <div
            value={"e"}
            className={!afford && clicked === "e" ? "tooMuch" : "price"}
          >
            $2
          </div>
        )}
      </button>
      <button className={keyClass("r")} value={"r"} onClick={handleClick}>
        <div value={"r"} className="innerLetter">
          R
        </div>
        {guessingPhrase || guessingWord || correct !== null ? null : (
          <div
            value={"r"}
            className={!afford && clicked === "r" ? "tooMuch" : "price"}
          >
            $2
          </div>
        )}
      </button>
      <button className={keyClass("t")} value={"t"} onClick={handleClick}>
        <div value={"t"} className="innerLetter">
          T
        </div>
        {guessingPhrase || guessingWord || correct !== null ? null : (
          <div
            value={"t"}
            className={!afford && clicked === "t" ? "tooMuch" : "price"}
          >
            $2
          </div>
        )}
      </button>
      <button className={keyClass("y")} value={"y"} onClick={handleClick}>
        <div value={"y"} className="innerLetter">
          Y
        </div>
        {guessingPhrase || guessingWord || correct !== null ? null : (
          <div
            value={"y"}
            className={!afford && clicked === "y" ? "tooMuch" : "price"}
          >
            $1
          </div>
        )}
      </button>
      <button className={keyClass("u")} value={"u"} onClick={handleClick}>
        <div value={"u"} className="innerLetter">
          U
        </div>
        {guessingPhrase || guessingWord || correct !== null ? null : (
          <div
            value={"u"}
            className={!afford && clicked === "u" ? "tooMuch" : "price"}
          >
            $2
          </div>
        )}
      </button>
      <button className={keyClass("i")} value={"i"} onClick={handleClick}>
        <div value={"i"} className="innerLetter">
          I
        </div>
        {guessingPhrase || guessingWord || correct !== null ? null : (
          <div
            value={"i"}
            className={!afford && clicked === "i" ? "tooMuch" : "price"}
          >
            $2
          </div>
        )}
      </button>
      <button className={keyClass("o")} value={"o"} onClick={handleClick}>
        <div value={"o"} className="innerLetter">
          O
        </div>
        {guessingPhrase || guessingWord || correct !== null ? null : (
          <div
            value={"o"}
            className={!afford && clicked === "o" ? "tooMuch" : "price"}
          >
            $2
          </div>
        )}
      </button>
      <button className={keyClass("p")} value={"p"} onClick={handleClick}>
        <div value={"p"} className="innerLetter">
          P
        </div>
        {guessingPhrase || guessingWord || correct !== null ? null : (
          <div
            value={"p"}
            className={!afford && clicked === "p" ? "tooMuch" : "price"}
          >
            $1
          </div>
        )}
      </button>
      <br />
      <button className={keyClass("a")} value={"a"} onClick={handleClick}>
        <div value={"a"} className="innerLetter">
          A
        </div>
        {guessingPhrase || guessingWord || correct !== null ? null : (
          <div
            value={"a"}
            className={!afford && clicked === "a" ? "tooMuch" : "price"}
          >
            $2
          </div>
        )}
      </button>
      <button className={keyClass("s")} value={"s"} onClick={handleClick}>
        <div value={"s"} className="innerLetter">
          S
        </div>
        {guessingPhrase || guessingWord || correct !== null ? null : (
          <div
            value={"s"}
            className={!afford && clicked === "s" ? "tooMuch" : "price"}
          >
            $2
          </div>
        )}
      </button>
      <button className={keyClass("d")} value={"d"} onClick={handleClick}>
        <div value={"d"} className="innerLetter">
          D
        </div>
        {guessingPhrase || guessingWord || correct !== null ? null : (
          <div
            value={"d"}
            className={!afford && clicked === "d" ? "tooMuch" : "price"}
          >
            $1
          </div>
        )}
      </button>
      <button className={keyClass("f")} value={"f"} onClick={handleClick}>
        <div value={"f"} className="innerLetter">
          F
        </div>
        {guessingPhrase || guessingWord || correct !== null ? null : (
          <div
            value={"f"}
            className={!afford && clicked === "f" ? "tooMuch" : "price"}
          >
            $1
          </div>
        )}
      </button>
      <button className={keyClass("g")} value={"g"} onClick={handleClick}>
        <div value={"g"} className="innerLetter">
          G
        </div>
        {guessingPhrase || guessingWord || correct !== null ? null : (
          <div
            value={"g"}
            className={!afford && clicked === "g" ? "tooMuch" : "price"}
          >
            $1
          </div>
        )}
      </button>
      <button className={keyClass("h")} value={"h"} onClick={handleClick}>
        <div value={"h"} className="innerLetter">
          H
        </div>
        {guessingPhrase || guessingWord || correct !== null ? null : (
          <div
            value={"h"}
            className={!afford && clicked === "h" ? "tooMuch" : "price"}
          >
            $1
          </div>
        )}
      </button>
      <button className={keyClass("j")} value={"j"} onClick={handleClick}>
        <div value={"j"} className="innerLetter">
          J
        </div>
        {guessingPhrase || guessingWord || correct !== null ? null : (
          <div
            value={"j"}
            className={!afford && clicked === "j" ? "tooMuch" : "price"}
          >
            50¢
          </div>
        )}
      </button>
      <button className={keyClass("k")} value={"k"} onClick={handleClick}>
        <div value={"k"} className="innerLetter">
          K
        </div>
        {guessingPhrase || guessingWord || correct !== null ? null : (
          <div
            value={"k"}
            className={!afford && clicked === "k" ? "tooMuch" : "price"}
          >
            $1
          </div>
        )}
      </button>
      <button className={keyClass("l")} value={"l"} onClick={handleClick}>
        <div value={"l"} className="innerLetter">
          L
        </div>
        {guessingPhrase || guessingWord || correct !== null ? null : (
          <div
            value={"l"}
            className={!afford && clicked === "l" ? "tooMuch" : "price"}
          >
            $2
          </div>
        )}
      </button>
      <br />
      <button className={keyClass("z")} value={"z"} onClick={handleClick}>
        <div value={"z"} className="innerLetter">
          Z
        </div>
        {guessingPhrase || guessingWord || correct !== null ? null : (
          <div
            value={"z"}
            className={!afford && clicked === "z" ? "tooMuch" : "price"}
          >
            50¢
          </div>
        )}
      </button>
      <button className={keyClass("x")} value={"x"} onClick={handleClick}>
        <div value={"x"} className="innerLetter">
          X
        </div>
        {guessingPhrase || guessingWord || correct !== null ? null : (
          <div
            value={"x"}
            className={!afford && clicked === "x" ? "tooMuch" : "price"}
          >
            50¢
          </div>
        )}
      </button>
      <button className={keyClass("c")} value={"c"} onClick={handleClick}>
        <div value={"c"} className="innerLetter">
          C
        </div>
        {guessingPhrase || guessingWord || correct !== null ? null : (
          <div
            value={"c"}
            className={!afford && clicked === "c" ? "tooMuch" : "price"}
          >
            $1
          </div>
        )}
      </button>
      <button className={keyClass("v")} value={"v"} onClick={handleClick}>
        <div value={"v"} className="innerLetter">
          V
        </div>
        {guessingPhrase || guessingWord || correct !== null ? null : (
          <div
            value={"v"}
            className={!afford && clicked === "v" ? "tooMuch" : "price"}
          >
            50¢
          </div>
        )}
      </button>
      <button className={keyClass("b")} value={"b"} onClick={handleClick}>
        <div value={"b"} className="innerLetter">
          B
        </div>
        {guessingPhrase || guessingWord || correct !== null ? null : (
          <div
            value={"b"}
            className={!afford && clicked === "b" ? "tooMuch" : "price"}
          >
            $1
          </div>
        )}
      </button>
      <button className={keyClass("n")} value={"n"} onClick={handleClick}>
        <div value={"n"} className="innerLetter">
          N
        </div>
        {guessingPhrase || guessingWord || correct !== null ? null : (
          <div
            value={"n"}
            className={!afford && clicked === "n" ? "tooMuch" : "price"}
          >
            $1
          </div>
        )}
      </button>
      <button className={keyClass("m")} value={"m"} onClick={handleClick}>
        <div value={"m"} className="innerLetter">
          M
        </div>
        {guessingPhrase || guessingWord || correct !== null ? null : (
          <div
            value={"m"}
            className={!afford && clicked === "m" ? "tooMuch" : "price"}
          >
            $1
          </div>
        )}
      </button>

      {(!guessingPhrase && !guessingWord) || correct !== null ? null : (
        <div>
          <button className="spacekey" value={" "} onClick={handleClick}>
            <div value={" "} className="innerLetter">
              SPACE
            </div>
          </button>
          <button
            className="backspace"
            // value={" "}
            onClick={backspace}
          >
            <div value={" "} className="innerLetter">
              ← BACK
            </div>
          </button>
        </div>
      )}
    </div>
  );
}

export default Keyboard;
