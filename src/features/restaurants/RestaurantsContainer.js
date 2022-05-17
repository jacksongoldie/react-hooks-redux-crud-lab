import React from "react";
import RestaurantInput from "./RestaurantInput";
import Restaurants from "./Restaurants";
import { useSelector } from 'react-redux';

function RestaurantsContainer() {
  const store = useSelector((state) => state.restaurants)

  console.log(store)

  return (
    <div>
      <RestaurantInput />
      <Restaurants store={store} />
    </div>
  );
}

export default RestaurantsContainer;
