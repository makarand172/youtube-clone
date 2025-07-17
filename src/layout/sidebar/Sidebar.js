import "./Sidebar.css";
import { IoMdHome } from "react-icons/io";
import {
  SiBmw,
  SiMarvelapp,
  SiNetflix,
  SiYoutubemusic,
  SiYoutubeshorts,
} from "react-icons/si";
import { MdMusicNote, MdSubscriptions } from "react-icons/md";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const sidebarToggle = useSelector((store) => store.youtube.sidebarToggle);
  const [liItemHomeActive, setLiItemHomeActive] = useState(null);
  const [liItemSubsActive, setLiItemSubsActive] = useState(null);
  if (!sidebarToggle) return null;
  const liItemHome = [
    <>
      <Link className="li-link" to="/">
        <IoMdHome size={26} />
        Home
      </Link>
    </>,
    <>
      <SiYoutubeshorts size={22} />
      Shorts
    </>,
    <>
      <MdSubscriptions size={22} />
      Subscriptions
    </>,
    <>
      <SiYoutubemusic size={22} />
      Youtube Music
    </>,
  ];

  const liItemSubs = [
    <>
      <SiNetflix size={22} />
      Netflix
    </>,
    <>
      <MdMusicNote size={22} />
      TSeries
    </>,
    <>
      <SiMarvelapp size={22} /> Marvel
    </>,
    <>
      <SiBmw size={22} /> BMW
    </>,
  ];

  return (
    <div className="sidebar-container">
      <nav>
        {liItemHome.map((item, index) => (
          <li
            key={index}
            className={liItemHomeActive === index ? "active-li" : ""}
            onClick={() => {
              if (liItemSubsActive) setLiItemSubsActive(null);
              setLiItemHomeActive(index);
            }}
          >
            {item}
          </li>
        ))}
      </nav>
      <hr />
      <h4>Subscriptions</h4>
      <nav>
        {liItemSubs.map((item, index) => (
          <li
            key={index}
            className={liItemSubsActive === index ? "active-li" : ""}
            onClick={() => {
              if (liItemHomeActive) setLiItemHomeActive(null);
              setLiItemSubsActive(index);
            }}
          >
            {item}
          </li>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
