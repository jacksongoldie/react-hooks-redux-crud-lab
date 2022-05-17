import { v4 as uuid } from "uuid";
import { createSlice } from "@reduxjs/toolkit";


const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    entities: []
  },
  reducers: {
    restaurantAdded(state, action){
      state.entities.push({
        id: uuid(),
        name: action.payload
      })
    },
    restaurantRemoved(state, action){
      const index = state.entities.findIndex((x) => x.id === action.payload.id)
      state.entities.splice(index, 1)
      // return {
      //   ...state,
      //   entities: state.entities.filter((cat) => cat.id !== action.payload),
      // };
    }
  },
});

export const { restaurantAdded, restaurantRemoved } = restaurantsSlice.actions;
export default restaurantsSlice.reducer;
