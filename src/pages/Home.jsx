import React, { useEffect , useState} from 'react';
import "aos/dist/aos.css";
import { MDBCarousel,MDBCarouselItem,
} from 'mdb-react-ui-kit';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1500, // Set animation duration
      once: true, // Only animate elements once
    });
  }, []);

  return (
    <>
      <section  data-aos-duration="1500" style={{ position: 'relative', height: '650px' }}>
      <MDBCarousel  fade ride="carousel" interval={3000}>
        <MDBCarouselItem
          className='w-100 d-block'
          style={{ position: 'relative', height: '650px' }}
          itemId={1}
          src='images/pexels-christian-paul-del-rosario-732497.jpg'
          alt='...'
        />
        <MDBCarouselItem
          className='w-100 d-block'
          style={{ position: 'relative', height: '650px' }}
          itemId={2}
          src='images/pexels-sharmaine-monticalbo-3824139.jpg'
          alt='...'
        />
        <MDBCarouselItem
          className='w-100 d-block'
          style={{ position: 'relative', height: '650px' }}
          itemId={3}
          src='images/pexels-cedrick-samonte-12643683.jpg'
          alt='...'
        />
        <MDBCarouselItem
          className='w-100 d-block'
          style={{ position: 'relative', height: '650px' }}
          itemId={3}
          src='images/pexels-stijn-dijkstra-2562158 (1).jpg'
          alt='...'
        />
      </MDBCarousel>
      <div style={{ position: 'absolute', top: '50px', left: '0', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px', boxSizing: 'border-box' }}>
  <h1 data-aos="fade-up" className="mbr-section-title mbr-fonts-style mb-3 display-1 text-black" style={{ color: '#fff', zIndex: 1, textAlign: 'center' }}>
    <strong>ONE</strong>
  </h1>
  <h1 data-aos="fade-up" className="mbr-section-title mbr-fonts-style mb-3 display-1 text-black" style={{ color: '#fff', zIndex: 1, textAlign: 'center' }}>
    <strong>LUXOR</strong>
  </h1>
  <p data-aos="fade-up" className="mbr-text mbr-fonts-style display-5" style={{ color: '#fff', zIndex: 1, textAlign: 'center' }}>
    <strong>WHERE LUXURIOUS VACATION MEETS AFFORDABILITY</strong>
  </p>
  <div className="mbr-section-btn mt-3 text-center" style={{ color: '#fff', zIndex: 1 }}>
    <a className="btn btn-primary display-5" href="#features16-9" data-aos="fade-up">Search</a>
  </div>
</div>

    </section>

    <section
      data-bs-version="5.1"
      className="features15 cid-sFANq99njx"
      id="features16-9"
      data-aos-duration="1500"
    >
      <div className="container" data-aos="fade-up">
        <div className="content-wrapper" >
          <div className="row align -items-center">
            <div className="col-12 col-lg">
              <div className="text-wrapper"  data-aos="fade-up">
                <h6 className="card-title mbr-fonts-style display-5">
                  <strong>ESCAPE TO PARADISE</strong>
                  <br />
                  <em>
                    Let One Luxor Take You on&nbsp;
                  </em>
                  <em>Magnificent Tour </em>
                  <br />
                  <em>in the Philippines</em>
                </h6>
                <p className="mbr-text mbr-fonts-style mb-4 display-7">
                  Experience the breathtaking beauty of the Philippines with
                  One Luxor, where luxury vacations meet affordability.
                  Discover pristine beaches, explore lush tropical locales,
                  and immerse yourself in the rich cultural heritage of this
                  stunning archipelago. Enjoy the ultimate blend of lavish
                  accommodations and budget-friendly prices with One Luxor as
                  your gateway to an unforgettable Philippine adventure.
                </p>
                <div className="mbr-section-btn mt-3">
                  <a
                    className="btn btn-primary display-4"
                    href="/Services"
                    target="_blank"
                  >
                    FIND OUT MORE ABOUT WHAT WE DO
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="image-wrapper" >
                <img
                  src="images/s-1160x773.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      data-bs-version="5.1"
      className="gallery3 cid-tB5Uc81T2Q"
      id="gallery3-1"
      data-aos-duration="1500"
    >
      <div className="container-fluid">
        <div className="mbr-section-head">
          <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2" data-aos="fade-up">
            <strong>Why choose One Luxor?</strong>
            <strong>
              <br />
            </strong>
          </h4>
        </div>
        <div className="row mt-4" >
          <div className="item features-image сol-12 col-md-6 col-lg-3" data-aos="fade-up" data-aos-duration="500" >
            <div className="item-wrapper" >
              <div className="item-img">
                <img
                  src="images/0.webp"
                  alt=""
                />
              </div>
              <div className="item-content">
                <h5 className="item-title mbr-fonts-style display-7">
                  <strong>Think about the choices.</strong>
                </h5>

                <p className="mbr-text mbr-fonts-style mt-3 display-7">
                  You're guaranteed to have fun with approximately 500,000
                  attractions, lodging options, and other options.&nbsp;
                </p>
              </div>
            </div>
          </div>
          <div className="item features-image сol-12 col-md-6 col-lg-3" data-aos="fade-up" data-aos-duration="500" >
            <div className="item-wrapper" >
              <div className="item-img">
                <img
                  src="images/p.webp"
                  alt=""
                />
              </div>
              <div className="item-content">
                <h5 className="item-title mbr-fonts-style display-7">
                  <strong>Receive discounts and treats.</strong>
                </h5>

                <p className="mbr-text mbr-fonts-style mt-3 display-7">
                  Excellent activities. excellent rates. Get One Luxor&nbsp;credits
                  as well to save even more.
                </p>
              </div>
            </div>
          </div>
          <div className="item features-image сol-12 col-md-6 col-lg-3" data-aos="fade-up" data-aos-duration="500" >
            <div className="item-wrapper" >
              <div className="item-img">
                <img
                  src="images/lll.webp"
                  alt=""
                />
              </div>
              <div className="item-content">
                <h5 className="item-title mbr-fonts-style display-7">
                  <strong>Easy Exploration.</strong>
                </h5>

                <p className="mbr-text mbr-fonts-style mt-3 display-7">
                  For faster exploration, reserve last-minute, avoid the
                  queuing, and receive a free cancellation.&nbsp;
                </p>
              </div>
            </div>
          </div>
          <div className="item features-image сol-12 col-md-6 col-lg-3" data-aos="fade-up" data-aos-duration="500" >
            <div className="item-wrapper" >
              <div className="item-img">
                <img
                  src="images/th.webp"
                  alt=""
                  title=""
                />
              </div>
              <div className="item-content">
                <h5 className="item-title mbr-fonts-style display-7">
                  <strong>Reliable and Trustworthy Travel.</strong>
                </h5>

                <p className="mbr-text mbr-fonts-style mt-3 display-7">
                  Get dependable client help by reading reviews. We are by your
                  side at every turn.&nbsp;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    


   
    </>
  );
}
export default Home;
