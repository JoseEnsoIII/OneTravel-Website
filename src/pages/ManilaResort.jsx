import React ,{useEffect}from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css';
import AOS from 'aos';

class DestiSlider extends React.Component {
 
  render() {
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

    return (
      <Slider {...settings}>
        <div className="slide-content h-300 pt-5" data-aos="fade-up" data-aos-duration="500">
          <div className="item-wrapper">
            <div className="item-img ml-10">
              <img
                src="images/960x0-960x768.webp"
                alt="Mobirise Website Builder"
              />
            </div>
          </div>
        <div className="item-content h-300 bg-gray-200 ml-10 bg-gray-200">
            <h5 className="item-title mbr-fonts-style display-5">
              <strong>Forbes Vetted</strong>
            </h5>
            <p className="mbr-text mbr-fonts-style mt-3 display-7">
              <em>
                Our recommendations for products and services are the result of
                careful, thorough research from our team of writers, experienced
                consumer advocates and subject matter experts. Each product we
                feature is doubly vetted by our staff editors to ensure that
                only the best advice reaches our readers.
              </em>
            </p><div className="mbr-section-btn item-footer mt-2">
            <a
              href="https://www.forbes.com/sites/forbes-personal-shopper/article/about-forbes-vetted/?sh=14e1c94f1d6e"
              className="btn btn-primary item-btn display-7"
              target="_blank"
            >
              Read More &lt;
            </a>
          </div>
          </div>
          
        </div>

        <div className="slide-content h-300 pt-5" data-aos="fade-up" data-aos-duration="500">
          <div className="item-wrapper">
            <div className="item-img ml-10">
              <img
                src="images/335672877-675x768.webp"
                alt="Mobirise Website Builder"
              />
            </div>
          </div>
        <div className="item-content h-300 bg-gray-200 ml-10 bg-gray-200">
            <h5 className="item-title mbr-fonts-style display-5">
              <strong>Lime Resort</strong>
            </h5>
            <p className="mbr-text mbr-fonts-style mt-3 display-7">
              <em>
                The hotel will provide guests with air-conditioned rooms
                offering a desk, a kettle, a fridge, a safety deposit box, a
                flat-screen TV and a private bathroom with a bidet. At Lime
                Resort Manila, the rooms have bed linen and towels. The daily
                breakfast offers buffet, continental or Asian options.
              </em>
            </p> <div className="mbr-section-btn item-footer mt-2">
            <a
              href="https://lime.ph/"
              className="btn btn-primary item-btn display-7"
              target="_blank"
            >
              Read More &lt;
            </a>
          </div>
          </div>
         
        </div>

        <div className="slide-content h-300 pt-5" data-aos="fade-up" data-aos-duration="500">
          <div className="item-wrapper">
            <div className="item-img ml-10">
              <img
                src="images/335672877-675x768.webp"
                alt="Mobirise Website Builder"
              />
            </div>
          </div>
        <div className="item-content h-300 bg-gray-200 ml-10 bg-gray-200">
            <h5 className="item-title mbr-fonts-style display-5">
              <strong>Adventure Beach Water Park</strong>
            </h5>
            <p className="mbr-text mbr-fonts-style mt-3 display-7">
              <em>
                A water park (also waterpark, water world, aquapark) is an
                amusement park that features water play areas such as swimming
                pools, water slides, splash pads, water playgrounds, and lazy
                rivers, as well as areas for floating, bathing, swimming, and
                other barefoot environments.
              </em>
            </p> <div className="mbr-section-btn item-footer mt-2">
            <a
              href="https://adventurebeach.ph/"
              className="btn btn-primary item-btn display-7"
              target="_blank"
            >
              Read More &lt;
            </a>
          </div>
          </div>
         
        </div>

        <div className="slide-content h-300 pt-5" data-aos="fade-up" data-aos-duration="500">
          <div className="item-wrapper">
            <div className="item-img ml-10">
              <img
                src="images/mhg-6848-pano-2-min-240x204.webp"
                alt="Mobirise Website Builder"
              />
            </div>
          </div>
        <div className="item-content h-300 bg-gray-200 ml-10 bg-gray-200">
            <h5 className="item-title mbr-fonts-style display-5">
              <strong>Sofitel Philippine Plaza</strong>
            </h5>
            <p className="mbr-text mbr-fonts-style mt-3 display-7">
              <em>
                The hotel was originally built as the Philippine Plaza, the
                hotel was designed by Leandro Locsin of Leandro V. Locsin &amp;
                Partners, who would be named a National Artist of the
                Philippines for architecture.[2]
              </em>
            </p> <div className="mbr-section-btn item-footer mt-2">
            <a
              href="https://www.guestreservations.com/sofitel-philippine-plaza-manila/booking?msclkid=49def37f9cf1117dd1ad971a286c7f3a"
              className="btn btn-primary item-btn display-7"
              target="_blank"
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

function ManilaResort() {
  useEffect(() => {
    document.title = "Manila Resort";
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="slider4 mbr-embla cid-tEzwvrEiry" id="slider4-2j">
      <div className="position-relative text-center">
        <div className="mbr-section-head">
          <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-5">
            <strong>&nbsp; &nbsp; &nbsp; &nbsp;</strong>
            <a
              href="/accomodation"
              className="text-primary"
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

export default ManilaResort;
