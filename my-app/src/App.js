import './App.css';

const [firstCity, second] = [
  "Tokyo",
  "Chicago",
  "London",
  ];

  console.log(firstCity);
  console.log(second);


function App(props) {
  return (
    <div className="App">
      <h1>Hello, {props.library} is here, baby!</h1>
    </div>
  );
}

export default App;
