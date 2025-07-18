import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { toggleSidebar } from "../../store/slices/youtubeSlice";
import "./Watch.css";
import { API_KEY, applicationConstants } from "../../utils/appConstants";
import Comments from "../../components/comments/Comments";

const Watch = () => {
  const [videoDetails, setVideosDetails] = useState();
  const dispatch = useDispatch();
  const watchVideoData = useSelector((store) => store.youtube.watchVideoData);
  const [urlParams] = useSearchParams();

  const getMovieDetails = async () => {
    const url =
      applicationConstants.YOTUBE_GET_VIDEO_BY_ID_API +
      urlParams.get("v") +
      "&key=" +
      API_KEY;

    const response = await fetch(url);

    const json = await response.json();

    console.log(json.items);
    setVideosDetails(json.items[0] || []);
  };

  useEffect(() => {
    dispatch(toggleSidebar(false));
    if (watchVideoData) {
      setVideosDetails(watchVideoData);
    } else {
      // get movieDetails
      getMovieDetails();
    }
    //eslint-disable-next-line
  }, []);
  return (
    <div className="watch-container">
      <div className="video-ember-container">
        <iframe
          className="iframe"
          width="1000"
          height="520"
          src={
            "https://www.youtube.com/embed/" +
            urlParams.get("v") +
            "?&autoplay=1&mute=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        ></iframe>
      </div>
      <h2>{videoDetails?.snippet?.title}</h2>
      <Comments />
    </div>
  );
};

export default Watch;
