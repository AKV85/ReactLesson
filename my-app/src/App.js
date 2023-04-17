import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] =
  useState("tired");

  useEffect(() => {
    console.log(`It's ${emotion} right now`);
  }, [emotion] );

  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button
        onClick={() => setEmotion("sad")} > Sad
      </button>
      <button
        onClick={() => setEmotion("bored")} > Bored
      </button>
      <h2>Curent secondary emotion is {secondary}.</h2>
      <button
        onClick={() => setSecondary("grateful")} > Grateful
      </button>
    </div>
  );
}

export default App;
