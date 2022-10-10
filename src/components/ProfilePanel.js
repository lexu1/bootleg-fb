import backEnd from "../img/back-end-logo.png";
import design from "../img/design-logo.png";
import html from "../img/html-logo.png";
import separator from "../img/separator-line.png";

const ProfilePanel = ({ profile }) => {
  return (
    <div className="profile-panel col">
      <div className="flex">
        <div>
          <img src={profile} className="user-img-panel round" alt="" />
        </div>
        <div className="profile-text">
          <h2>Pateus Maximus III</h2>
          <p>Son of Gunderson the son of Gunder</p>
        </div>
      </div>
      <div>
        <img src={separator} className="separator-img" alt="" />
      </div>
      <div className="job-box flex">
        <img src={backEnd} className="left-profile-img" alt="" />
        <h2 className="fix2">Back-end</h2>
      </div>
      <div className="job-box flex">
        <img src={design} className="left-profile-img" alt="" />
        <h2 className="fix2">Design</h2>
      </div>
      <div className="job-box flex">
        <img src={html} className="left-profile-img" alt="" />
        <h2 className="fix2">Front-end</h2>
      </div>
    </div>
  );
};
export default ProfilePanel;
