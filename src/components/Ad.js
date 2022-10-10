import reclama from "../img/reclama.jpg";
const Ad = () => {
  return (
    <div className="ad-panel flex col">
      <div>
        <img src={reclama} className="ad-img" alt="" />
      </div>
      <div className="ad-text flex">
        <div>privacy policy</div>
        <div>careers</div>
        <div>contact support</div>
      </div>
      <div className="ad-text flex">
        <div>help</div>
        <div>about</div>
        <div>&#129313;</div>
      </div>
    </div>
  );
};
export default Ad;
