import { Link } from "react-router-dom";
import "./VideosCard.css";
import { useDispatch } from "react-redux";
import { addWatchVideoData } from "../../store/slices/youtubeSlice";
import { formatNumber } from "../../utils/helper";

const VideosCard = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <Link
      className="link"
      to={`/watch?v=${data.id}`}
      onClick={() => {
        dispatch(addWatchVideoData(data));
      }}
    >
      <div className="video-card-container">
        <img src={data?.snippet?.thumbnails?.medium?.url} alt="thumbnail" />
        <h4>{data?.snippet?.title}</h4>
        <label>{data?.snippet?.channelTitle}</label>
        <label>{formatNumber(data?.statistics?.viewCount)} views</label>
      </div>
    </Link>
  );
};

export default VideosCard;
