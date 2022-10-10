import "./App.css";
import post1 from ".//img/img-post-1.jpg";
import post2 from ".//img/img-post-2.jpg";
import post3 from ".//img/img-post-3.jpg";
import logo from ".//img/logo.png";
import profile from ".//img/profile-pic.jpg";
import Post from "./components/Post";
import NavBar from "./components/NavBar";
import ProfilePanel from "./components/ProfilePanel";
import Ad from "./components/Ad";

function App() {
  return (
    <div className="App">
      <div className="main-coon">
        <NavBar profile={profile} logo={logo} />
        {/* <!-- left side --> */}
        <div className="flex fix1">
          <ProfilePanel profile={profile} />
          {/* <!-- mid side --> */}
          <div>
            <Post profile={profile} post={post3} />
            <Post profile={profile} post={post2} />
            <Post profile={profile} post={post1} />
            <Post profile={profile} post={post2} />
            <Post profile={profile} post={post3} />
          </div>
          {/* <!-- right side --> */}
          <Ad />
        </div>
      </div>
    </div>
  );
}

export default App;
