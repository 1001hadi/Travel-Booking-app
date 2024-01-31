import { Link } from "react-router-dom";
import "./searchItems.css";

function SearchItems({ item }) {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}ft from city center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">{item.desc}</span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 240sf 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && (
          <div className="siRating">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="siDetailText">
          <span className="siPrice">{item.cheapestPrice}</span>
          <span className="siTaxOp">Includes fees + taxes</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchItems;
