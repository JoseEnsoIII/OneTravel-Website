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
              <img
                src="images/10034528-1365x768-fit-and-trim-8d21c647b0289b6d88d36a05ad458241.webp"
                alt="Mobirise Website Builder"
                data-slide-to="0"
                data-bs-slide-to="0"
              />
            </div>
          </div>
          <div className="item-content bg-gray-200 ml-10 bg-gray-200">
            <h5 className="item-title mbr-fonts-style display-5">
              <strong>Balai Condominium</strong>
            </h5>
            <p className="mbr-text mbr-fonts-style mt-3 display-7">
              <em>
                Balai Condominiums is an upscale condominium located within a
                business center – the Valdez Center, where your security and
                comfort is our utmost priority. Enjoy the luxury of home with
                top of the line amenities and services that only we can offer.
                Entertain inside the Club House or take a refreshing dive into
                the swimming pool located within the condominium complex.
                Discover the best way to live, work, and play in Ilocandia. Be
                part of the elite community only at Balai Condominiums.
              </em>
            </p> <div className="mbr-section-btn item-footer mt-2">
            <a
              href="https://www.airbnb.com/rooms/16900984?source_impression_id=p3_1684466931_2C2FI3LSsQbN7zsz"
              className="btn btn-primary item-btn display-7"
            >
              Read More &lt;
            </a>
          </div>
          </div>
         
        </div>

        <div className="slide-content h-300 pt-5">
          <div className="item-wrapper">
            <div className="item-img ml-10">
              <img
                src="images/383410807-840x460.webp"
                alt="Mobirise Website Builder"
                data-slide-to="1"
                data-bs-slide-to="1"
              />
            </div>
          </div>
          <div className="item-content bg-gray-200 ml-10 bg-gray-200">
            <h5 className="item-title mbr-fonts-style display-5">
              <strong>Vivere Condominium in Ilocos Sur</strong>
            </h5>
            <p className="mbr-text mbr-fonts-style mt-3 display-7">
              <em>
                Experience an exceptional Condominium lifestyle at the heart of
                Barangay III Vivere Condominium is a Condominium in Vigan, one
                of the top cities in Ilocos Sur. Vivere Condominium provides its
                residents with a lifestyle of privilege that many people can
                only dream of. Vivere Condominium is yet again breaking the
                boundaries of residential living by bringing comfort and
                affordability, ensuring residents live the life they deserve as
                they create more amazing memories with their families.
              </em>
            </p> <div className="mbr-section-btn item-footer mt-2">
            <a
              href="https://www.lamudi.com.ph/projects/vivere-condominium/"
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
            <div className="item-img ml-10">
              <img
                src="images/images-3-300x168.webp"
                alt="Mobirise Website Builder"
              />
            </div>
          </div>
          <div className="item-content bg-gray-200 ml-10 bg-gray-200">
            <h5 className="item-title mbr-fonts-style display-5">
              <strong>Bramasole Condominium Laoag</strong>
            </h5>
            <p className="mbr-text mbr-fonts-style mt-3 display-7">
              <em>
                Bramasole By Vista Estates is the first-ever smart condominium
                with resort-themed amenities in Laoag City. Experience luxurious
                lifestyle and feel the ease of everyday life by being near to
                everything that you need. Experience the best of both worlds as
                this innovative development seamlessly blends the charm and
                spaciousness of estate living with the convenience and
                cutting-edge smart technology features of a modern condominium,
                creating a truly unique and futuristic living experience.
              </em>
            </p><div className="mbr-section-btn item-footer mt-2">
            <a
              href="https://www.lamudi.com.ph/bramasole-condominium-laoag-city-167831770126.html"
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
            <div className="item-img ml-10">
              <img
                src="images/download-8-259x194.webp"
                alt="Mobirise Website Builder"
              />
            </div>
          </div>
          <div className="item-content bg-gray-200 ml-10 bg-gray-200">
            <h5 className="item-title mbr-fonts-style display-5">
              <strong>San Nicholas Condominium</strong>
            </h5>
            <p className="mbr-text mbr-fonts-style mt-3 display-7">
              <em>
                Pottery-making is the main trademark of San Nicolas. It was
                introduced by the Spaniards mainly in Barangay 8, and they
                called it Alfareria, meaning "Art of Pottery". Other traditional
                crafts include the making of Tagapulot, Lapida, Chicharon, and
                Longganisa. The town also has large rice fields. San Nicolas
                also has a number of car stores and shops. Robinsons Ilocos, the
                largest mall in the province is located in the town center.
              </em>
            </p>  <div className="mbr-section-btn item-footer mt-2">
            <a
              href="https://www.myproperty.ph/ilocos-norte/san-nicolas-1/condominium/buy/"
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
    document.title = "Ilocos Condo ";
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
