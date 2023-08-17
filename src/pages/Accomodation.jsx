import React, { useRef ,useEffect } from 'react';
import AccomSlider from '../components/AccomSlider';

function Accomodation() {
  useEffect(() => {
    document.title = "Accomodation";
  }, []);
  const accomRef = useRef(null);

  const handleScroll = (event) => {
    event.preventDefault();
    accomRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  
  
  return (
    <div>
      <section className="header9 cid-sFHoAfPmXB" id="header9-1">
        <div className="mbr-overlay" style={{ opacity: 0.2, backgroundColor: 'rgb(255, 255, 255)' }}></div>
        <div className="text-center container">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-9">
              <h1 className="mbr-section-title mbr-fonts-style mb-3 display-1" data-aos="fade-up"style={{ position: 'absolute', top: '-120px', left: '0', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px'}}>
                <strong>Accommodation</strong>
              </h1>
              <div className="mbr-section-btn mt-3">
                <a className="btn btn-primary display-4" href="#accom" target="_blank" onClick={handleScroll} style ={{position: 'absolute', top:'-50px' ,left: '43%'}}>
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="h-650 w-screen m-10"  id="accom">
        <div ref={accomRef} className="mbr-section-head">
          <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
            <strong>Trending Destinations</strong>
          </h4>
          <h5 className="mbr-section-subtitle mbr-fonts-style align-center mb-5 mt-2 display-5">
            Most popular choices for travellers in the Philippines&nbsp;
          </h5>
        </div>
        <div>
          {/* Other page content */}
          <AccomSlider />
        </div>
      </section>
    </div>
  );
}

export default Accomodation;
