import './App.css';

const cities = ["Tokyo", "Chicago", "London"];

console.log(cities[0,1]);

function App(props) {
  return (
    <div className="App">
      <h1>Hello, {props.library} is here, baby!</h1>
    </div>
  );
}

export default App;
