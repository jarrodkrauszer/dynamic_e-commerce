import { useStoreContext } from "../../utils/store";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { NavLink } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { useEffect } from 'react';
import axios from 'axios'

import { UPDATE_CURRENT_CATEGORY, UPDATE_SALES } from '../../utils/actions';

function Hero() {
  const [state, dispatch] = useStoreContext();
  const salesList = state?.sales || [];

  useEffect(() => {
    axios.get('/api/sales')
      .then(res => {
        dispatch({
          type: UPDATE_SALES,
          sales: res.data
        })
      })
  }, [])

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id
    })
  }

  const imageSize = {
    width: "100%",
    height: "550px",
  };

  const legendStyle = {
    color: "white", // Set the text color
    fontSize: "48px", // Set the font size
    // textAlign: 'center', // Set the text alignment
    background: "black", // Set the background color and opacity
    fontFamily: "Raleway",
    fontWeight: "bold",
    marginBottom: "200px",
  };

  const altLegendStyle = {
    color: "black",
    fontSize: "48px",
    background: "white",
    fontFamily: "Raleway",
    fontWeight: "bold",
    marginBottom: "200px",
  };

  const titleStyle = {
    color: "black",
    fontSize: "64px",
    background: "transparent",
    fontFamily: "Raleway",
    fontWeight: "bold",
  };

  return (
    <div>
      {state.company && (
        <div>
          <img
            style={{ filter: "invert(1)" }}
            className="mx-auto h-15 w-auto invert-colors"
            src={`/images/${state.company.image}`}
          />
          <h1 style={titleStyle}>{state.company.name}</h1>
        </div>
      )}

      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
      >
        {salesList.map(item => (
          <NavLink
            to="/products"
            key={item._id}
            onClick={() => handleClick(item._id)}
            className='sale-img'
          >
            <div>
              <img src={`/images/${item.image}`} style={imageSize} />
              <p className="legend" style={legendStyle}>
                {item.description}
              </p>
            </div>
          </NavLink>
        ))}

      </Carousel>
    </div>
  )
}

export default Hero