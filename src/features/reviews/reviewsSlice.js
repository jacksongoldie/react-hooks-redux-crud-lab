import { createSlice } from "@reduxjs/toolkit";


const reviewsSlice = createSlice({
  name: "reviews",
  initialState: {
    entities: []
  },
  reducers: {
    reviewAdded(state, action){
    state.entities.push({
      comment: action.payload
    })
  },
    reviewRemoved(state, action){
      const index = state.entities.findIndex((x) => x.id === action.payload);
      state.entities.splice(index, 1);
    }
  },
});

export const { reviewAdded, reviewRemoved } = reviewsSlice.actions;
export default reviewsSlice.reducer;