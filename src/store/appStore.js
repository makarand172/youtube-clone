import { configureStore } from "@reduxjs/toolkit";
import youtubeReducer from "./slices/youtubeSlice";
const appStore = configureStore({
  reducer: {
    youtube: youtubeReducer,
  },
});

export default appStore;
