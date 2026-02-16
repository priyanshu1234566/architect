import React from "react";
import "../styles/Contact.css";
import contactImg from "..//assests/contact1.png";
// adjust path if needed

/* css link */

import "font-awesome/css/font-awesome.min.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      
      {/* Map Start */}
      <h2 className="heading">
        <i className="fas fa-map"></i> Go To <span>Map</span>
      </h2>

      <div className="container">
        <div className="mapbox" data-mapbox>
          <figure>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3476.234718593502!2d77.006250075529!3d29.3926889752583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDIzJzMzLjciTiA3N8KwMDAnMzEuOCJF!5e0!3m2!1sen!2sin!4v1769920564670!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </figure>
        </div>
      </div>
      {/* Map End */}

      <h2 className="heading">
        <i className="fas fa-headset"></i> Get in <span>Touch</span>
      </h2>

      <div className="container">
        <div className="content">
          
          <div className="image-box">
            <img draggable="false" src={contactImg} alt="Contact" />
          </div>

          <form id="contact-form">
            <div className="form-group">

              <div className="field">
                <input type="text" name="name" placeholder="Name" required />
                <i className="fas fa-user"></i>
              </div>

              <div className="field">
                <input type="text" name="email" placeholder="Email" required />
                <i className="fas fa-envelope"></i>
              </div>

              <div className="field">
                <input type="text" name="phone" placeholder="Phone" />
                <i className="fas fa-phone-alt"></i>
              </div>

              <div className="message">
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
                <i className="fas fa-comment-dots"></i>
              </div>

            </div>

            <div className="button-area">
              <button type="submit">
                Submit
                <i className="fas fa-paper-plane"></i>
                 
              </button>
            </div>
          </form>

        </div>
      </div>

    </section>
  );
};

export default Contact;
