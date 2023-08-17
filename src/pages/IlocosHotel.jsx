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
                src="images/download-7-259x194.webp"
                alt="Mobirise Website Builder"
                data-slide-to="0"
                data-bs-slide-to="0"
              />
            </div>
          </div>
          <div className="item-content bg-gray-200 ml-10  bg-gray-200">
            <h5 className="item-title mbr-fonts-style display-5">
              <strong>Java Hotel</strong>
            </h5>
            <p className="mbr-text mbr-fonts-style mt-3 display-7">
              <em>
                Java Hotel offers numerous services and facilities to satisfy
                even the most discerning guest. Its strategic location makes it
                a perfect base to explore Ilocos. Corporate visitors will
                appreciate its proximity to downtown and the airport. If you
                need a ride from or to the airport, the hotel can arrange this
                for you. If you plan to arrive by car, you'll appreciate the
                hotel's free parking, right on-site.
              </em>
              <br />
            </p><div className="mbr-section-btn item-footer mt-2">
            <a
              href="https://www.javahotel.com.ph/"
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
              <img
                src="images/237227-14062515020020027000-1000x750.webp"
                alt="Mobirise Website Builder"
                data-slide-to="1"
                data-bs-slide-to="1"
              />
            </div>
          </div>
          <div className="item-content bg-gray-200 ml-10  bg-gray-200">
            <h5 className="item-title mbr-fonts-style display-5">
              <strong>Plaza Del Norte</strong>
            </h5>
            <p className="mbr-text mbr-fonts-style mt-3 display-7">
              <em>
                Plaza del Norte Hotel and Convention Center is located at Laoag
                City, Ilocos Norte, Philippines. It offers 96 exquisitely
                designed rooms, all of which have air-conditioning system, cable
                TV, private toilet and bath, phone and coffee/tea maker. Some of
                its amenities include high-speed Internet access, swimming pool,
                and restaurant, bar and café.
              </em>
            </p> <div className="mbr-section-btn item-footer mt-2">
            <a
              href="https://www.tripadvisor.com.ph/Hotel_Review-g612374-d1743688-Reviews-Plaza_del_Norte_Hotel_and_Convention_Center-Laoag_Ilocos_Norte_Province_Ilocos_Region_.html"
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
              <img
                src="images/564594-14032713550018877000-1000x750.webp"
                alt="Mobirise Website Builder"
              />
            </div>
          </div>
          <div className="item-content bg-gray-200 ml-10  bg-gray-200">
            <h5 className="item-title mbr-fonts-style display-5">
              <strong>Hotel Luna</strong>
            </h5>
            <p className="mbr-text mbr-fonts-style mt-3 display-7">
              <em>
                Situated in the heart of the heritage city of Vigan, this
                architectural beauty is reminiscent of the city’s glorious past.
                Hotel Luna is perfectly situated for business and leisure with
                easy access to the central business district and multitude of
                travel destinations. The classic blends seamlessly with the
                contemporary in the 70 rooms and suites of Hotel Luna and Hotel
                Luna Annex.
              </em>
              <br />
            </p> <div className="mbr-section-btn item-footer mt-2">
            <a
              href="https://hotelluna.ph/"
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
              <img
                src="images/0221g120009gmm4naf161-r-960-660-r5-d.webp"
                alt="Mobirise Website Builder"
              />
            </div>
          </div>
          <div className="item-content bg-gray-200 ml-10  bg-gray-200">
            <h5 className="item-title mbr-fonts-style display-5">
              <strong>Playa Tropical</strong>
            </h5>
            <p className="mbr-text mbr-fonts-style mt-3 display-7">
              <em>
                Playa Tropical’s best asset is rooted in its design, but its
                core is founded on the warm Ilocano hospitality that you can
                experience the moment you book a reservation with our friendly
                staff. Always ready to happily serve you, your greatest takeaway
                will be the created bond with your loved ones and the newfound
                relationship with our team.
              </em>
              <br />
            </p><div className="mbr-section-btn item-footer mt-2">
            <a
              href="http://playatropical.ph/"
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
    document.title = "Ilocos Hotel";
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
