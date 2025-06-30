import { applicationConstants } from "../../utils/appConstants";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <RxHamburgerMenu className="hamburger-icon" size={28} />
      <img
        className="youtube-logo"
        src={applicationConstants.YOUTUBE_LOGO}
        alt="youtube-logo"
      />
      <div className="searchbar-container">
        <input placeholder="Search" />
        <button>
          <CiSearch size={22} />
        </button>
      </div>
      <div className="user-icon">
        <FaRegUser size={23} />
      </div>
    </div>
  );
};

export default Header;
