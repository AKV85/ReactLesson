import './App.css';
import { useState, useEffect} from "react";

function GithubUser({ login, type, avatar }) {
return(
  <div>
    <h1>
      {login}
    </h1>
    <p>{type}</p>
    <img src={avatar} alt="logo" height={150} />
  </div>
)
}

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.github.com/users/akv85`
    )
      .then((response) => response.json()) 
      .then(setData);
  }, []);
  if(data)
   return (
   <GithubUser 
      login={data.login} 
      type={data.type}
      avatar={data.avatar_url} 
  />
   );
  return <h1>Data</h1>;
}

export default App;
