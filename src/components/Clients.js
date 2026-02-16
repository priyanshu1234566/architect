import React from "react";
import "../styles/Clients.css";
import client1Img from "..//assests/client.png";
import client2Img from "..//assests/client.png";
import client3Img from "..//assests/client.png";

/* css link */

import "font-awesome/css/font-awesome.min.css";

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <h2 className="heading">
        <i className="fas fa-quote-left"></i> Client <span>Testimonials</span>
      </h2>

      <div className="container">
        <div className="testimonial-grid">
          
          <div className="testimonial-box">
            <div className="quote">
              <i className="fas fa-quote-right"></i>
              <p>
                "Working with this team was an absolute pleasure. Their attention to detail and innovative solutions exceeded our expectations. Highly recommend!"
              </p>
            </div>
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <div className="client-info">
              <img src={client1Img} alt="Client 1" />
              <div className="details">
                <h4>John Doe</h4>
                <span>CEO, TechCorp</span>
              </div>
            </div>
          </div>

          <div className="testimonial-box">
            <div className="quote">
              <i className="fas fa-quote-right"></i>
              <p>
                "Exceptional service and professionalism. They delivered on time and the results were outstanding. A true partner in success."
              </p>
            </div>
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <div className="client-info">
              <img src={client2Img} alt="Client 2" />
              <div className="details">
                <h4>Jane Smith</h4>
                <span>Marketing Director, Innovate Ltd.</span>
              </div>
            </div>
          </div>

          <div className="testimonial-box">
            <div className="quote">
              <i className="fas fa-quote-right"></i>
              <p>
                "From concept to execution, everything was flawless. Their expertise in design and development is top-notch. Will collaborate again!"
              </p>
            </div>
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <div className="client-info">
              <img src={client3Img} alt="Client 3" />
              <div className="details">
                <h4>Mike Johnson</h4>
                <span>Founder, StartupHub</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;