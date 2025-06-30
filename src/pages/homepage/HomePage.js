import Sidebar from "../../layout/sidebar/Sidebar";
import VideoList from "../../components/videolist/VideoList";
import FilterButtonList from "../../components/filterbuttonlist/FilterButtonList";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <Sidebar />
      <div className="body-container">
        <FilterButtonList />
        <VideoList />
      </div>
    </div>
  );
};

export default HomePage;
