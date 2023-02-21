import { useEffect } from "react";

import "./App.css";
import SearchIcon from "./search.svg";

// 1b4892e0

const API_URL = "http://www.omdbapi.com?apikey=1b4892e0";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };
  useEffect(() => {
    searchMovies("spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value="Superman"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="Search" />
      </div>
    </div>
  );
};

export default App;
