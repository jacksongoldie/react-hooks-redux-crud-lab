import React from "react";
import ReviewsContainer from "../reviews/ReviewsContainer";

function Restaurant({ r }) {
  return (
    <div>
      <li>
        {r.name}
        <button> Delete Restaurant </button>
        <ReviewsContainer />
      </li>
    </div>
  );
}

export default Restaurant;
