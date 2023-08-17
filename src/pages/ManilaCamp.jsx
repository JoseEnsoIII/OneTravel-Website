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
        <div className="slide-content h-300 pt-5" >
        <div className="item-wrapper">
        <div className="item-img ml-10 ">
          <img src="images/download-5-271x186.webp" alt="Mobirise Website Builder" />
        </div>
      </div>
      <div className="item-content bg-gray-200 ml-10  bg-gray-200">
        <h5 className="item-title mbr-fonts-style display-5">
          <strong>Springs Mountain Park</strong>
        </h5>
        <p className="mbr-text mbr-fonts-style mt-3 display-7">
          <em>
          A Nature Park and Campsite in Tanay, Rizal with a panoramic view of the Sierra Madre Mountain Range. The Park offers open areas and facilities perfect for large-scale outdoor activities.
          </em>
          <br />
        </p> <div className="mbr-section-btn item-footer mt-2">
        <a
          href="https://guidetothephilippines.ph/destinations-and-attractions/kampo-juan"
          className="btn btn-primary item-btn display-7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More &lt;
        </a>
      </div>
      </div>
      
      </div>
      <div className="slide-content h-300 pt-5">
      <div className="item-wrapper">
        <div className="item-img ml-10 ">
          <img src="images/lmu92odyy1nprph8w6gu.webp" alt="Mobirise Website Builder" />
        </div>
      </div>
      <div className="item-content bg-gray-200 ml-10  bg-gray-200">
        <h5 className="item-title mbr-fonts-style display-5">
          <strong>Kampo ni Juan</strong>
        </h5>
        <p className="mbr-text mbr-fonts-style mt-3 display-7">
          <em>
            Kampo Juan is famous for their Anicycle, Philippines’ version of sky biking to pair it
            with other countries. The bicycle is basically placed 100 feet above ground and like a
            normal bike, it functions by pedaling by feet only. Guests who’ll be trying this ride
            are usually strapped by safety harness and the bike and remember, it is 100 feet above
            ground!
          </em>
          <br />
        </p> <div className="mbr-section-btn item-footer mt-2">
        <a
          href="https://guidetothephilippines.ph/destinations-and-attractions/kampo-juan"
          className="btn btn-primary item-btn display-7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More &lt;
        </a>
      </div>
      </div>
     
    </div>

    <div className="slide-content h-300 pt-5">
        <div className="item-wrapper">
          <div className="item-img ml-10 ">
            <img src="images/xt0k1xjq36czuzhaadug.webp" alt="Mobirise Website Builder" />
          </div>
        </div>
        <div className="item-content bg-gray-200 ml-10  bg-gray-200">
          <h5 className="item-title mbr-fonts-style display-5">
            <strong>Silent Sanctuary Reserve Campgrounds</strong>
          </h5>
          <p className="mbr-text mbr-fonts-style mt-3 display-7">
            <em>
              The Silent Sanctuary Reserve Campground welcomed its first campers in September 2020
              and since then, it has been one of the most sought-after camping destinations not far
              from Metro Manila. There are 5 camp areas to choose from: Island Campsite, Lakeview
              Campsite, Mountain View Campsite, Grasslands, and the Clubhouse, each offering a
              unique experience everyone can enjoy.
            </em>
            <br />
            <br />
          </p> <div className="mbr-section-btn item-footer mt-2">
          <a
            href="https://campsites.ph/campsite/the-silent-sanctuary"
            className="btn btn-primary item-btn display-7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More &lt;
          </a>
        </div>
        </div>
       
      </div>
    

        
        <div className="slide-content h-300 pt-5">
        <div className="item-wrapper">
          <div className="item-img ml-10 ">
            <img src="images/xtmqixevtljkdfrtr69t.webp" alt="Mobirise Website Builder" />
          </div>
        </div>
        <div className="item-content bg-gray-200 ml-10  bg-gray-200">
          <h5 className="item-title mbr-fonts-style display-5">
            <strong>&nbsp;Kaliraya Surf Kamp</strong>
          </h5>
          <p className="mbr-text mbr-fonts-style mt-3 display-7">
            <em>
              Kaliraya Surf Kamp is home to amazing nature views of Cavinti, Laguna, including
              breathtaking scenery of the man-made Caliraya Lake that you can watch from under a
              tree as you take in the cool and windy mountain breeze.
            </em>
            <br />
          </p> <div className="mbr-section-btn item-footer mt-2">
          <a
            href="https://www.windowseat.ph/kaliraya-surf-kamp/"
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
    document.title = "Manila Camp";
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
