function Letter({ letter, usedLetters, correct }) {
    return (
      <div
        className={
          usedLetters.some((l) => l.toLowerCase() === letter.toLowerCase())
            ? "letter"
            : "hiddenLetter"
        }
      >
        {letter.toUpperCase()}
      </div>
    );
  }
  
  export default Letter;
  