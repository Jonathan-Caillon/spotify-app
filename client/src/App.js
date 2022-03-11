import { useEffect, useState } from "react";
import { accessToken } from "./spotify";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(accessToken);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {!token ? (
          <a
            className="App-link"
            href="http://localhost:8888/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            Log in to Spotify
          </a>
        ) : (
          <h1>Logged in !</h1>
        )}
      </header>
    </div>
  );
}

export default App;
