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
              <img
                src="images/ab685bdcf1861e862f92d972afa622f5-259x202.webp"
                alt="Mobirise Website Builder"
                data-slide-to="0"
                data-bs-slide-to="0"
              />
            </div>
          </div>
          <div className="item-content bg-gray-200 ml-10  bg-gray-200">
            <h5 className="item-title mbr-fonts-style display-5">
              <strong>Pangil Beach Resort</strong>
            </h5>
            <p className="mbr-text mbr-fonts-style mt-3 display-7">
              <em>
                Welcoming guests to a balcony and a dining area, the rooms are
                furnished with a work desk. The bathrooms come with a bathtub, a
                separate toilet and showers for more comfort.
                <br />
                Comprising 19 rooms, the 3-star Pangil Beach Resort Currimao is
                approximately 3.6 miles from the notable Paoay Church.
              </em>
              <br />
            </p> <div className="mbr-section-btn item-footer mt-2">
            <a
              href="https://pangil-beach-resort-currimao.booked.net/"
              className="btn btn-primary item-btn display-7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More &lt;
            </a>
          </div>
          </div>
         
        </div>
        <div
          className="embla__slide slider-image item"
          style={{ marginLeft: "2rem", marginRight: "2rem" }}
        >
          <div className="slide-content h-300 pt-5">
            <div className="item-wrapper">
              <div className="item-img ml-10 ">
                <img
                  src="images/beach-area-550x413.webp"
                  alt="Mobirise Website Builder"
                  data-slide-to="1"
                  data-bs-slide-to="1"
                />
              </div>
            </div>
            <div className="item-content bg-gray-200 ml-10  bg-gray-200">
              <h5 className="item-title mbr-fonts-style display-5">
                <strong>Villa Andrea Beach Resort</strong>
              </h5>
              <p className="mbr-text mbr-fonts-style mt-3 display-7">
                <em>
                  We offer the best and affordable hotel accommodation packages
                  ideal for couple, family, or group of friends, and corporate
                  travel-events. This is "The Boracay of the North"
                  <br />
                  Pagudpud is a fourth class municipality and a coastal resort
                  town of Ilocos Norte province, in the northern Ilocos Region
                  of the Philippines.
                </em>
              </p><div className="mbr-section-btn item-footer mt-2">
              <a
                href="http://www.pagudpudbeachresort.com.ph/"
                className="btn btn-primary item-btn display-7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More &lt;
              </a>
            </div>
            </div>
            
          </div>
        </div>
        <div
          className="embla__slide slider-image item"
          style={{ marginLeft: "2rem", marginRight: "2rem" }}
        >
          <div className="slide-content h-300 pt-5">
            <div className="item-wrapper">
              <div className="item-img ml-10 ">
                <img
                  src="images/front-of-the-resort-225x149.webp"
                  alt="Mobirise Website Builder"
                />
              </div>
            </div>
            <div className="item-content bg-gray-200 ml-10  bg-gray-200">
              <h5 className="item-title mbr-fonts-style display-5">
                <strong>Kapuluan Vista Resort</strong>
              </h5>
              <p className="mbr-text mbr-fonts-style mt-3 display-7">
                <em>
                  The Kapuluan Vista Resort was awarded The Most Innovative
                  Beach Resort in Northern Philippines and has been selected
                  several times for being one of the top resorts in the
                  Philippines. Kapuluan Vista Resort also has a freshwater
                  swimming pool, a lovely garden, and a restaurant and bar. They
                  also pride themselves on very friendly and welcoming staff.
                </em>
                <br />
              </p> <div className="mbr-section-btn item-footer mt-2">
              <a
                href="http://kapuluanvista.pagudpodshore.com/"
                className="btn btn-primary item-btn display-7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More &lt;
              </a>
            </div>
            </div>
           
          </div>
        </div>
        <div
          className="embla__slide slider-image item"
          style={{ marginLeft: "2rem", marginRight: "2rem" }}
        >
          <div className="slide-content h-300 pt-5">
            <div className="item-wrapper">
              <div className="item-img ml-10 ">
                <img
                  src="images/1614960584-ilocos-urban-wave-resort-960x640.webp"
                  alt="Mobirise Website Builder"
                />
              </div>
            </div>
            <div className="item-content bg-gray-200 ml-10  bg-gray-200">
              <h5 className="item-title mbr-fonts-style display-5">
                <strong>Ilocos Urban Wave Resort</strong>
              </h5>
              <p className="mbr-text mbr-fonts-style mt-3 display-7">
                <em>
                  ILOCOS URBAN WAVE RESORT is the first and only wave pool
                  complex in Ilocos Region which is located at Brgy. 38-A
                  Mangato, Laoag City, Ilocos Norte.
                </em>
                <br />
              </p> <div className="mbr-section-btn item-footer mt-2">
              <a
                href="https://www.hotels1000.com/PH/Laoag-City/113382233431974/Ilocos-Urban-Wave-Resort"
                className="btn btn-primary item-btn display-7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More &lt;
              </a>
            </div>
            </div>
           
          </div>
        </div>
      </Slider>
    );
  }
}

function ManilaCondo() {
  useEffect(() => {
    document.title = "Ilocos Resort";
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
