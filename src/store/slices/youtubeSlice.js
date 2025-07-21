import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVECHAT } from "../../utils/appConstants";

const youtubeSlice = createSlice({
  name: "youtube",
  initialState: {
    sidebarToggle: true,
    watchVideoData: null,
    videosList: [],
    liveChatMessages: [],
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
    addLiveChatMessages: (state, actions) => {
      state.liveChatMessages.splice(OFFSET_LIVECHAT, 1);
      state.liveChatMessages.unshift(actions.payload);
    },
  },
});

export const {
  toggleSidebar,
  addWatchVideoData,
  addVideoList,
  addLiveChatMessages,
} = youtubeSlice.actions;

export default youtubeSlice.reducer;
