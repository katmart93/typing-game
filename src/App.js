import { useState, useEffect } from "react";

//components
import Words from "./components/Words";
import Container from "./components/Container";

// styles
import "./App.css";

function App() {
  const [words, setWords] = useState(Words);
  const [newWord, setNewWord] = useState(words[0]);
  const [disabled, setDisabled] = useState(true);
  const [currResults, setCurrResults] = useState([]);
  const [wrongResults, setWrongResults] = useState([]);
  const [countCorrect, setCountCorrect] = useState(0);
  const [time, setTime] = useState(30);
  const [inputValue, setInputValue] = useState("");
  const [animation, setAnimation] = useState(null);

  let randomWord = Math.floor(Math.random() * words.length);

  return (
    <div className="App">
      <Container></Container>
    </div>
  );
}

export default App;
