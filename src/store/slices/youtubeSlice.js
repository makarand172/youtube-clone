import { createSlice } from "@reduxjs/toolkit";

const youtubeSlice = createSlice({
  name: "youtube",
  initialState: {
    sidebarToggle: true,
    watchVideoData: null,
  },
  reducers: {
    toggleSidebar: (state, actions) => {
      state.sidebarToggle = actions.payload;
    },
    addWatchVideoData: (state, actions) => {
      state.watchVideoData = actions.payload;
    },
  },
});

export const { toggleSidebar, addWatchVideoData } = youtubeSlice.actions;

export default youtubeSlice.reducer;
