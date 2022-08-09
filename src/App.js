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
  const [disabled, setDisabled] = useState(false);
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
