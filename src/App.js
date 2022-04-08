import Phrasel from "./components/Phrasel";
import Keyboard from "./components/Keyboard";
import React, { useEffect, useState } from "react";
import Word from "./components/Word";

var phrasesArray = [
  {
    phrase: "a blessing in disguise",
    hint: "a good thing that seemed bad at first"
  },
  {
    phrase: "a dime a dozen",
    hint: "Something common"
  },
  {
    phrase: "beat around the bush",
    hint: "Avoid saying what you mean, usually because it is uncomfortable"
  },
  {
    phrase: "better late than never",
    hint: "Better to arrive late than not to come at all"
  },
  {
    phrase: "bite the bullet",
    hint: "To get something over with because it is inevitable"
  },
  {
    phrase: "break a leg",
    hint: "Good luck"
  },
  {
    phrase: "call it a day",
    hint: "Stop working on something"
  },
  {
    phrase: "cut somebody some slack",
    hint: "Don't be so critical"
  },
  {
    phrase: "cutting corners",
    hint: "Doing something poorly in order to save time or money"
  },
  {
    phrase: "easy does it",
    hint: "Slow down"
  },
  {
    phrase: "get out of hand",
    hint: "Get out of control"
  },
  {
    phrase: "get something out of your system",
    hint: "Do the thing you've been wanting to do so you can move on"
  },
  {
    phrase: "get your act together",
    hint: "Work better or leave"
  },
  {
    phrase: "give someone the benefit of the doubt",
    hint: "Trust what someone says"
  },
  {
    phrase: "go back to the drawing board",
    hint: "Start over"
  },
  {
    phrase: "hang in there",
    hint: "Don't give up"
  },
  {
    phrase: "hit the sack",
    hint: "Go to sleep"
  },
  {
    phrase: "its not rocket science",
    hint: "It's not complicated"
  },
  {
    phrase: "let someone off the hook",
    hint: "To not hold someone responsible for something"
  },
  {
    phrase: "make a long story short",
    hint: "Tell something briefly"
  },
  {
    phrase: "miss the boat",
    hint: "It's too late"
  },
  {
    phrase: "no pain no gain",
    hint: "You have to work for what you want"
  },
  {
    phrase: "on the ball",
    hint: "Doing a good job"
  },
  {
    phrase: "pull someones leg",
    hint: "To joke with someone"
  },
  {
    phrase: "pull yourself together",
    hint: "Calm down"
  },
  {
    phrase: "so far so good",
    hint: "Things are going well so far"
  },
  {
    phrase: "speak of the devil",
    hint: "The person we were just talking about showed up!"
  },
  {
    phrase: "thats the last straw",
    hint: "My patience has run out"
  },
  {
    phrase: "the best of both worlds",
    hint: "An ideal situation"
  },
  {
    phrase: "time flies when youre having fun",
    hint: "You don't notice how long something lasts when it's fun"
  },
  {
    phrase: "to get bent out of shape",
    hint: "To get upset"
  },
  {
    phrase: "to make matters worse",
    hint: "Make a problem worse"
  },
  {
    phrase: "under the weather",
    hint: "Sick"
  },
  {
    phrase: "well cross that bridge when we come to it",
    hint: "Let's not talk about that problem right now"
  },
  {
    phrase: "wrap your head around something",
    hint: "Understand something complicated"
  },
  {
    phrase: "you can say that again",
    hint: "That's true, I agree"
  },
  {
    phrase: "your guess is as good as mine",
    hint: "I have no idea"
  },
  {
    phrase: "a bird in the hand is worth two in the bush",
    hint: "What you have is worth more than what you might have later"
  },
  {
    phrase: "a penny for your thoughts",
    hint: "Tell me what you're thinking"
  },
  {
    phrase: "a penny saved is a penny earned",
    hint: "Money you save today you can spend later"
  },
  {
    phrase: "a perfect storm",
    hint: "the worst possible situation"
  },
  {
    phrase: "a picture is worth a thousand words",
    hint: "Better to show than tell"
  },
  {
    phrase: "actions speak louder than words",
    hint: "Believe what people do and not what they say"
  },
  {
    phrase: "add insult to injury",
    hint: "To make a bad situation worse"
  },
  {
    phrase: "barking up the wrong tree",
    hint: "To be mistaken, to be looking for solutions in the wrong place"
  },
  {
    phrase: "birds of a feather flock together",
    hint: "People who are alike are often friends (usually used negatively)"
  },
  {
    phrase: "bite off more than you can chew",
    hint: "Take on a project that you cannot finish"
  },
  {
    phrase: "break the ice",
    hint: "Make people feel more comfortable"
  },
  {
    phrase: "by the skin of your teeth",
    hint: "Just barely"
  },
  {
    phrase: "comparing apples to oranges",
    hint: "Comparing two things that cannot be compared"
  },
  {
    phrase: "costs an arm and a leg",
    hint: "Very expensive"
  },
  {
    phrase: "do something at the drop of a hat",
    hint: "Do something without having planned beforehand"
  },
  {
    phrase: "do unto others as you would have them do unto you",
    hint: 'Treat people fairly. Also known as "The Golden Rule"'
  },
  {
    phrase: "dont count your chickens before they hatch",
    hint: "Don't count on something good happening until it's happened."
  },
  {
    phrase: "dont cry over spilt milk",
    hint: "There's no reason to complain about something that can't be fixed"
  },
  {
    phrase: "dont give up your day job",
    hint: "You're not very good at this"
  },
  {
    phrase: "dont put all your eggs in one basket",
    hint: "What you're doing is too risky"
  },
  {
    phrase: "every cloud has a silver lining",
    hint: "Good things come after bad things"
  },
  {
    phrase: "get a taste of your own medicine",
    hint: "Get treated the way you've been treating others (negative)"
  },
  {
    phrase: "give someone the cold shoulder",
    hint: "Ignore someone"
  },
  {
    phrase: "go on a wild goose chase",
    hint: "To do something pointless"
  },
  {
    phrase: "good things come to those who wait",
    hint: "Be patient"
  },
  {
    phrase: "he has bigger fish to fry",
    hint:
      "He has bigger things to take care of than what we are talking about now"
  },
  {
    phrase: "hes a chip off the old block",
    hint: "The son is like the father"
  },
  {
    phrase: "hit the nail on the head",
    hint: "Get something exactly right"
  },
  {
    phrase: "ignorance is bliss",
    hint: "You're better off not knowing"
  },
  {
    phrase: "it aint over till the fat lady sings",
    hint: "This isn't over yet"
  },
  {
    phrase: "it takes one to know one",
    hint: "You're just as bad as I am"
  },
  {
    phrase: "its a piece of cake",
    hint: "It's easy"
  },
  {
    phrase: "its raining cats and dogs",
    hint: "It's raining hard"
  },
  {
    phrase: "kill two birds with one stone",
    hint: "Get two things done with a single action"
  },
  {
    phrase: "let the cat out of the bag",
    hint: "Give away a secret"
  },
  {
    phrase: "live and learn",
    hint: "I made a mistake"
  },
  {
    phrase: "look before you leap",
    hint: "Take only calculated risks"
  },
  {
    phrase: "on thin ice",
    hint: "On probation. If you make another mistake, there will be trouble."
  },
  {
    phrase: "once in a blue moon",
    hint: "Rarely"
  },
  {
    phrase: "play devils advocate",
    hint: "To argue the opposite, just for the sake of argument"
  },
  {
    phrase: "put something on ice",
    hint: "Put a projet on hold"
  },
  {
    phrase: "rain on someones parade",
    hint: "To spoil something"
  },
  {
    phrase: "saving for a rainy day",
    hint: "Saving money for later"
  },
  {
    phrase: "slow and steady wins the race",
    hint: "Reliability is more important than speed"
  },
  {
    phrase: "spill the beans",
    hint: "Give away a secret"
  },
  {
    phrase: "take a rain check",
    hint: "Postpone a plan"
  },
  {
    phrase: "take it with a grain of salt",
    hint: "Don’t take it too seriously"
  },
  {
    phrase: "the ball is in your court",
    hint: "It's your decision"
  },
  {
    phrase: "the best thing since sliced bread",
    hint: "A really good invention"
  },
  {
    phrase: "the devil is in the details",
    hint:
      "It looks good from a distance, but when you look closer, there are problems"
  },
  {
    phrase: "the early bird gets the worm",
    hint: "The first people who arrive will get the best stuff"
  },
  {
    phrase: "the elephant in the room",
    hint: "The big issue, the problem people are avoiding"
  },
  {
    phrase: "the whole nine yards",
    hint: "Everything, all the way."
  },
  {
    phrase: "there are other fish in the sea",
    hint: "It's ok to miss this opportunity. Others will arise."
  },
  {
    phrase: "theres a method to his madness",
    hint: "He seems crazy but actually hes clever"
  },
  {
    phrase: "theres no such thing as a free lunch",
    hint: "Nothing is entirely free"
  },
  {
    phrase: "throw caution to the wind",
    hint: "Take a risk"
  },
  {
    phrase: "you cant have your cake and eat it too",
    hint: "You can't have everything"
  },
  {
    phrase: "you cant judge a book by its cover",
    hint: "This person or thing may look bad, but it's good inside"
  },
  {
    phrase: "a little learning is a dangerous thing",
    hint: "People who don't understand something fully are dangerous"
  },
  {
    phrase: "a snowball effect",
    hint: "Events have momentum and build upon each other"
  },
  {
    phrase: "a snowballs chance in hell",
    hint: "No chance at all"
  },
  {
    phrase: "a stitch in time saves nine",
    hint: "Fix the problem now because it will get worse later"
  },
  {
    phrase: "a storm in a teacup",
    hint: "A big fuss about a small problem"
  },
  {
    phrase: "an apple a day keeps the doctor away",
    hint: "Apples are good for you"
  },
  {
    phrase: "an ounce of prevention is worth a pound of cure",
    hint:
      "You can prevent a problem with little effort. Fixing it later is harder."
  },
  {
    phrase: "as right as rain",
    hint: "Perfect"
  },
  {
    phrase: "bolt from the blue",
    hint: "Something that happened without warning"
  },
  {
    phrase: "burn bridges",
    hint: "Destroy relationships"
  },
  {
    phrase: "calm before the storm",
    hint: "Something bad is coming, but right now it's calm"
  },
  {
    phrase: "come rain or shine",
    hint: "No matter what"
  },
  {
    phrase: "curiosity killed the cat",
    hint: "Stop asking questions"
  },
  {
    phrase: "cut the mustard",
    hint: "Do a good job"
  },
  {
    phrase: "dont beat a dead horse",
    hint: "Move on, this subject is over"
  },
  {
    phrase: "every dog has his day",
    hint: "Everyone gets a chance at least once"
  },
  {
    phrase: "familiarity breeds contempt",
    hint: "The better you know someone the less you like him"
  },
  {
    phrase: "fit as a fiddle",
    hint: "In good health"
  },
  {
    phrase: "fortune favors the bold",
    hint: "Take risks"
  },
  {
    phrase: "get a second wind",
    hint: "Have more energy after having been tired"
  },
  {
    phrase: "get wind of something",
    hint: "Hear news of something secret"
  },
  {
    phrase: "go down in flames",
    hint: "Fail spectacularly"
  },
  {
    phrase: "haste makes waste",
    hint: "You'll make mistakes if you rush through something"
  },
  {
    phrase: "have your head in the clouds",
    hint: "Not be concentrating"
  },
  {
    phrase: "he who laughs last laughs loudest",
    hint: "I'll get you back for what you did"
  },
  {
    phrase: "hear something straight from the horses mouth",
    hint: "Hear something from the person involved"
  },
  {
    phrase: "hes not playing with a full deck",
    hint: "He's dumb"
  },
  {
    phrase: "hes off his rocker",
    hint: "He's crazy"
  },
  {
    phrase: "hes sitting on the fence",
    hint: "He can't make up his mind"
  },
  {
    phrase: "it is a poor workman who blames his tools",
    hint: "If you can't do the job, don't blame it on others"
  },
  {
    phrase: "it is always darkest before the dawn",
    hint: "Things are going to get better"
  },
  {
    phrase: "it takes two to tango",
    hint: "One person alone isn't responsible. Both people are involved."
  },
  {
    phrase: "jump on the bandwagon",
    hint: "Follow a trend, do what everyone else is doing"
  },
  {
    phrase: "know which way the wind is blowing",
    hint: "Understand the situation (usually negative)"
  },
  {
    phrase: "leave no stone unturned",
    hint: "Look everywhere"
  },
  {
    phrase: "let sleeping dogs lie",
    hint: "Stop discussing an issue"
  },
  {
    phrase: "like riding a bicycle",
    hint: "Something you never forget how to do"
  },
  {
    phrase: "like two peas in a pod",
    hint: "They're always together"
  },
  {
    phrase: "make hay while the sun shines",
    hint: "Take advantage of a good situation"
  },
  {
    phrase: "on cloud nine",
    hint: "Very happy"
  },
  {
    phrase: "once bitten twice shy",
    hint: "You're more cautious when you've been hurt before"
  },
  {
    phrase: "out of the frying pan and into the fire",
    hint: "Things are going from bad to worse"
  },
  {
    phrase: "run like the wind",
    hint: "Run fast"
  },
  {
    phrase: "shape up or ship out",
    hint: "Work better or leave"
  },
  {
    phrase: "snowed under",
    hint: "Busy"
  },
  {
    phrase: "that ship has sailed",
    hint: "It's too late"
  },
  {
    phrase: "the pot calling the kettle black",
    hint: "Someone criticizing someone else he is just as bad"
  },
  {
    phrase: "there are clouds on the horizon",
    hint: "Trouble is coming"
  },
  {
    phrase: "those who live in glass houses shouldnt throw stones",
    hint: "People who are morally questionable shouldn't criticize others"
  },
  {
    phrase: "through thick and thin",
    hint: "In good times and in bad times"
  },
  {
    phrase: "time is money",
    hint: "Work quickly"
  },
  {
    phrase: "waste not want not",
    hint: "Don't waste things and you'll always have enough"
  },
  {
    phrase: "we see eye to eye",
    hint: "We agree"
  },
  {
    phrase: "weather the storm",
    hint: "Go through something difficult"
  },
  {
    phrase: "well begun is half done",
    hint: "Getting a good start is important"
  },
  {
    phrase: "when it rains it pours",
    hint: "Everything is going wrong at once"
  },
  {
    phrase: "you can catch more flies with honey than you can with vinegar",
    hint: "You'll get what you want by being nice"
  },
  {
    phrase: "you can lead a horse to water but you cant make him drink",
    hint: "You can't force someone to make the right decision"
  },
  {
    phrase: "you cant make an omelet without breaking some eggs",
    hint: "There's always a cost to doing something"
  }
];

export default function App() {
  const [usedLetters, setUsedLetters] = useState([]);
  const [phrase, setPhrase] = useState(
    phrasesArray[Math.floor(Math.random() * phrasesArray.length)]
  );
  const [tries, setTries] = useState(phrase.phrase.split(" ").length * 2);
  const [correct, setCorrect] = useState(null);
  const [oneAway, setOneAway] = useState(false);
  const [guessing, setGuessing] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [afford, setAfford] = useState(true);
  const [hint, setHint] = useState(false);
  const [counter, setCounter] = useState(10);
  const [timeLeft, setTimeLeft] = useState(100);
  const [selectedWord, setSelectedWord] = useState("");
  const [phraseGuess, setPhraseGuess] = useState("");
  const [wordGuess, setWordGuess] = useState("");
  const [guessingPhrase, setGuessingPhrase] = useState(false);
  const [guessingWord, setGuessingWord] = useState(false);

  // function findLongestWordLength(str) {
  //   console.log(
  //     Math.max(...str.split(" ").filter((word) => word.length === 11))
  //   );
  // }

  // function findLongest(arr) {
  //   arr.forEach((obj) => findLongestWordLength(obj.phrase));
  // }

  // function find(arr) {
  //   return arr.indexOf(
  //     arr.find((obj) => obj.phrase === "familiarity breeds contempt")
  //   );
  // }

  // console.log("find longest word", find(phrasesArray));

  useEffect(() => {
    let usedCorrectLetters = usedLetters.filter((l) =>
      phraseLetters.includes(l)
    );

    if (usedCorrectLetters.length === phraseLetters.length - 1) {
      setOneAway(true);
      setGuessing(true);
    }

    if (tries === 0) {
      if (counter >= 1) {
        const timer =
          counter >= 1 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
      } else {
        setUsedLetters(alphabet);
        setCorrect(false);
        setSelectedWord("");
        setPhraseGuess("");
        setWordGuess("");
        setGuessingPhrase(false);
        setGuessingWord(false);
      }
    }

    setTimeout(() => setUsedLetters(["c"]), 100);
    setTimeout(() => setUsedLetters(["c", "a"]), 200);
    setTimeout(() => setUsedLetters(["c", "a", "n"]), 300);
    setTimeout(() => setUsedLetters(["c", "a", "n", "y"]), 400);
    setTimeout(() => setUsedLetters(["c", "a", "n", "y", "o"]), 500);
    setTimeout(() => setUsedLetters(["c", "a", "n", "y", "o", "u"]), 600);
    setTimeout(() => setUsedLetters(["c", "a", "n", "y", "o", "u", "g"]), 700);
    setTimeout(
      () => setUsedLetters(["c", "a", "n", "y", "o", "u", "g", "e"]),
      800
    );
    setTimeout(
      () => setUsedLetters(["c", "a", "n", "y", "o", "u", "g", "e", "s"]),
      900
    );
    setTimeout(
      () => setUsedLetters(["c", "a", "n", "y", "o", "u", "g", "e", "s", "t"]),
      1000
    );
    setTimeout(
      () =>
        setUsedLetters(["c", "a", "n", "y", "o", "u", "g", "e", "s", "t", "h"]),
      1100
    );
    setTimeout(
      () =>
        setUsedLetters([
          "c",
          "a",
          "n",
          "y",
          "o",
          "u",
          "g",
          "e",
          "s",
          "t",
          "h",
          "p"
        ]),
      1200
    );
    setTimeout(
      () =>
        setUsedLetters([
          "c",
          "a",
          "n",
          "y",
          "o",
          "u",
          "g",
          "e",
          "s",
          "t",
          "h",
          "p",
          "r"
        ]),
      1300
    );
    setTimeout(
      () =>
        setUsedLetters([
          "c",
          "a",
          "n",
          "y",
          "o",
          "u",
          "g",
          "e",
          "s",
          "t",
          "h",
          "p",
          "r",
          "?"
        ]),
      1400
    );
  }, [counter]);

  const toHome = () => {
    setPlaying(false);
    setCorrect(null);
    setSelectedWord("");
    setTimeout(() => setUsedLetters(["c"]), 100);
    setTimeout(() => setUsedLetters(["c", "a"]), 200);
    setTimeout(() => setUsedLetters(["c", "a", "n"]), 300);
    setTimeout(() => setUsedLetters(["c", "a", "n", "y"]), 400);
    setTimeout(() => setUsedLetters(["c", "a", "n", "y", "o"]), 500);
    setTimeout(() => setUsedLetters(["c", "a", "n", "y", "o", "u"]), 600);
    setTimeout(() => setUsedLetters(["c", "a", "n", "y", "o", "u", "g"]), 700);
    setTimeout(
      () => setUsedLetters(["c", "a", "n", "y", "o", "u", "g", "e"]),
      800
    );
    setTimeout(
      () => setUsedLetters(["c", "a", "n", "y", "o", "u", "g", "e", "s"]),
      900
    );
    setTimeout(
      () => setUsedLetters(["c", "a", "n", "y", "o", "u", "g", "e", "s", "t"]),
      1000
    );
    setTimeout(
      () =>
        setUsedLetters(["c", "a", "n", "y", "o", "u", "g", "e", "s", "t", "h"]),
      1100
    );
    setTimeout(
      () =>
        setUsedLetters([
          "c",
          "a",
          "n",
          "y",
          "o",
          "u",
          "g",
          "e",
          "s",
          "t",
          "h",
          "p"
        ]),
      1200
    );
    setTimeout(
      () =>
        setUsedLetters([
          "c",
          "a",
          "n",
          "y",
          "o",
          "u",
          "g",
          "e",
          "s",
          "t",
          "h",
          "p",
          "r"
        ]),
      1300
    );
    setTimeout(
      () =>
        setUsedLetters([
          "c",
          "a",
          "n",
          "y",
          "o",
          "u",
          "g",
          "e",
          "s",
          "t",
          "h",
          "p",
          "r",
          "?"
        ]),
      1400
    );
  };

  let random = Math.floor(Math.random() * 154);

  let newPhraseLetters = [
    ...new Set(phrasesArray[random].phrase.split("").filter((s) => s !== " "))
  ];

  const playAgain = () => {
    // window.location.reload(false);
    setSeconds(0);
    setMinutes(0);
    if (correct === true || correct === false) {
      setPhrase(phrasesArray[random]);
      setUsedLetters([]);
      setTries(newPhraseLetters.length + 5);
      setCorrect(null);
      setSelectedWord("");
      setOneAway(false);
      setGuessing(false);
      setTimeLeft(100);
      setPhraseGuess("");
      setWordGuess("");
      setGuessingPhrase(false);
      setGuessingWord(false);
    } else {
      setUsedLetters(alphabet);
      setTries(0);
      setCorrect(false);
      setSelectedWord("");
      setHint(false);
      setTimeLeft(100);
      setPhraseGuess("");
      setWordGuess("");
      setGuessingPhrase(false);
      setGuessingWord(false);
    }
  };

  const play = () => {
    setPlaying(true);
    setPhrase(phrasesArray[random]);
    // setPhrase(phrasesArray[1]);
    setTries(newPhraseLetters.length + 5);
    setUsedLetters([]);
    setHint(false);
    setTimeLeft(100);
    setPhraseGuess("");
    setWordGuess("");
    setGuessingPhrase(false);
    setGuessingWord(false);
  };

  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "'"
  ];

  const tryLine = () => {
    if (tries === 0) {
      return <h5>Last chance to guess</h5>;
    } else if (tries < 0) {
      return <h5>You'll get it next time</h5>;
    } else {
      return (
        <div className={afford ? "tries" : "cantAfford"}>
          ${tries.toFixed(2)}
          {/* {tries < 1 ? 0 : null} */}
        </div>
      );
    }
  };

  let phraseLetters = [
    ...new Set(phrase.phrase.split("").filter((s) => s !== " "))
  ];

  const startWords = ["can", "you", "guess", "the", "phrase?"];

  const showHint = () => {
    if (tries >= 3) {
      setHint(true);
      setTries(tries - 3);
      setSelectedWord("");
    }
  };

  return (
    <div className="App">
      <h1 className={playing ? null : "header"}>PHRASLE</h1>
      {!playing ? (
        <button
          className={!usedLetters.includes("?") ? "delay__start" : "start__btn"}
          onClick={play}
        >
          PLAY
        </button>
      ) : (
        <div>
          <Phrasel
            phrase={phrase}
            usedLetters={usedLetters}
            setUsedLetters={setUsedLetters}
            tries={tries}
            setTries={setTries}
            alphabet={alphabet}
            correct={correct}
            setCorrect={setCorrect}
            guessing={guessing}
            setGuessing={setGuessing}
            phraseLetters={phraseLetters}
            seconds={seconds}
            setSeconds={setSeconds}
            minutes={minutes}
            setMinutes={setMinutes}
            hint={hint}
            setHint={setHint}
            timeLeft={timeLeft}
            setTimeLeft={setTimeLeft}
            playing={playing}
            selectedWord={selectedWord}
            setSelectedWord={setSelectedWord}
            phraseGuess={phraseGuess}
            setPhraseGuess={setPhraseGuess}
            wordGuess={wordGuess}
            setWordGuess={setWordGuess}
            guessingPhrase={guessingPhrase}
            setGuessingPhrase={setGuessingPhrase}
            guessingWord={guessingWord}
            setGuessingWord={setGuessingWord}
          />
          {correct !== null ? null : (
            <div className="moneyHintLine">
              <button
                className={hint || tries < 3 ? "hint__btn" : "pushy__btn"}
                onClick={showHint}
              >
                Hint - $3
              </button>
              {correct === null ? tryLine() : null}
            </div>
          )}
        </div>
      )}
      <div>
        {oneAway && correct === null ? (
          <h5>Complete the phrase!</h5>
        ) : (
          <div>
            {correct === true || !playing ? null : (
              <Keyboard
                usedLetters={usedLetters}
                setUsedLetters={setUsedLetters}
                tries={tries}
                setTries={setTries}
                alphabet={alphabet}
                setCorrect={setCorrect}
                playing={playing}
                afford={afford}
                setAfford={setAfford}
                setSelectedWord={setSelectedWord}
                phraseGuess={phraseGuess}
                setPhraseGuess={setPhraseGuess}
                wordGuess={wordGuess}
                setWordGuess={setWordGuess}
                guessingPhrase={guessingPhrase}
                setGuessingPhrase={setGuessingPhrase}
                guessingWord={guessingWord}
                setGuessingWord={setGuessingWord}
                correct={correct}
                selectedWord={selectedWord}
              />
            )}
            {playing ? null : (
              <div>
                {startWords.map((word) => (
                  <Word word={word} usedLetters={usedLetters} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      {/* } */}
      {!playing ? null : (
        <div>
          <button className="play__btn" onClick={toHome}>
            Home
          </button>
          <button className="play__btn" onClick={playAgain}>
            {correct === true || correct === false ? "Play Again" : "Give Up"}
          </button>
        </div>
      )}
    </div>
  );
}
