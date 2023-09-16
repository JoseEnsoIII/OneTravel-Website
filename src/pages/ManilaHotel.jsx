import React, { useRef ,useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DestiSlider = () => {
  const sliderRef = useRef();

  const goToPreviousSlide = () => {
    sliderRef.current.slickPrev();
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  
  
  
  const slideContentStyle = {
    margin: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const itemFooterStyle = {
    display: "flex",
    justifyContent: "center",
  };

  const itemButtonStyle = {
    whiteSpace: "nowrap",
    margin: "5px",
    alignSelf: "center", // Center the button vertically
    display: "inline-block", // Enable horizontal centering
    textAlign: "center", // Center the button horizontally
  };
  

  return (
    <div>
      <Slider ref={sliderRef} {...settings}>
      <div className="slide-content h-300 pt-5">
  <div className="item-wrapper">
   <div className="item-img ml-10">
      <img
        src="/images/mannnnn.webp"
        alt="Mobirise Website Builder"
        style={{ paddingLeft: "10px", paddingRight: "10px", width: "100%", height: "500px" }}
      />
    </div>
  </div>
  <div className="item-content bg-gray-200 ml-10 bg-gray-200">
    <h5
      className="item-title mbr-fonts-style display-5"
      style={{ paddingLeft: "10px", paddingRight: "10px" }}
    >
      <strong>The Manila Hotel</strong>
    </h5>
    <p
      className="mbr-text mbr-fonts-style mt-3 display-7"
      style={{ paddingLeft: "10px", paddingRight: "10px" }}
    >
      <em>
        The 5-star The Manila Hotel is one of the best hotels in Manila,
        the capital of the Philippines. It has 515 rooms and suites,
        free Wi-Fi, and is the ideal base for exploring the top tourist
        spots in Manila.
      </em>
    </p>
    <div className="text-center">
      <a
        href="https://www.manila-hotel.com.ph/?gclid=CjwKCAjw9pGjBhB-EiwAa5jl3Gi3XdyHwvp_DPXIlEgGhNC-oroQQdkOj-4tmFEKNJsSZjxdds5ntxoCHR0QAvD_BwE&gclsrc=aw.ds"
        className="btn btn-primary item-btn display-7"
        target="_blank"
        rel="noopener noreferrer"
        style={itemButtonStyle}
      >
        Read More
      </a>
    </div>
  </div>
</div>

  <div className="slide-content h-300 pt-5">
  <div className="item-wrapper">
     <div className="item-img ml-10">
      <img
        src="/images/rp-1000x525.webp"
        alt="Mobirise Website Builder"
        style={{ paddingLeft: "10px", paddingRight: "10px", width: "100%", height: "500px" }}
      />
    </div>
  </div>
  <div className="item-content bg-gray-200 ml-10 bg-gray-200">
    <h5
      className="item-title mbr-fonts-style display-5"
      style={{ paddingLeft: "10px", paddingRight: "10px" }}
    >
      <strong>Red Planet Manila Makati</strong>
    </h5>
    <p
      className="mbr-text mbr-fonts-style mt-3 display-7"
      style={{ paddingLeft: "10px", paddingRight: "10px" }}
    >
      <em>
        Red Planet Hotels Limited (RPHL) was founded in 2010 and has
        quickly established itself as Asia's largest and fastest-growing
        hotel company focused on the budget hotel sector. The company
        owns and operates hotels in the Philippines, Indonesia,
        Thailand, and Japan and plans to continue its expansion across
        Asia.
      </em>
    </p>
    <div className="text-center">
      <a
        href="https://www.guestreservations.com/red-planet-makati/booking?msclkid=e04df806182e14da69759c638b7b0837"
        className="btn btn-primary item-btn display-7"
        target="_blank"
        rel="noopener noreferrer"
        style={itemButtonStyle}
      >
        Read More
      </a>
    </div>
  </div>
</div>

  <div className="slide-content h-300 pt-5">
  <div className="item-wrapper">
   <div className="item-img ml-10">
      <img
        src="/images/bayview-1000x667.webp"
        alt="Mobirise Website Builder"
        style={{ paddingLeft: "10px", paddingRight: "10px", width: "100%", height: "500px" }}
      />
    </div>
  </div>
  <div
    className="item-content bg-gray-200"
    style={{ paddingLeft: "10px", paddingRight: "10px", height: "350px" }}
  >
    <h5
      className="item-title mbr-fonts-style display-5"
      style={{ paddingLeft: "10px", paddingRight: "10px" }}
    >
      <strong>The Bayleaf Hotel Intramuros Manila</strong>
    </h5>
    <p
      className="mbr-text mbr-fonts-style mt-3 display-7"
      style={{ paddingLeft: "10px", paddingRight: "10px" }}
    >
      <em>
        The Bayleaf Intramuros Hotel in Manila is a boutique hotel run
        by students and faculty from the Lyceum of the Philippines
        University under its Hotel and Restaurant Management program.
        Located within the historic walls of Intramuros, it offers
        world-class amenities and services for the weary traveler who
        wants to explore top tourist spots in Manila.
      </em>
    </p>
    <div className="text-center">
      <a
        href="https://www.thebayleaf.com.ph/bayleaf-intramuros-hotel"
        className="btn btn-primary item-btn display-7"
        target="_blank"
        rel="noopener noreferrer"
        style={itemButtonStyle}
      >
        Read More
      </a>
    </div>
  </div>
</div>

  <div className="slide-content h-300 pt-5">
  <div className="item-wrapper">
   <div className="item-img ml-10">
      <img
        src="/images/hd-860x450.webp"
        alt="Mobirise Website Builder"
        style={{ paddingLeft: "5px", paddingRight: "5px", width: "100%", height: "500px" }}
      />
    </div>
  </div>
  <div
    className="item-content bg-gray-200"
    style={{ paddingLeft: "10px", paddingRight: "10px", height: "350px" }}
  >
    <h5
      className="item-title mbr-fonts-style display-5"
      style={{ paddingLeft: "10px", paddingRight: "10px" }}
    >
      <strong>Diamond Hotel</strong>
    </h5>
    <p
      className="mbr-text mbr-fonts-style mt-3 display-7"
      style={{ paddingLeft: "10px", paddingRight: "10px" }}
    >
      <em>
        The diamond ratings indicate the level of services and amenities
        available at each hotel. One diamond indicates accommodations
        that just meet the basic requirements of a AAA approved hotel,
        while five diamonds indicate the highest level of luxury.
      </em>
    </p>
    <div className="text-center">
      <a
        href="https://www.booking.com/hotel/ph/diamond-philippines.html"
        className="btn btn-primary item-btn display-7"
        target="_blank"
        rel="noopener noreferrer"
        style={itemButtonStyle}
      >
        Read More
      </a>
    </div>
  </div>
</div>

      </Slider>
    </div>
  );
};

function ManilaHotel() {
  useEffect(() => {
    document.title = "Manila Hotel";
  }, []);
  return (
    <section className="slider4 mbr-embla cid-tEzwvrEiry" id="slider4-2j">
      <div className="position-relative text-center">
        <div className="mbr-section-head">
          <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-5">
            <strong>&nbsp; &nbsp; &nbsp; &nbsp;</strong>
            <a href="/accomodation" className="text-primary" target="_blank" rel="noopener noreferrer">
              Back
            </a>
          </h4>
        </div>
      </div>
      <DestiSlider />
    </section>
  );
}

export default ManilaHotel;
