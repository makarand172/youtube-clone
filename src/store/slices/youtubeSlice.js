import { createSlice } from "@reduxjs/toolkit";

const youtubeSlice = createSlice({
  name: "youtube",
  initialState: {
    sidebarToggle: null,
  },
  reducers: {
    toggleSidebar: (state, actions) => {
      state.mostPopularVideos = actions.payload;
    },
  },
});

export const { toggleSidebar } = youtubeSlice.actions;

export default youtubeSlice.reducer;
