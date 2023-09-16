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
    <img src="/images/download-9-204x116.webp" alt="Mobirise Website Builder" />
  </div>
</div>
   <div className="item-content bg-gray-200 ml-10  bg-gray-200">
  <h5 className="item-title mbr-fonts-style display-5"><strong>RedDoorz Plus @ Villa Gloria Taguig</strong></h5>
  <p className="mbr-text mbr-fonts-style mt-3 display-7">
    <em>hotels in Taguig City The spacious rooms offer complete amenities including hot and cold showers, comfortable beds, fast and reliable Internet connection, cable TV, toiletries, and many more.</em>
  </p><div className="mbr-section-btn item-footer mt-2">
  <a
    href="https://www.reddoorz.com/en-id/hotel/philippines/southern-manila-district/taguig-city/tuktukan/reddoorz-plus-villa-gloria-taguig"
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
    <img src="/images/2019-10.webp" alt="Mobirise Website Builder" />
  </div>
</div>
   <div className="item-content bg-gray-200 ml-10  bg-gray-200">
  <h5 className="item-title mbr-fonts-style display-5"><strong>Sea Breeze Resort And Restaurant</strong></h5>
  <p className="mbr-text mbr-fonts-style mt-3 display-7">
    <em>Sea Breeze Resort and Restaurant is Taguig City’s first swimming pool resort which was constructed in the late 90s. Having been expanded and renovated over the years—it now has 10 swimming pools and boasts its very own wave pool.</em>
  </p><div className="mbr-section-btn item-footer mt-2">
  <a
    href="https://www.wonderingwanderer.com/sea-breeze-resort-restaurant-taguig-city/"
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
    <img src="/images//images-5-275x183.webp" alt="Mobirise Website Builder" />
  </div>
</div>
   <div className="item-content bg-gray-200 ml-10  bg-gray-200">
  <h5 className="item-title mbr-fonts-style display-5"><strong>Venice Luxury</strong></h5>
  <p className="mbr-text mbr-fonts-style mt-3 display-7">
    <em>Stunning luxury hotel behind a classic Venetian facade perfectly situated on the Grand Canal. Fabulous rooms and suites filled with contemporary art, trendy designer furniture and clever overall.</em>
  </p><div className="mbr-section-btn item-footer mt-2">
  <a
    href="https://www.tripadvisor.com/SmartDeals-g187870-zft9650,9672-Venice_Veneto-Hotel-Deals.html"
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
    <img src="/images/kh0axzjdpgixwcevqx8h-960x640.webp" alt="Mobirise Website Builder" />
  </div>
</div>
   <div className="item-content bg-gray-200 ml-10  bg-gray-200">
  <h5 className="item-title mbr-fonts-style display-5"><strong>Seda BGC Resort</strong></h5>
  <p className="mbr-text mbr-fonts-style mt-3 display-7">
    <em>From big city to exotic locales, our hotels are located in the emerging CBDs close to shopping, dining, and entertainment options for you to explore. Wherever you are, you will always delight in our unique brand of Filipino hospitality and service efficiency.</em>
  </p><div className="mbr-section-btn item-footer mt-2">
  <a
    href="https://sedahotels.com/"
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
    document.title = "BGC-RESORT";
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
