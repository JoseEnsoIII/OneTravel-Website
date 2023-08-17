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
              <div className="item-img ml-10">
                <img src="images/veranda-condo-taguig-photo-2-259x184.webp" alt="Mobirise Website Builder" />
              </div>
            </div>
              <div className="item-content bg-gray-200 ml-10 bg-gray-200">
              <h5 className="item-title mbr-fonts-style display-5"><strong>Ayala Land in Taguig</strong></h5>
              <p className="mbr-text mbr-fonts-style mt-3 display-7">
                <em>Ayala Land in Taguig brings to life another urban haven in the city with Arca South. It’s a new enclave that fulfills Ayala Land’s principles of sustainable development. With Arca South’s refreshing streetscapes and proposed large-scale commercial district, it presents the most coveted condominiums for sale in Taguig.</em>
              </p> <div className="mbr-section-btn item-footer mt-2">
              <a
                href="https://www.ayalaland.com.ph/residences/taguig-city/"
                className="btn btn-primary item-btn display-7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More &lt;
              </a>
            </div>
            </div>
           
          </div>


        {/* Slide 6 */}
        
          <div className="slide-content h-300 pt-5">
            <div className="item-wrapper">
              <div className="item-img ml-10">
                <img src="images/de-639x426.webp" alt="Mobirise Website Builder" />
              </div>
            </div>
              <div className="item-content bg-gray-200 ml-10 bg-gray-200">
              <h5 className="item-title mbr-fonts-style display-5"><strong>Breeze &amp; views - Avant @ The Fort - Manila BGC</strong></h5>
              <p className="mbr-text mbr-fonts-style mt-3 display-7">
                <em>Avant at The Fort located on 26th Street Corner 3rd Ave. is the premium area of Fort Bonifacio Global City. Banks, coffee shops, and convenience stores are just downstairs. All the leading offices for your condominium choice.</em>
              </p> <div className="mbr-section-btn item-footer mt-2">
              <a
                href="https://www.tripadvisor.com.au/VacationRentalReview-g1758900-d6512694-Breeze_views_Avant_The_Fort_Manila_BGC-Taguig_City_Metro_Manila_Luzon.html"
                className="btn btn-primary item-btn display-7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More &lt;
              </a>
            </div>
            </div>
           
          </div>

        {/* Slide 7 */}
        
          <div className="slide-content h-300 pt-5">
            <div className="item-wrapper">
              <div className="item-img ml-10">
                <img src="images/images-6-200x251.webp" alt="Mobirise Website Builder" />
              </div>
            </div>
              <div className="item-content bg-gray-200 ml-10 bg-gray-200">
              <h5 className="item-title mbr-fonts-style display-5"><strong>Cypress Towers Taguig</strong></h5>
              <p className="mbr-text mbr-fonts-style mt-3 display-7">
                <em>Cypress Towers is a condo project and contains 114 total units. Units range from 1 bedroom to 3 bedrooms. Cypress Towers at Taguig, Metro Manila has the following facilities: CCTV, fitness, garden, and more.</em>
              </p><div className="mbr-section-btn item-footer mt-2">
              <a
                href="https://www.cypresstowers.com.ph/"
                className="btn btn-primary item-btn display-7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More &lt;
              </a>
            </div>
            </div>
            
          </div>

        {/* Slide 8 */}
        
          <div className="slide-content h-300 pt-5">
            <div className="item-wrapper">
              <div className="item-img ml-10">
                <img src="images/the-courtyard-taguig-by-camella-condo-homes-philippines-4-960x1034.webp" alt="Mobirise Website Builder" />
              </div>
            </div>
              <div className="item-content bg-gray-200 ml-10 bg-gray-200">
              <h5 className="item-title mbr-fonts-style display-5">
                <strong>The Courtyard Taguig by Camella Condo Homes ~ Camella Condo Homes Philippines</strong>
              </h5>
              <p className="mbr-text mbr-fonts-style mt-3 display-7">
                <em>Condo-living in Taguig is an exciting prospect to consider, especially if you are planning to move from where you currently live. While it can be stressful to think about living in a new condominium.</em>
              </p> <div className="mbr-section-btn item-footer mt-2">
              <a
                href="https://www.archify.com/ph/project/the-courtyard"
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
    document.title = "BGC-CONCONDOMINIUM";
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
