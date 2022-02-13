import React from "react";

const Info = ({ text }) => {
  return (
    <header className="bg-dark text-white p-5 hero-container">
      <h1 className="hero-text">{text}</h1>
    </header>
  );
};

export default Info;
