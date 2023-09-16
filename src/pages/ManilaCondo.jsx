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
          <img src="/images/download-2-276x182.webp" alt="Mobirise Website Builder" data-slide-to="0" data-bs-slide-to="0" />
        </div>
      </div>
      <div className="item-content bg-gray-200 ml-10  bg-gray-200">
        <h5 className="item-title mbr-fonts-style display-5">
          <strong>Ayala Land Condominium</strong>
        </h5>
        <p className="mbr-text mbr-fonts-style mt-3 display-7">
          <em>The 5-star The Manila Hotel is one of the best hotels in Manila, the capital of the Philippines. It has 515 rooms and suites, free Wi-Fi, and is the ideal base for exploring the top tourist spots in Manila.</em>
        </p><div className="mbr-section-btn item-footer mt-2">
        <a href="https://www.ayalaland.com.ph/residences/manila-city/" className="btn btn-primary item-btn display-7" target="_blank" rel="noopener noreferrer">
          Read More &lt;
        </a>
      </div>
      </div>
      
    </div>

    <div className="slide-content h-300 pt-5" >
      <div className="item-wrapper">
      <div className="item-img ml-10 ">
          <img src="/images/download-3-299x168.webp" alt="Mobirise Website Builder" data-slide-to="1" data-bs-slide-to="1" />
        </div>
      </div>
      <div className="item-content bg-gray-200 ml-10  bg-gray-200">
        <h5 className="item-title mbr-fonts-style display-5">
          <strong>Luxury Condo in Manila</strong>
        </h5>
        <p className="mbr-text mbr-fonts-style mt-3 display-7">
          <em>a luxury condominium can then be described as a residential property that delivers all these definitions through a range of factors, those of which that go beyond the essential needs of a resident, tenant, or stakeholder.</em>
        </p><div className="mbr-section-btn item-footer mt-2">
        <a href="https://www.jamesedition.com/real_estate/condo-metro-manila-philippines" className="btn btn-primary item-btn display-7" target="_blank" rel="noopener noreferrer">
          Read More &lt;
        </a>
      </div>
      </div>
      
    </div>

    <div className="slide-content h-300 pt-5" >
      <div className="item-wrapper">
        <div className="item-img ml-10 ">
          <img src="/images/9123a5-dc795e8ac9dc4ac090aed56cae99bbb8mv2.webp" alt="Mobirise Website Builder" data-slide-to="2" data-bs-slide-to="2" />
        </div>
      </div>
      <div className="item-content bg-gray-200 ml-10  bg-gray-200">
        <h5 className="item-title mbr-fonts-style display-5">
          <strong>High end Condo's in Metro Manila</strong>
        </h5>
        <p className="mbr-text mbr-fonts-style mt-3 display-7">
          For a condo to be considered luxurious, it must fulfill certain criteria beyond a high price tag. Among these are a truly great location, unobstructed views, architectural uniqueness, limited units per floor, and abundant ceiling height and square footage. In addition, top-notch amenities, such as a heated indoor swimming pool, create a luxurious and exclusive feeling.
        </p> <div className="mbr-section-btn item-footer mt-2">
        <a href="https://www.lamudi.com.ph/journal/metro-manilas-expensive-luxurious-condos/" className="btn btn-primary item-btn display-7" target="_blank" rel="noopener noreferrer">
          Read More &lt;
        </a>
      </div>
      </div>
     
    </div>

      <div className="slide-content h-300 pt-5">
        <div className="item-wrapper">
          <div className="item-img ml-10 ">
            <img src="/images/download-4-256x197.webp" alt="Mobirise Website Builder" data-slide-to="3" data-bs-slide-to="3" />
          </div>
        </div>

        
        <div className="item-content bg-gray-200 ml-10 " bg-gray-200>
          <h5 className="item-title mbr-fonts-style display-5">
            <strong>Torre de Manila Condominium</strong>
          </h5>
          <p className="mbr-text mbr-fonts-style mt-3 display-7">
            <em>
              The Torre de Manila (lit. 'Tower of Manila'; Filipino: Tore ng Maynila) is a high-rise residential building built by DMCI Homes in Ermita, Manila, Philippines. The building has been controversial due to its proximity to the Rizal Monument and has been publicly known as "a national photobomber" (Filipino: Pambansang Fotobamer) and "a national disgrace to Rizal".
            </em>
          </p> <div className="mbr-section-btn item-footer mt-2">
          <a href="https://www.dotproperty.com.ph/condo/551/torre-de-manila" className="btn btn-primary item-btn display-7" target="_blank" rel="noopener noreferrer">
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
    document.title = "Manila Condo";
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
