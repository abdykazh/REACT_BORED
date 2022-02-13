import React from "react";
import Info from "./Info";

const Home = () => {
  return (
    <div>
      <Info text="Home" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <h3>
              Simple REACT app to get a proposal of activities with your
              friends!
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
