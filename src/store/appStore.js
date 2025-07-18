import { configureStore } from "@reduxjs/toolkit";
import youtubeReducer from "./slices/youtubeSlice";
import searchCacheReducer from "./slices/searchCacheSlice";
const appStore = configureStore({
  reducer: {
    youtube: youtubeReducer,
    searchCache: searchCacheReducer,
  },
});

export default appStore;
