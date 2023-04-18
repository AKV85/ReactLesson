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
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.github.com/users/akv85`
    )
      .then((response) => response.json()) 
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  if(loading) return <h1>Loading...</h1>;
  if(error) return <pre>{JSON.stringify(error)}</pre>;
  if(!data) return null;

   return (
   <GithubUser 
      login={data.login} 
      type={data.type}
      avatar={data.avatar_url} 
    />
   );
}

export default App;
