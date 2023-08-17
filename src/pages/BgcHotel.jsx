import React ,{useEffect}from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class DestiSlider extends React.Component {
  settings = {
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

  render() {
    return (
      <Slider {...this.settings}>
        <div className="slide-content h-300 pt-5">
            <div className="item-wrapper">
                <div className="item-img ml-10 ">
                <img src="images/b572c0c8c342752951bb19aff6cdedd8-259x194.webp" alt="Mobirise Website Builder" data-slide-to="0" data-bs-slide-to="0" />
              </div>
            </div>
           <div className="item-content bg-gray-200 ml-10  bg-gray-200">
              <h5 className="item-title mbr-fonts-style display-5"><strong>Seda Bonifacio Global City HOTEL</strong></h5>
              <p className="mbr-text mbr-fonts-style mt-3 display-7">
                <em>Seda Bonifacio Global City — Hotel in Bonifacio Global City, Philippines DELIGHT IN PASSION Experience Seda’s unique style of comfort, convenience, and service, right in the heart of the Metro Manila and also BGC.</em>
              </p><div className="mbr-section-btn item-footer mt-2">
              <a
                href="https://www.guestreservations.com/seda-bonifacio-global-city/booking?msclkid=f0cb379905da13835e9953fe15a6763f"
                className="btn btn-primary item-btn display-7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More &lt;
              </a>
            </div>
            </div>
            
          </div>
    

        {/* Slide 2 */}
       
          <div className="slide-content h-300 pt-5">
            <div className="item-wrapper">
                <div className="item-img ml-10 ">
                <img src="images/92ea5441-z-1.webp" alt="Mobirise Website Builder" data-slide-to="1" data-bs-slide-to="1" />
              </div>
            </div>
           <div className="item-content bg-gray-200 ml-10  bg-gray-200">
              <h5 className="item-title mbr-fonts-style display-7"><strong>F1 Hotel Manila, Taguig</strong></h5>
              <p className="mbr-text mbr-fonts-style mt-3 display-7">
                <em>F1 Hotel Manila is the first hotel to open at the dynamic Bonifacio Global City in Metro Manila. Strategically located at the heart of Bonifacio Global City, F1 Hotel is accessible to nearest high-end.</em>
              </p>  <div className="mbr-section-btn item-footer mt-2">
              <a
                href="https://www.guestreservations.com/f1-hotel/booking?msclkid=3999205fc35614b6813b4438d242ab8b"
                className="btn btn-primary item-btn display-7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More &lt;
              </a>
            </div>
            </div>
          
          </div>

        {/* Slide 3 */}
       
          <div className="slide-content h-300 pt-5">
            <div className="item-wrapper">
                <div className="item-img ml-10 ">
                <img src="images/bgc-facade.webp" alt="Mobirise Website Builder" />
              </div>
            </div>
           <div className="item-content bg-gray-200 ml-10  bg-gray-200">
              <h5 className="item-title mbr-fonts-style display-5"><strong>MySpace Hotel in Taguig</strong></h5>
              <p className="mbr-text mbr-fonts-style mt-3 display-7">
                <em>MySpace Hotel | A lifestyle budget hotel near BGC Taguig Enjoy our superior pocket spring hotel beds from Rite Bed and experience the comfort for a short walk or commute to any of your choice.</em>
              </p> <div className="mbr-section-btn item-footer mt-2">
              <a
                href="https://r.search.yahoo.com/_ylt=Awr1TUKhEWdkID0LTQqzRwx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1684505121/RO=10/RU=https%3a%2f%2fmyspacehotel.com%2fmy-space-hotel-bgc%2f/RK=2/RS=lneL81Yh4fEkSDjQFDn5LdA0SBM-"
                className="btn btn-primary item-btn display-7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More &lt;
              </a>
            </div>
            </div>
           
          </div>

        {/* Slide 4 */}
       
          <div className="slide-content h-300 pt-5">
            <div className="item-wrapper">
                <div className="item-img ml-10 ">
                <img src="images/images-4-278x181.webp" alt="Mobirise Website Builder" />
              </div>
            </div>
           <div className="item-content bg-gray-200 ml-10  bg-gray-200">
              <h5 className="item-title mbr-fonts-style display-5"><strong>Ascott Hotel Bonifacio Global City Manila</strong></h5>
              <p className="mbr-text mbr-fonts-style mt-3 display-7">
                <em>Ascott Bonifacio Global City Manila is one of the premium serviced apartments in Manila offering you modern accommodation, a host of amenities &amp; services.</em>
              </p> <div className="mbr-section-btn item-footer mt-2">
              <a
                href="https://www.guestreservations.com/ascott-bonifacio-global-city-manila/booking?msclkid=2cdcb955e7b31f91939cdd32e88aa8b8"
                className="btn btn-primary item-btn display-7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More &lt;
              </a>
            </div>
            </div>
           
          </div>
      </Slider>
    );
  }
}

function ManilaCondo() {
  useEffect(() => {
    document.title = "BGC-HOTEL";
  }, []);
  return (
    <section className="slider4 mbr-embla cid-tEzwvrEiry" id="slider4-2j">
      <div className="position-relative text-center">
        <div className="mbr-section-head">
          <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-5">
            <strong>&nbsp; &nbsp; &nbsp; &nbsp;</strong>
            <a
              href="/accomodation"
              className="text-primary "
              target="_blank"
              rel="noopener noreferrer"
            >
              Back
            </a>
          </h4>
        </div>
      </div>
      <DestiSlider />
    </section>
  );
}

export default ManilaCondo;
