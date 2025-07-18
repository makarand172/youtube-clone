import { API_KEY, applicationConstants } from "../../utils/appConstants";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { addVideoList, toggleSidebar } from "../../store/slices/youtubeSlice";
import { useDebounce } from "../../hooks/useDebounce";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [searchInput, setSearchInput] = useState();
  const [autoSuggestList, setAutoSuggestList] = useState([]);
  const [autoSuggestFlag, setAutoSuggestFlag] = useState(false);

  const dispatch = useDispatch();
  const autoSuggestSearch = useDebounce(searchInput, 200);
  const sidebarToggle = useSelector((store) => store.youtube.sidebarToggle);

  let suggestionRef = useRef(null);

  const handleSidebarToggle = () => {
    dispatch(toggleSidebar(!sidebarToggle));
  };
  useEffect(() => {
    setAutoSuggestList(autoSuggestSearch);
    setAutoSuggestFlag(true);
  }, [autoSuggestSearch]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        suggestionRef.current &&
        !suggestionRef.current.contains(event.target)
      ) {
        setAutoSuggestFlag(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOnClick = async (item) => {
    const query = item || searchInput;
    console.log(query);
    const response = await fetch(
      applicationConstants.YOUTUBE_GET_SEARCH_RESULTS +
        query +
        "&key=" +
        API_KEY
    );
    const json1 = await response.json();
    let modifiedList = json1?.items
      ?.map((item) => item.id.videoId)
      .toString()
      .replaceAll(",", "%2C");
    console.log(modifiedList);
    const getVideosbyId = await fetch(
      applicationConstants.YOTUBE_GET_VIDEO_BY_ID_API +
        modifiedList +
        "&key=" +
        API_KEY
    );
    const json2 = await getVideosbyId.json();
    dispatch(addVideoList(json2?.items || []));
    setAutoSuggestFlag(false);
  };

  return (
    <div className="header-container">
      <RxHamburgerMenu
        className="hamburger-icon"
        size={28}
        onClick={handleSidebarToggle}
      />
      <img
        className="youtube-logo"
        src={applicationConstants.YOUTUBE_LOGO}
        alt="youtube-logo"
      />
      <div className="searchbar-container">
        <input
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            handleOnClick();
          }}
        >
          <CiSearch size={22} />
        </button>

        {autoSuggestFlag && autoSuggestList.length > 0 && (
          <div className="suggestion-container" ref={suggestionRef}>
            {autoSuggestList.map((item) => (
              <div
                key={item}
                onClick={() => {
                  setSearchInput(item);
                  handleOnClick(item);
                }}
              >
                <CiSearch size={22} />
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="user-icon">
        <FaRegUser size={23} />
      </div>
    </div>
  );
};

export default Header;
