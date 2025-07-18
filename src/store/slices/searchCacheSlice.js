import { createSlice } from "@reduxjs/toolkit";

const searchCacheSlice = createSlice({
  name: "searchCache",
  initialState: {
    cache: {},
  },
  reducers: {
    addCacheData: (state, action) => {
      state.cache = { ...action.payload, ...state.cache };
    },
  },
});

export const { addCacheData } = searchCacheSlice.actions;
export default searchCacheSlice.reducer;
