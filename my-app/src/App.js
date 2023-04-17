import './App.css';
import { useState } from "react";

function App({ library }) {
  const [emotion, setEmotion] = useState("happy");
  
  return (
    <div className="App">
      <h1>Hello, {library} is here, baby!</h1>
      <h2>Current emotion is {emotion}</h2>
    </div>
  );
}

export default App;
