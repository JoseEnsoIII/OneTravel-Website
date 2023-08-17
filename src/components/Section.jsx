import React, { useEffect , useState} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function Sections() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    AOS.init();

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const shouldShowButton = scrollTop > 100; // Adjust this value as needed
      setShowButton(shouldShowButton);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <section className="footer6 cid-tEuZ2lN1lk"  id="footer6-2i" data-aos="fade-up" data-aos-duration="500">
      <div className="container "data-aos="fade-up">
        <div className="row content mbr-white">
          <div className="col-12 col-md-3 mbr-fonts-style display-7" data-aos-duration="500">
            <h5 className="mbr-section-subtitle mbr-fonts-style mb-2 display-7" data-aos-duration="500">
              <strong>Address</strong>
            </h5>
            <p className="mbr-text mbr-fonts-style display-7" data-aos-duration="500">Lot 16 Blk 25 Rainbow Village Subd. Ironwood, Brgy. 171, Caloocan, Metro Manila</p>
            <br />
            <h5 className="mbr-section-subtitle mbr-fonts-style mb-2 mt-4 display-7" data-aos-duration="500">
              <strong>Contacts</strong>
            </h5>
            <p className="mbr-text mbr-fonts-style mb-4 display-7" data-aos-duration="500">
              Email: 
              <br />
              Phone: 09278969564
            </p>
          </div>
          <div className="col-12 col-md-3 mbr-fonts-style display-7" data-aos-duration="500">
            <h5 className="mbr-section-subtitle mbr-fonts-style mb-2 display-7" data-aos-duration="500">
              <strong>Links</strong>
            </h5>
            <ul className="list mbr-fonts-style mb-4 display-4" data-aos-duration="500">
              <li className="mbr-text item-wrap">
                <a className="text-primary" href="#">Download for Linux</a>
              </li>
              <li className="mbr-text item-wrap">
                <a className="text-primary" href="#">Download for Windows</a>
              </li>
              <li className="mbr-text item-wrap">
                <a className="text-primary" href="#">Download for Mac</a>
              </li>
            </ul>
            <h5 className="mbr-section-subtitle mbr-fonts-style mb-2 mt-5 display-7" data-aos-duration="500">
              <strong>Feedback</strong>
            </h5>
            <p className="mbr-text mbr-fonts-style mb-4 display-7" data-aos-duration="500">
              Please send us your ideas, bug reports, suggestions! Any feedback would be appreciated.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <div className="google-map">
              <iframe
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Philippines%20Property%20Homes%20Caloocan"
                allowFullScreen=""
              ></iframe>
            </div>
          </div>
          <div className="col-md-6">
            <div className="social-list align-left">
              <div className="soc-item">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <span className="socicon-twitter socicon mbr-iconfont mbr-iconfont-social"></span>
                </a>
              </div>
              <div className="soc-item">
                <a href="https://www.facebook.com/pages/1616226671953247" target="_blank" rel="noopener noreferrer">
                  <span className="socicon-facebook socicon mbr-iconfont mbr-iconfont-social"></span>
                </a>
              </div>
              <div className="soc-item">
                <a href="https://www.youtube.com/c" target="_blank" rel="noopener noreferrer">
                  <span className="socicon-youtube socicon mbr-iconfont mbr-iconfont-social"></span>
                </a>
              </div>
              <div className="soc-item">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <span className="socicon-instagram socicon mbr-iconfont mbr-iconfont-social"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
       
      </div>
     
    </section>
  );
}

export default Sections;
