import "./VideoList.css";
import { useEffect, useState } from "react";
import { API_KEY, applicationConstants } from "../../utils/appConstants";
import VideosCard from "../videosCard/VideosCard";

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const getPopularVideos = async () => {
    const response = await fetch(
      applicationConstants.YOUTUBE_MOST_POPULAR_VIDS_API + API_KEY
    );
    const json = await response.json();

    setVideos(json?.items || []);
  };
  useEffect(() => {
    getPopularVideos();
    //eslint-disable-next-line
  }, []);
  return (
    <div className="video-list-container">
      {videos?.map((video) => (
        <VideosCard key={video.id} data={video} />
      ))}
    </div>
  );
};

export default VideoList;
