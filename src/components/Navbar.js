import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = ({ numParticipants, setNumParticipants, setSearchResults }) => {
  const navigate = useNavigate();

  const updateText = (e) => {
    navigate("/search");
    setNumParticipants(e.target.value);
  };

  function clickMe() {
    fetch(
      `https://www.boredapi.com/api/activity?participants=${numParticipants}`
    )
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data);
      });
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Bored App
        </a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <form className="d-flex">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Number of participants"
                  aria-label="Search"
                  value={numParticipants}
                  onChange={updateText}
                />
              </form>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-primary"
                onClick={clickMe}
              >
                Again
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
