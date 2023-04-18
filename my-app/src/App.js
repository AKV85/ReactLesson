import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [checked, setChecked] = useState(false)
  return (
    <div className="App">
     <input 
      type="checkbox" 
      value={checked} 
      onChange={() =>
        setChecked((cheked) => !checked )}/>
     <label>Checked</label>
    </div>
  );
}

export default App;
