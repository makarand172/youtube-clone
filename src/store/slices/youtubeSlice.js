import { createSlice } from "@reduxjs/toolkit";

const youtubeSlice = createSlice({
  name: "youtube",
  initialState: {
    sidebarToggle: true,
    watchVideoData: null,
    videosList: [],
  },
  reducers: {
    toggleSidebar: (state, actions) => {
      state.sidebarToggle = actions.payload;
    },
    addWatchVideoData: (state, actions) => {
      state.watchVideoData = actions.payload;
    },
    addVideoList: (state, actions) => {
      state.videosList = actions.payload;
    },
  },
});

export const { toggleSidebar, addWatchVideoData, addVideoList } =
  youtubeSlice.actions;

export default youtubeSlice.reducer;
