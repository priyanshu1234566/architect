import React, { useEffect } from "react";
import "../styles/Footer.css";

const NotFound = () => {
  useEffect(() => {
    // Disable right click (instead of inline HTML attribute)
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <>
      {/* Footer */}
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>Name of architect</h3>
            <p>
              Thank you for visiting my personal website.
              Connect with me over socials.
              <br /><br />
              Keep Rising 🚀. Connect with me over live chat!
            </p>
          </div>

          <div className="box">
            <h3>quick links</h3>
            <a href="/#home"><i className="fas fa-chevron-circle-right"></i>Home</a>
            <a href="/#about"><i className="fas fa-chevron-circle-right"></i>About</a>
            <a href="/#services"><i className="fas fa-chevron-circle-right"></i>Services</a>
            <a href="/#projects"><i className="fas fa-chevron-circle-right"></i> Projects</a>
            <a href="/#testimonials"><i className="fas fa-chevron-circle-right"></i>Clients</a>
            <a href="/#contact"><i className="fas fa-chevron-circle-right"></i> Contact</a>
          </div>

          <div className="box">
            <h3>contact info</h3>
            <p><i className="fas fa-phone"></i> +91 xxx-xxx-xxxx</p>
            <p><i className="fas fa-envelope"></i> exmple@gmail.com</p>
            <p><i className="fas fa-map-marked-alt"></i> xyzhbhvhvvhvh</p>

            <div className="share">
              <a
                href=" "
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>

              <a href="mailto:example@example.com" target="_blank" rel="noreferrer">
                <i className="fas fa-envelope"></i>
              </a>

              <a
                href=" "
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>

              <a
                href=" "
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <h1 className="credit">
          Designed with <i className="fa fa-heart pulse"></i> by{" "}
          <a href=" ">
            Name of architect
          </a><br></br><br></br>
          &copy; 2026 by Priyanshu Kumar. All rights reserved.
        </h1>
      
      </section>
    </>
  );
};

export default NotFound; 