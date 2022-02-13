import React from "react";
import Info from "./Info";

const SearchView = ({ numParticipants, data }) => {
  const t = `What you could do with ${numParticipants} people`;
  return (
    <div>
      <Info text={t} />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <ul className="list-group mt-5">
              <li className="list-group-item list-group-item-primary">
                Activity: {data.activity}
              </li>
              <li className="list-group-item list-group-item-light">
                Type: {data.type}
              </li>
              <li className="list-group-item list-group-item-info">
                Price: {data.price}
              </li>
              <li className="list-group-item list-group-item-dark">
                participants: {data.participants}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchView;
