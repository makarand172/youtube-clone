import { useDispatch } from "react-redux";
import FilterButtonList from "../filterbuttonlist/FilterButtonList";
import VideoList from "../videolist/VideoList";
import "./MainContainer.css";
import { useEffect } from "react";
import { addVideoList, toggleSidebar } from "../../store/slices/youtubeSlice";
import { API_KEY, applicationConstants } from "../../utils/appConstants";

const MainContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleSidebar(true));
  }, []);

  const getPopularVideos = async () => {
    const response = await fetch(
      applicationConstants.YOUTUBE_MOST_POPULAR_VIDS_API + API_KEY
    );
    const json = await response.json();

    dispatch(addVideoList(json?.items || []));
  };
  useEffect(() => {
    getPopularVideos();
    //eslint-disable-next-line
  }, []);
  return (
    <div className="body-container">
      <FilterButtonList />
      <VideoList />
    </div>
  );
};

export default MainContainer;
