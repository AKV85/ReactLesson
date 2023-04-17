import './App.css';
import { useState } from "react";

function App({ library }) {
  const [what] = useState("happy");
  console.log(what);
  return (
    <div className="App">
      <h1>Hello, {library} is here, baby!</h1>
    </div>
  );
}

export default App;
