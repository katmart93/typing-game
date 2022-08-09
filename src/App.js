import { useState, useEffect } from "react";

//components
import Words from "./components/Words";
import Container from "./components/Container";
import Typeracer from "./components/Typeracer";
import Results from "./components/Results";

// styles
import "./App.css";

function App() {
  const [words, setWords] = useState(Words);
  const [newWord, setNewWord] = useState(words[0]);
  const [disabled, setDisabled] = useState(true);
  const [correctResults, setCorrectResults] = useState([]);
  const [wrongResults, setWrongResults] = useState([]);
  const [countCorrect, setCountCorrect] = useState(0);
  const [time, setTime] = useState(30);
  const [inputValue, setInputValue] = useState("");
  const [animation, setAnimation] = useState(null);

  let randomWord = Math.floor(Math.random() * words.length);

  const checkAnswer = () => {
    if (inputValue.trim() === newWord) {
      setCorrectResults((prev) => [...prev, newWord]);
      setCountCorrect((prev) => prev + 1);
      return;
    }
    setWrongResults((prev) => [...prev, inputValue]);
  };

  const handleInput = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      checkAnswer();
      setNewWord(words[randomWord]);
      setInputValue("");
    }
  };

  const handleStart = () => {
    setDisabled(!disabled);
    setCorrectResults([]);
    setWrongResults([]);
    setCountCorrect(0);
    setInputValue("");
  };

  useEffect(() => {
    if (time <= 30 && time !== 0 && disabled === false) {
      setTimeout(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (disabled) {
      setTime(30);
      setAnimation(null);
    } else if (time == 0) {
      setDisabled(true);
    }

    if (time <= 10) {
      setAnimation("scaleNumber 2s infinite");
    }
  }, [disabled, time]);

  useEffect(() => {
    setNewWord(words[randomWord]);
  }, []);

  return (
    <div className="App">
      <Container>
        <Typeracer
          newWord={newWord}
          inputValue={inputValue}
          setInputValue={setInputValue}
          disabled={disabled}
          time={time}
          animation={animation}
          handleInput={handleInput}
          handleStart={handleStart}
        />
      </Container>
      <Results
        correctResults={correctResults}
        wrongResults={wrongResults}
        countCorrect={countCorrect}
      />
    </div>
  );
}

export default App;
