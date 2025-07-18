import "./VideoList.css";
import VideosCard from "../videosCard/VideosCard";
import { useSelector } from "react-redux";

const VideoList = () => {
  const videoList = useSelector((store) => store.youtube.videosList);
  console.log(videoList);
  return (
    <div className="video-list-container">
      {videoList?.map((video) => (
        <VideosCard key={video?.id} data={video} />
      ))}
    </div>
  );
};

export default VideoList;
