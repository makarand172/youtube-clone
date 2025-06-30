import "./VideosCard.css";

const VideosCard = ({ data }) => {
  console.log(data);
  function formatNumber(num) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  }
  return (
    <div className="video-card-container">
      <img src={data?.snippet?.thumbnails?.medium?.url} alt="thumbnail" />
      <h4>{data?.snippet?.title}</h4>
      <label>{data?.snippet?.channelTitle}</label>
      <label>{formatNumber(data?.statistics?.viewCount)} views</label>
    </div>
  );
};

export default VideosCard;
