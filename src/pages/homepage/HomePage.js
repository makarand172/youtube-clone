import { Outlet } from "react-router-dom";
import Sidebar from "../../layout/sidebar/Sidebar";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default HomePage;
