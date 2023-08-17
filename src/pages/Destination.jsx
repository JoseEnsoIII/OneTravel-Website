import DestiSlider from '../components/DestiSlider';
import React, { useEffect , useState} from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

function Destination() {
  useEffect(() => {
    document.title = "Destination";
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1500, // Set animation duration
      twice: true, // Only animate elements once
    });
  }, []);

  return (
    <div>
      <section data-bs-version="5.1" className="header9 cid-sFHoAfPmXB" id="header9-1"  data-aos-duration="1500">
        <div className="mbr-overlay" style={{ opacity: 0.4, backgroundColor: 'rgb(187, 187, 187)' }}></div>
        <div className="text-center container-fluid">
          <div className="row justify-content-center" style ={{position: 'absolute', top:'-150px', left: '100px'}}>
            <div className="col-md-12 col-lg-9">
              <h1 data-aos="fade-up" className="mbr-section-title mbr-fonts-style mb-3 display-1"><strong>DESTINATIONS</strong></h1>
              <p  data-aos="fade-up" className="mbr-text mbr-fonts-style display-5">
                &nbsp;Destinations and regional festivals that attract tourists from all over the world. If you are planning a trip to the Philippines, here are some of the exciting destinations and regional festivals that we highly recommend that you should not miss.&nbsp;&nbsp;<br />
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="h-650 w-screen m-10"  data-aos-duration="1500">
  <div className="mbr-section-head">
    <h4 className="mbr-section-title mbr-fonts-style align-center  display-2">
      <strong>Different Destinations</strong>
    </h4>
  </div>
  <div>
    {/* Other page content */}
    <DestiSlider />
  </div>
</section>

    </div>
  );
}

export default Destination;
