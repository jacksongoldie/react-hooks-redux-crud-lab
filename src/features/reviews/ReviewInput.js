import React from "react";
import Reviews from "./Reviews";

function ReviewInput() {

  function handleChange(e){
    console.log(e.target.name, e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log('submit for review')
  }

  return <div>
    <form onSubmit={handleSubmit}>
      <label>comment
        <input 
        type='textarea'
        name="comment"
        onChange={handleChange}
        />
      </label>
      <button type='Submit'>
        Add Review
      </button>
    </form>
  </div>;
}

export default ReviewInput;
