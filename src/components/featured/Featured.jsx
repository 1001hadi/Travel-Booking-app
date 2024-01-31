import useFetch from "../../hooks/useFetch";
import "./featured.css";

function Featured() {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=denver,miami,austin"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading data please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
              alt="lake tahoe"
              className="featuredImg"
            />
            <div className="featuredTitle">
              <h1>Lake Tahoe</h1>
              <h3>{data[0]}</h3>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
              alt="city of austin"
              className="featuredImg"
            />
            <div className="featuredTitle">
              <h1>Austin</h1>
              <h3>{data[1]}</h3>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/600x600/977409.jpg?k=82c14f9e6cea94829ee0528a3aa4324111d3482e9f095194500746fa7ca2769e&amp;o="
              alt="outdore"
              className="featuredImg"
            />
            <div className="featuredTitle">
              <h1>Las Vegas</h1>
              <h3>{data[2]}</h3>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Featured;
