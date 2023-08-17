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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  render() {
    return (
      <Slider {...this.settings}>
       <div className="slide-content h-300 pt-5" >
  <div className="item-wrapper">
    <div className="item-img ml-10">
      <img src="images/20201629270303j2lky53a4ad96651cfc1c5ffbbdffc9735983-259x167.webp" alt="Mobirise Website Builder" />
    </div>
  </div>
  <div className="item-content bg-gray-200 ml-10 bg-gray-200" style={{ flex: 1 }}>
    <h5 className="item-title mbr-fonts-style display-5"><strong>Fort Bonifacio Global City Camp-site</strong></h5>
    <p className="mbr-text mbr-fonts-style mt-3 display-7">
      <em>One of the most highly sought-after business and residential addresses in Metro Manila, Bonifacio Global City has come a long way since this former military camp was developed in the mid-1990s. It is now Metro Manila’s largest and second largest condo and office markets – distinctions that will only get better over the coming years.</em>
    </p>
    <div className="mbr-section-btn item-footer mt-2">
      <a
        href="https://www.colliers.com/en-ph/news/bonifacio-global-city-military-camp-business-district"
        className="btn btn-primary item-btn display-7"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read More &gt;
      </a>
    </div>
  </div>
</div>


{/* Slide 10 */}
   <div className="slide-content h-300 pt-5">
    <div className="item-wrapper">
      <div className="item-img ml-10">
        <img src="images/0106i1200086dkv6sa0ca-1000x656.webp" alt="Mobirise Website Builder" />
      </div>
    </div>
     <div className="item-content bg-gray-200 ml-10 bg-gray-200">
      <h5 className="item-title mbr-fonts-style display-5"><strong>Camp Bagong Diwa Taguig</strong></h5>
      <p className="mbr-text mbr-fonts-style mt-3 display-7">
        <em>The camp serves many functions: within its gates are enclosed a police academy and the Taguig City Jail, but also several jail "annexes" which house inmates the government believes to be too notorious or too dangerous to be safely housed among the regular population. As of December 2018, the camp contains the Manila City Jail Annex, the Quezon City Jail Annex, and the Metro Manila District Jail Annexes 1, 2, and 3.</em>
      </p>  <div className="mbr-section-btn item-footer mt-2">
      <a
        href="https://www.yellow-pages.ph/business/camp-bagong-diwa"
        className="btn btn-primary item-btn display-7"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read More &lt;
      </a>
    </div>
    </div>
  
  </div>


{/* Slide 11 */}
   <div className="slide-content h-300 pt-5">
    <div className="item-wrapper">
      <div className="item-img ml-10">
        <img src="images/global-city-mckinley-hill-625x483.webp" alt="Mobirise Website Builder" />
      </div>
    </div>
     <div className="item-content bg-gray-200 ml-10 bg-gray-200">
      <h5 className="item-title mbr-fonts-style display-5"><strong>Mc Kinley Hill Taguig</strong></h5>
      <p className="mbr-text mbr-fonts-style mt-3 display-7">
        <em>Conveniently situated in the Bonifacio Global City (BGC) / Taguig part of Manila, this property puts you close to attractions and interesting dining options. Don't leave before paying a visit to the famous Intramuros. Rated with 4.5 stars, this high-quality property provides guests with access to a fitness center and an outdoor pool on-site.</em>
      </p><div className="mbr-section-btn item-footer mt-2">
      <a
        href="https://www.agoda.com/venice-mckinley-hill-taguig/hotel/manila-ph.html?cid=-321"
        className="btn btn-primary item-btn display-7"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read More &gt;
      </a>
    </div>
    </div>
    
  </div>


{/* Slide 12 */}
   <div className="slide-content h-300 pt-5">
    <div className="item-wrapper">
    <div className="item-img ml-10">
        <img src="images/bgc-terra-28-1598535331-960x540.webp" alt="Mobirise Website Builder" />
      </div>
    </div>
     <div className="item-content bg-gray-200 ml-10 bg-gray-200">
      <h5 className="item-title mbr-fonts-style display-5"><strong>Open Spaces and Parks in Bonifacio Global City, Taguig</strong></h5>
      <p className="mbr-text mbr-fonts-style mt-3 display-7">
        <em>Terra 28th is where you'll find a children's playground alongside works by local artists through brightly colored sculptures and public art installations. Don't miss Rico Lascano's "Color Me Chameleon," a sculpture featuring wooden blocks on its surface, which you can turn to change its colors.</em>
      </p>
    </div>
    <div className="mbr-section-btn item-footer mt-2">
      <a
        href="https://www.spot.ph/things-to-do/weekend-guides/83396/open-spaces-public-parks-in-bonifacio-global-city-taguig-a833-20200830"
        className="btn btn-primary item-btn display-7"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read More &gt;
      </a>
    </div>
  </div> 
      </Slider>
    );
  }
}

function ManilaCondo() {
    useEffect(() => {
    document.title = "BGC-CAMP";
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
