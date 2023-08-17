import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DestiSlider = () => {
  const sliderRef = useRef();
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
  
  const goToPreviousSlide = () => {
    // Handle previous slide logic
  };

  const goToNextSlide = () => {
    // Handle next slide logic
  };

  const buttonStyle = {
    borderRadius: '50%',
    border: 'none',
    backgroundColor: 'transparent',
    fontSize: '24px',
    padding: '10px',
    cursor: 'pointer',
  };
  return (
    <div>
      <Slider ref={sliderRef} {...settings}>
        <div className="slide-content m-20 ml-10 mr-10 pl-10" >
          <div className="item-wrapper">
            <div className="item-img">
              <img
                src="images/bbbb-600x338.webp"
                alt="Slider Image"
                style={{ height: "300px", width: "400px" }}
              />
            </div>
            <div className="content-wrapper bg-gray-200">
              <h6
                className="item-subtitle mt-10  mbr-fonts-style mt-1 display-7"
                style={{
                  textAlign: "center",
                  paddingTop: "20px",
                }}
              >
                <strong>BORACAY</strong>
              </h6>
              <p
                className="mbr-text mbr-fonts-style mt-3 display-7"
                style={{ textAlign: "center" }}
              >
                Located in the Western Visayas region, Boracay Island is known
                for its white sandy beaches and crystal clear waters. It's the
                perfect destination for those looking for relaxation and water
                activities like swimming, snorkeling, and scuba diving. Don't
                miss the annual Ati-Atihan Festival, held in January, where
                locals and tourists come together to celebrate with music,
                dance, and colorful costumes.
              </p>
            </div>
          </div>
        </div>
        <div className="slide-content m-20 ml-10 mr-10 pl-10" >
          <div className="item-wrapper">
            <div className="item-img">
              <img
                src="images/cebuuu-474x316.webp"
                alt="Slider Image"
                style={{ height: "300px", width: "400px" }}
              />
            </div>
            <div className="content-wrapper bg-gray-200">
              <h6
                className="item-subtitle mt-10  mbr-fonts-style mt-1 display-7"
                style={{
                  textAlign: "center",
                  paddingTop: "20px",
                }}
              >
                <strong>CEBU ISLAND</strong>
              </h6>
              <p
                className="mbr-text mbr-fonts-style mt-3 display-7"
                style={{ textAlign: "center" }}
              >
                Cebu, island, central Philippines. It is the centre of
                Visayan-Cebuano culture and has preserved a strong Spanish
                tradition in its cultural life. Attracted by the island’s focal
                position, the Portuguese navigator Ferdinand Magellan landed
                there and converted the ruler and chiefs to Christianity. He
                later was killed on nearby Mactan Island. There are numerous
                relics of the event in Cebu City.
              </p>
            </div>
          </div>
        </div>
        <div className="slide-content m-20 ml-10 mr-10 pl-10" >
          <div className="item-wrapper">
            <div className="item-img">
              <img
                src="images/vigg-600x356.webp"
                alt="Slider Image"
                style={{ height: "300px", width: "400px" }}
              />
            </div>
            <div className="content-wrapper bg-gray-200">
              <h6
                className="item-subtitle mt-10  mbr-fonts-style mt-1 display-7"
                style={{
                  textAlign: "center",
                  paddingTop: "20px",
                }}
              >
                <strong>VIGAN</strong>
              </h6>
              <p
                className="mbr-text mbr-fonts-style mt-3 display-7"
                style={{ textAlign: "center" }}
              >
                Vigan is another beautiful destination in the Philippines that
                should not be missed. It is located in the Ilocos region and is
                known for its well-preserved Spanish colonial architecture. The
                city was declared a UNESCO World Heritage Site in 1999, and it's
                a perfect destination for those who want to experience the
                country's rich history and culture.
              </p>
            </div>
          </div>
        </div>
        <div className="slide-content m-20 ml-10 mr-10 pl-10  ">
          <div className="item-wrapper">
            <div className="item-img">
              <img
                src="images/bbbb-600x338.webp"
                alt="Slider Image"
                style={{ height: "300px", width: "400px" }}
              />
            </div>
            <div className="content-wrapper bg-gray-200">
              <h6
                className="item-subtitle mt-10  mbr-fonts-style mt-1 display-7"
                style={{
                  textAlign: "center",
                  paddingTop: "20px",
                }}
              >
                <strong>PALAWAN</strong>
              </h6>
              <p
                className="mbr-text mbr-fonts-style mt-3 display-7"
                style={{ textAlign: "center" }}
              >
                Known for its stunning limestone cliffs, clear lagoons, and
                diverse marine life, Palawan Island is a must-visit destination
                for nature lovers. Don't miss the Underground River in Puerto
                Princesa, a UNESCO World Heritage Site, or the Bacuit
                Archipelago in El Nido. If you're visiting in March, join the
                locals in celebrating the colorful Pista Y Ang Kagueban
                Festival.
              </p>
            </div>
          </div>
        </div>
        <div className="slide-content m-20 ml-10 mr-10 pl-10" >
          <div className="item-wrapper">
            <div className="item-img">
              <img
                src="images/bbbb-600x338.webp"
                alt="Slider Image"
                style={{ height: "300px", width: "400px" }}
              />
            </div>
            <div className="content-wrapper bg-gray-200">
              <h6
                className="item-subtitle mt-10  mbr-fonts-style mt-1 display-7"
                style={{
                  textAlign: "center",
                  paddingTop: "20px",
                }}
              >
                <strong>BATAAN</strong>
              </h6>
              <p
                className="mbr-text mbr-fonts-style mt-3 display-7"
                style={{ textAlign: "center" }}
              >
                Bataan is a province in the Philippines known for its rich
                historical significance. It played a crucial role during World
                War II and is home to various war memorials and landmarks. The
                province also offers scenic landscapes, beautiful beaches, and
                delicious local cuisine. Explore the attractions and immerse
                yourself in the fascinating history of Bataan.
              </p>
             
            </div>
          </div>
        </div> 
       
      </Slider>
    </div>
  );
};

export default DestiSlider;
