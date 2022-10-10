import notification1 from "../img/notification-1.png";
import notification2 from "../img/notification-2.png";
import notification3 from "../img/notification-3.png";
import searchFav from "../img/search-fav.png";

const NavBar = ({ profile, logo }) => {
  return (
    <div className="top-bar">
      <div>
        <img alt="" src={logo} className="img-logo round" />
      </div>
      <div>
        <input type="text" placeholder="Search" className="search-bar" />
      </div>
      <div>
        <input type="image" src={searchFav} className="search-img" alt="" />
      </div>
      <div className="notification-box">
        <img src={profile} className="round prof-img-not" alt="" />
        <img src={notification1} className="notification" alt="" />
        <img src={notification2} className="notification" alt="" />
        <img src={notification3} className="notification" alt="" />
      </div>
    </div>
  );
};
export default NavBar;
