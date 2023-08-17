import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const AccomSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3, // Display only 3 divs at a time
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };

  const linkStyle = {
    color: "blue",
    marginRight: "10px"
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="slide-content" id="accom" >
          <div className="item-wrapper">
            <div className="item-img">
              <img
                src="images/manila-474x316.webp"
                alt="Mobirise Website Builder"
                style={{ height: "300px", width: "400px", paddingLeft: "10px" }}
              />
            </div>
          </div>
          <div className="item-content" style={{ textAlign: "center" }}>
            <h5 className="item-title mbr-fonts-style display-5" style={{ marginBottom: "0" }}>
              <strong>
                <em>MANILA</em>
              </strong>
            </h5>
            <h6 className="item-subtitle mbr-fonts-style mt-1 display-7" style={{ marginTop: "10px" }}>
              <em>
                <a href="/Manilahotel" className="text-primary" style={linkStyle}>
                  HOTELS
                </a>
              </em>
              <br />
              <em>
                <a href="/ManilaResort" className="text-primary" target="_blank" style={linkStyle}>
                  RESORTS
                </a>
              </em>
              <br />
              <em>
                <a href="/ManilaCondo" className="text-primary" target="_blank" style={linkStyle}>
                  CONDOMINIUM
                </a>
              </em>
              <br />
              <em>
                <a href="/ManilaCamp" className="text-primary" target="_blank" style={linkStyle}>
                  CAMP-SITE
                </a>
              </em>
            </h6>
          </div>
        </div>

        <div className="slide-content">
           <div className="item-wrapper">
            <div className="item-img">
              <img
                src="images/download-6-254x198.webp"
                alt="Mobirise Website Builder"
                style={{ height: "300px", width: "400px", paddingLeft: "5px" ,paddingRight:"5px"}}
              />
            </div>
          </div>
          <div className="item-content" style={{ textAlign: "center" }}>
            <h5 className="item-title mbr-fonts-style display-5" style={{ marginBottom: "0" }}>
              <strong>
                <em>ILOCOS REGION</em>
              </strong>
            </h5>
            <h6 className="item-subtitle mbr-fonts-style mt-1 display-7" style={{ marginTop: "10px" }}>
              <em>
                <a href="/IlocosHotel" className="text-primary" style={linkStyle}>
                  HOTELS
                </a>
              </em>
              <br />
              <em>
                <a href="/IlocosResort" className="text-primary" target="_blank" style={linkStyle}>
                  RESORTS
                </a>
              </em>
              <br />
              <em>
                <a href="/IlocosCondo" className="text-primary" target="_blank" style={linkStyle}>
                  CONDOMINIUM
                </a>
              </em>
              <br />
              <em>
                <a href="/IlocosCamp" className="text-primary" target="_blank" style={linkStyle}>
                  CAMP-SITE
                </a>
              </em>
            </h6>
          </div>
        </div>

        <div className="slide-content">
           <div className="item-wrapper">
            <div className="item-img">
              <img
                src="images/bgc-474x316.webp"
                alt="Mobirise Website Builder"
                style={{ height: "300px", width: "400px", paddingLeft: "10px" }}
              />
            </div>
          </div>
          <div className="item-content" style={{ textAlign: "center" }}>
            <h5 className="item-title mbr-fonts-style display-5" style={{ marginBottom: "0" }}>
              <strong>
                <em>BGC, TAGUIG</em>
              </strong>
            </h5>
            <h6 className="item-subtitle mbr-fonts-style mt-1 display-7" style={{ marginTop: "10px" }}>
              <em>
                <a href="BgcHotel" className="text-primary" style={linkStyle}>
                  HOTELS
                </a>
              </em>
              <br />
              <em>
                <a href="/BgcResort" className="text-primary" target="_blank" style={linkStyle}>
                  RESORTS
                </a>
              </em>
              <br />
              <em>
                <a href="/BgcCondo" className="text-primary" target="_blank" style={linkStyle}>
                  CONDOMINIUM
                </a>
              </em>
              <br />
              <em>
                <a href="/BgcCamp" className="text-primary" target="_blank" style={linkStyle}>
                  CAMP-SITE
                </a>
              </em>
            </h6>
          </div>
        </div>

        <div className="slide-content">
           <div className="item-wrapper">
            <div className="item-img">
              <img
                src="images/bbbb-600x338.webp"
                alt="Mobirise Website Builder"
                style={{ height: "300px", width: "400px", paddingLeft: "10px" }}
              />
            </div>
          </div>
          <div className="item-content" style={{ textAlign: "center" }}>
            <h5 className="item-title mbr-fonts-style display-5" style={{ marginBottom: "0" }}>
              <strong>
                <em>BORACAY</em>
              </strong>
            </h5>
            <h6 className="item-subtitle mbr-fonts-style mt-1 display-7" style={{ marginTop: "10px" }}>
              <em>
                <a href="page7.html" className="text-primary" style={linkStyle}>
                  HOTELS
                </a>
              </em>
              <br />
              <em>
                <a href="page8.html#gallery5-1v" className="text-primary" target="_blank" style={linkStyle}>
                  RESORTS
                </a>
              </em>
              <br />
              <em>
                <a href="page9.html#gallery5-1w" className="text-primary" target="_blank" style={linkStyle}>
                  CONDOMINIUM
                </a>
              </em>
              <br />
              <em>
                <a href="page10.html#gallery5-1x" className="text-primary" target="_blank" style={linkStyle}>
                  CAMP-SITE
                </a>
              </em>
            </h6>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default AccomSlider;
