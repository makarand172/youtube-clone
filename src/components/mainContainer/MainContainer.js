import { useDispatch } from "react-redux";
import FilterButtonList from "../filterbuttonlist/FilterButtonList";
import VideoList from "../videolist/VideoList";
import "./MainContainer.css";
import { useEffect } from "react";
import { toggleSidebar } from "../../store/slices/youtubeSlice";

const MainContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleSidebar(true));
  }, []);
  return (
    <div className="body-container">
      <FilterButtonList />
      <VideoList />
    </div>
  );
};

export default MainContainer;
