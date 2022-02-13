import React from "react";
import Info from "./Info";

const About = () => {
  return (
    <div>
      <Info text="About" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <h3>
              Just type in number of participants to start a search. Click
              "Again" to get new activities! Default is one person.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
