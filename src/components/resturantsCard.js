import { IMG_CDN_URL } from "../constants";

const ResturantsCard = ({ name, cuisines, cloudinaryImageId, locality }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h5>{locality}</h5>
    </div>
  );
};

export default ResturantsCard;
