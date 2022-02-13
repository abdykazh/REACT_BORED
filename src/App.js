import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchView from "./components/SearchView";

function App() {
  const [numParticipants, setNumParticipants] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (numParticipants) {
      fetch(
        `https://www.boredapi.com/api/activity?participants=${numParticipants}`
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data);
        });
    }
  }, [numParticipants]);

  return (
    <div>
      <Navbar
        numParticipants={numParticipants}
        setNumParticipants={setNumParticipants}
        setSearchResults={setSearchResults}
      />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/search"
          element={
            <SearchView
              numParticipants={numParticipants}
              data={searchResults}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
