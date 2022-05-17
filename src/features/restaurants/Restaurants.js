import React from "react";
import Restaurant from './Restaurant'

function Restaurants({ store }) {
  console.log(store.entities[0])
  
  return <ul>
    Restaurants Component
    {store.entities.map((r) => <Restaurant r={r} key={r.id} />)}
    </ul>;
}

export default Restaurants;
