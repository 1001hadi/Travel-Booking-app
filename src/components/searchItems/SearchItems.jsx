import "./searchItems.css";

function SearchItems() {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/293966328.webp?k=93b9eb4bb687915186b42249f20993f9dcd7cbc37682fa4264bd2cd0db35afe2&amp;o="
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Avalon Apartment & Studio</h1>
        <span className="siDistance">950ft from city center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 240sf 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailText">
          <span className="siPrice">$270</span>
          <span className="siTaxOp">Includes fees + taxes</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
}

export default SearchItems;
