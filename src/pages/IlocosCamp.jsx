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
            <img src="images/maxresdefault-1-259x146.webp" alt="Mobirise Website Builder" data-slide-to="0" data-bs-slide-to="0" />
        </div>
    </div>
    <div className="item-content bg-gray-200 ml-10  bg-gray-200">
        <h5 className="item-title mbr-fonts-style display-5"><strong>View Deck|Brgy. Pangil Currimao, Ilocos Norte</strong></h5>
        <p className="mbr-text mbr-fonts-style mt-3 display-7">
            <em>Pangil is a barangay in the municipality of Currimao, in the province of Ilocos Norte. Its population as determined by the 2020 Census was 541. This represented 4.43% of the total population of Currimao.</em>
        </p> <div className="mbr-section-btn item-footer mt-2">
        <a href="https://www.philatlas.com/luzon/r01/ilocos-norte/currimao/pangil.html" className="btn btn-primary item-btn display-7" target="_blank" rel="noopener noreferrer">Read More &lt;</a>
    </div>
    </div>
   
</div>

    <div className="slide-content h-300 pt-5">
        <div className="item-wrapper">
           <div className="item-img ml-10 ">
                <img src="images/p-20180504-090551-1-1-800x469.webp" alt="Mobirise Website Builder" data-slide-to="1" data-bs-slide-to="1" />
            </div>
        </div>
        <div className="item-content bg-gray-200 ml-10  bg-gray-200">
            <h5 className="item-title mbr-fonts-style display-5"><strong>Camp Avenue La Union: A Sanctuary for Campers and Wanderers Del Norte</strong></h5>
            <p className="mbr-text mbr-fonts-style mt-3 display-7">
                <em>When it comes to quick getaways from Metro Manila, La Union is a good choice for weekend warriors. It's a perfect destination for those who want to surf all day or just to chill along the beach. La Union is located in the Ilocos Region which is very accessible from Manila, offering a wide range of accommodations, good restaurants, and exciting outdoor activities.</em>
            </p>  <div className="mbr-section-btn item-footer mt-2">
            <a href="https://www.thepinoytraveler.com/2018/05/camp-avenue-la-union-sanctuary-for.html" className="btn btn-primary item-btn display-7" target="_blank" rel="noopener noreferrer">Read More &lt;</a>
        </div>
        </div>
      
    </div>


    <div className="slide-content h-300 pt-5">
        <div className="item-wrapper">
           <div className="item-img ml-10 ">
                <img src="images/glaming-640-1556507726-640x360.webp" alt="Mobirise Website Builder" />
            </div>
        </div>
        <div className="item-content bg-gray-200 ml-10  bg-gray-200">
            <h5 className="item-title mbr-fonts-style display-5"><strong>Glamping Site North Beach Camp Opens in Pagudpud, Ilocos Norte</strong></h5>
            <p className="mbr-text mbr-fonts-style mt-3 display-7">
                <em>Pagudpud in Ilocos Norte is every outdoor-lover's haven. The coastal town boasts lesser-known white-sand beaches such as Saud Beach and Maira-ira Beach, interesting geological formations such as the Kapurpurawan Rocks, and Kaibigan Falls on the eastern side of the municipality. Adding to this rugged adventure is a new glamping site called the North Beach Camp with the Burgos Windmills as its backdrop.</em>
            </p><div className="mbr-section-btn item-footer mt-2">
            <a href="https://www.spot.ph/things-to-do/the-latest-things-to-do/77707/north-beach-camp-pagudpud-ilocos-norte-a833-20190429" className="btn btn-primary item-btn display-7" target="_blank" rel="noopener noreferrer">Read More &lt;</a>
        </div>
        </div>
        
    </div>


    <div className="slide-content h-300 pt-5">
        <div className="item-wrapper">
           <div className="item-img ml-10 ">
                <img src="images/th-1-268x180.webp" alt="Mobirise Website Builder" />
            </div>
        </div>
        <div className="item-content bg-gray-200 ml-10  bg-gray-200">
            <h5 className="item-title mbr-fonts-style display-5"><strong>Kapurpurawan Rock Formation</strong></h5>
            <p className="mbr-text mbr-fonts-style mt-3 display-7">
                <em>Kapurpurawan Rock Formation is a natural rock formation in Burgos, Ilocos Norte, Philippines. It is located on the northwestern tip of Burgos and is situated right next to another popular tourist attraction, Bangui Wind Farm.</em>
            </p> <div className="mbr-section-btn item-footer mt-2">
            <a href="https://www.lakwatsero.com/spots/kapurpurawan-rock-formation/" className="btn btn-primary item-btn display-7" target="_blank" rel="noopener noreferrer">Read More &lt;</a>
        </div>
        </div>
       
    </div>

      </Slider>
    );
  }
}

function ManilaCondo() {
  useEffect(() => {
    document.title = "Ilocos Camp";
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
