import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Transportation = () => {
  useEffect(() => {
    document.title = "Transportation";
  }, []);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Set animation duration
      twice: true, // Only animate elements once
    });
  }, []);
  return (
    <>
      <section
        data-aos-duration="1000"
        data-bs-version="5.1"
        className="content4 cid-tBnqXrp2Uo"
        id="content4-q"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="title col-md-12 col-lg-12">
              <h3
                className="mbr-section-title mbr-fonts-style align-center mb-4 display-2  "
                data-aos="fade-up"
              >
                <strong>TRANSPORT SERVICES</strong>
              </h3>
              <h4
                className="mbr-section-subtitle align-center mbr-fonts-style mb-4 display-7"
                data-aos="fade-up"
              >
                One of our most popular services is our airport transfer
                service. When you arrive at the airport, our professional
                chauffeurs will be there to greet you and help you with your
                luggage. You'll be whisked away to your destination in one of
                our vehicles, which are always clean, well-maintained, and fully
                equipped with modern amenities.
                <div></div>
                <div>
                  We understand that time is of the essence, and that's why we
                  always make sure to arrive on time to pick you up and drop you
                  off. You can count on us to get you to your destination safely
                  and efficiently, without any delays or complications.
                </div>
                <div>
                  But our services don't stop there. One Luxor also offers a
                  range of other transportation options, including city tours,
                  business transportation, and event transportation. Whether
                  you're traveling for business or pleasure, we have the perfect
                  vehicle to meet your needs.
                </div>
                <div>
                  Our city tours are a great way to explore the sights and
                  sounds of your destination in comfort and style. Our
                  knowledgeable chauffeurs will take you to all the best places,
                  and you'll be able to relax and enjoy the experience without
                  having to worry about driving or parking.
                </div>
                <div>​</div>
                <div>
                  Our business transportation services are perfect for
                  executives who need to get around town quickly and
                  efficiently. We offer a range of vehicles, including sedans
                  and SUVs, that are perfect for business meetings, airport
                  transfers, and other corporate events.
                </div>
                <div>
                  And our event transportation services are ideal for weddings,
                  proms, and other special occasions. We'll make sure you arrive
                  in style, and we can even decorate our vehicles to match the
                  theme of your event.
                </div>
                <div>
                  One of the biggest benefits of choosing One Luxor for your
                  transportation needs is the peace of mind that comes with
                  knowing you're in good hands. Our professional chauffeurs are
                  experienced, courteous, and always ready to go the extra mile
                  to ensure your satisfaction.
                </div>
                <div>
                  So whether you're traveling for business or pleasure, One
                  Luxor has the perfect transportation option for you. From
                  airport transfers to city tours, we're committed to providing
                  you with reliable transportation services that meet your needs
                  and exceed your expectations.
                </div>
                <div></div>
                <div></div>
                <div></div>
              </h4>
            </div>
          </div>
        </div>
      </section>

      <section
        data-bs-version="5.1"
        className="features13 cid-tBntTJuJyQ"
        id="features14-w"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="mbr-section-title align-center mb-4 mbr-fonts-style display-2">
                <strong>Other Offers:</strong>
              </h3>
            </div>
            <div className="card col-12 col-md-4 col-lg-2 p-3">
              <div className="card-wrapper">
                <div className="card-box align-center">
                  <span className="mbr-iconfont mobi-mbri-growing-chart mobi-mbri"></span>
                  <h4 className="card-title align-center mbr-black mbr-fonts-style display-7">
                    <strong>&nbsp;Airport Transfer Services</strong>
                  </h4>
                </div>
              </div>
            </div>
            <div className="card p-3 col-12 col-md-4 col-lg-2">
              <div className="card-wrapper">
                <div className="card-box align-center">
                  <span className="mbr-iconfont mobi-mbri-key mobi-mbri"></span>
                  <h4 className="card-title align-center mbr-black mbr-fonts-style display-7">
                    <strong>&nbsp;Private Hire or Chauffeur Services</strong>
                  </h4>
                </div>
              </div>
            </div>
            <div className="card p-3 col-12 col-md-4 col-lg-2">
              <div className="card-wrapper">
                <div className="card-box align-center">
                  <span className="mbr-iconfont mbri-delivery"></span>
                  <h4 className="card-title align-center mbr-black mbr-fonts-style display-7">
                    <strong>Car Hire Services</strong>
                  </h4>
                </div>
              </div>
            </div>
            <div className="card p-3 col-12 col-md-4 col-lg-2">
              <div className="card-wrapper">
                <div className="card-box align-center">
                  <span className="mbr-iconfont mobi-mbri-globe mobi-mbri"></span>
                  <h4 className="card-title align-center mbr-black mbr-fonts-style display-7">
                    <strong>
                      &nbsp;Inter-city and Provincial Transport Services
                    </strong>
                  </h4>
                </div>
              </div>
            </div>
            <div className="card p-3 col-12 col-md-4 col-lg-2">
              <div className="card-wrapper">
                <div className="card-box align-center">
                  <span className="mbr-iconfont mobi-mbri-delivery mobi-mbri"></span>
                  <h4 className="card-title align-center mbr-black mbr-fonts-style display-7">
                    <strong>
                      Corporate and Special Events Transport Services
                    </strong>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        data-aos-duration="1000"
        data-bs-version="5.1"
        className="features10 cid-tBnvXtUwyS"
        id="features11- 
        y"
      >
        <div className="container">
          <div className="title">
            <h3
              className="mbr-section-title mbr-fonts-style mb-4 display-2"
              data-aos="fade-up"
            >
              <strong>Our Service Vehicles</strong>
            </h3>
          </div>
          <div className="card">
            <div className="card-wrapper">
              <div className="row align-items-center">
                <div className="col-12 col-md-3">
                  <div className="image-wrapper">
                    <img
                      src="images/1-219x154.png"
                      alt="Mobirise Website Builder"
                      title=""
                    />
                  </div>
                </div>
                <div className="col-12 col-md">
                  <div className="card-box">
                    <div className="row" data-aos="fade-up">
                      <div className="col-12">
                        <div className="top-line">
                          <h4 className="card-title mbr-fonts-style display-5">
                            <strong>Van</strong>
                          </h4>
                          <p
                            className="cost mbr-fonts-style text-white
                           display-5"
                          >
                            $39
                          </p>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="bottom-line">
                          <p className="mbr-text mbr-fonts-style m-0 display-7">
                            Versatile and spacious minivan that offers
                            comfortable transportation for up to ​7 passengers.
                            With its ample headroom and legroom, it is designed
                            to provide a smooth and comfortable ride for both
                            driver and passengers. Also, it provides plenty of
                            cargo space for luggage, bags, and other personal
                            items, making it an ideal vehicle for small-size
                            families or groups of travelers who need to carry
                            several gear. Overall, the mini-van offers a winning
                            combination of comfort and capacity, making it a
                            popular choice for those who prioritize practicality
                            and reliability.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-wrapper">
              <div className="row align-items-center">
                <div className="col-12 col-md-3">
                  <div className="image-wrapper">
                    <img
                      src="images/2-295x136.png"
                      alt="Mobirise Website Builder"
                      title=""
                    />
                  </div>
                </div>
                <div className="col-12 col-md">
                  <div className="card-box">
                    <div className="row" data-aos="fade-up">
                      <div className="col-12">
                        <div className="top-line">
                          <h4 className="card-title mbr-fonts-style display-5">
                            <strong>Mini Van</strong>
                          </h4>
                          <p
                            className="cost mbr-fonts-style text-white
                           display-5"
                          >
                            $49
                          </p>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="bottom-line">
                          <p className="mbr-text mbr-fonts-style m-0 display-7">
                            Vans are spacious that can comfortably accommodate
                            up to 11 passengers. With its plush seats, generous
                            legroom, and ample headroom, our vans are designed
                            to provide a comfortable and relaxing ride, even on
                            long journeys. In terms of capacity, vans have large
                            cargo area that can easily accommodate luggage,
                            sports equipment, and other bulky items. Overall,
                            our vans are top choice for those who want a
                            spacious and comfortable vehicle for group travel,
                            whether for business or pleasure.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-wrapper">
              <div className="row align-items-center">
                <div className="col-12 col-md-3">
                  <div className="image-wrapper">
                    <img
                      src="images/3-596x298.jpg"
                      alt="Mobirise Website Builder"
                      title=""
                    />
                  </div>
                </div>
                <div className="col-12 col-md">
                  <div className="card-box">
                    <div className="row" data-aos="fade-up">
                      <div className="col-12">
                        <div className="top-line">
                          <h4 className="card-title mbr-fonts-style display-5">
                            <strong>Sedan</strong>
                          </h4>
                          <p
                            className="cost mbr-fonts-style text-white
                           display-5"
                          >
                            $29
                          </p>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="bottom-line">
                          <p className="mbr-text mbr-fonts-style m-0 display-7">
                            Our sedans offer a stylish and comfortable ride for
                            up to 4 passengers. With its sleek design, luxurious
                            interior, and smooth performance, the sedan is an
                            excellent choice for business travelers, couples, or
                            small families. It provides ample legroom and
                            luggage capacity, ensuring a comfortable journey
                            without sacrificing style and elegance. Whether you
                            need transportation for a business meeting or a
                            special occasion, our sedans offer the perfect
                            combination of comfort and sophistication.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
     
    </>
  );
};

export default Transportation;
