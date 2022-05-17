import { useState } from "react";
import { useDispatch } from 'react-redux';
import { restaurantAdded, restaurantRemoved } from './restaurantsSlice';
function RestaurantInput() {

  const [restaurant, setRestaurant] = useState('')
  const dispatch = useDispatch();

  function handleChange(e){
    setRestaurant(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(restaurant)
    dispatch(restaurantAdded(restaurant))
  }
  return <div>
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name
        <input
        type='text'
        name='name'
        value={restaurant}
        onChange={handleChange}
        />
        </label>
        <br/>
        <button
        type="Submit"
        >add restaurant
        </button>
      </form>
    </div>
  </div>;
}

export default RestaurantInput;
