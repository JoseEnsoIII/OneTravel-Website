import React, { useEffect , useState} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Services() {
  useEffect(() => {
    document.title = 'Services';
  }, []);
  
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1500, // Set animation duration
      twice: true, // Only animate elements once
    });
  }, []);

  return (
    <div>
      <section data-bs-version="5.1" className="header14 cid-sFzxmVl7J6 mbr-fullscreen" id="header14-1f"  data-aos-duration="1500">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-6 image-wrapper">
              <img src="/images/th-474x372.jpg" alt="Mobirise Website Builder" />
            </div>
            <div className="col-12 col-md">
              <div className="text-wrapper">
                <h1 className="mbr-section-title mbr-fonts-style mb-3 display-1" data-aos="fade-up"><strong>All Services</strong></h1>
                <p className="mbr-text mbr-fonts-style display-7">
                  We connect service providers, such as hotels and resorts, restaurants and cafes, car rental companies, airline companies, and more with end-users seeking a pleasant travel experience. Also, we provide personalized service as a go-to resource for travelers, recommending where to stay, dine, shop, and spend free time for sightseeing with the aim of providing value to our clients while promoting our business partners as the preferred choice.
                </p>
                <div className="mbr-section-btn mt-3">
                  <a className="btn btn-primary-outline display-4" href="/home" target="_blank">HOME</a>
                  <a className="btn btn-warning display-4" href="/contact" target="_blank">CONTACTS</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-bs-version="5.1" className="content4 cid-tBnSofQK7Q mbr-parallax-background" id="content4-16" data-aos-duration="500">
        <div className="mbr-overlay" style={{ opacity: 0.5, backgroundColor: 'rgb(255, 255, 255)' }}></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="title col-md-12 col-lg-10">
              <h3 className="mbr-section-title mbr-fonts-style align-center mb-4 display-2">
                <strong>Our services include the following:</strong>
              </h3>
              <h4 className="mbr-section-subtitle align-center mbr-fonts-style mb-4 display-5 container" data-aos="fade-up">
                <strong>* FLIGHT BOOKINGS</strong>
                <div className="container" data-aos="fade-up">
                  <strong>We can help you find and book flights to your desired destination.</strong>
                </div>
                <div className="container" data-aos="fade-up"><strong>* HOTEL BOOKINGS</strong></div>
                <div className="container" data-aos="fade-up"><strong>We can assist you in finding and booking accommodations that fit your budget and preferences.</strong></div>
                <div className="container" data-aos="fade-up"><strong>* TRANSPORTATION</strong></div>
                <div className="container" data-aos="fade-up"><strong>We can arrange for transportation to and from the airport, as well as local transportation at your destination.</strong></div>
                <div className="container" data-aos="fade-up"><strong>* TOUR PACKAGES</strong></div>
                <div className="container" data-aos="fade-up"><strong>We can offer pre-planned tour packages that include accommodations, transportation, and activities.</strong></div>
                <div className="container" data-aos="fade-up"><strong>* TRAVEL INSURANCE</strong></div>
                <div className="container" data-aos="fade-up"><strong>We can help you purchase travel insurance to protect you in case of unexpected events, such as flight cancellations or medical emergencies.</strong></div>
                <div className="container" data-aos="fade-up"><strong>* VISA ASSISTANCE</strong></div>
                <div className="container" data-aos="fade-up"><strong>We can provide guidance on visa requirements and assist with the visa application process.</strong></div>
                <div className="container" data-aos="fade-up"><strong>* TRAVEL ADVICE</strong></div>
                <div className="container" data-aos="fade-up"><strong>We can offer valuable advice on travel destinations, local customs, and cultural practices.</strong></div>
                <div className="container" data-aos="fade-up"><strong>* PERSONALIZED TRIP PLANNING</strong></div>
                <div className="container" data-aos="fade-up"><strong>We offer personalized trip planning services where we work with you to create a customized itinerary based on your interests, preferences, and budget.</strong></div>
                <div className="container" data-aos="fade-up"><strong>* CULTURAL IMMERSION PROGRAMS</strong></div>
                <div className="container" data-aos="fade-up"><strong>We offer cultural immersion programs that allow travelers to experience the local culture firsthand through activities like cooking classes, language lessons, or homestays with local families.</strong></div>
                <div className="container" data-aos="fade-up"><strong>* ADVENTURE TRAVEL PLANNING</strong></div>
                <div className="container" data-aos="fade-up"><strong>We can assist travelers in planning trips that involve activities like hiking, trekking, rafting, or camping.</strong></div>
                <div className="container" data-aos="fade-up"><strong>* VIP TRAVEL SERVICES</strong></div>
                <div className="container" data-aos="fade-up"><strong>We offer VIP travel services for high-end travelers, including luxury accommodations, private transfers, and exclusive access to events and attractions.</strong></div>
                <div className="container" data-aos="fade-up"><strong>* GROUP TRAVEL PLANNING</strong></div>
                <div className="container" data-aos="fade-up"><strong>We offer to coordinate travel arrangements for large groups like corporate retreats, family reunions, conference attendees, and destination events.</strong></div>
                <div className="container" data-aos="fade-up"><strong>* DESTINATION MANAGEMENT</strong></div>
                <div className="container" data-aos="fade-up"><strong>We can provide local support and assistance during your trip, including recommendations for activities and dining options.</strong></div>
                <div className="container" data-aos="fade-up"><strong>* TRAVEL CONCIERGE SERVICES</strong></div>
                <div className="container" data-aos="fade-up"><strong>We offer travel concierge services to assist travelers with everything from restaurant reservations to event tickets to spa appointments.</strong></div>
              </h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
