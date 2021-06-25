import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-3">
            <div className="mb-5">
              <h2 className="text-center">Location</h2>
              <p className="text-white text-center">
                House #554, Niketan, Gulshan, Dhaka-1212, Bangladesh
              </p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="text-center mb-5">
              <h2 className="text-center">Company</h2>
              <p className="text-white">About</p>
              <p className="text-white">Project</p>
              <p className="text-white">Our Team</p>
              <p className="text-white">Terms Conditions</p>
              <p className="text-white">Submit Listing</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="text-center mb-5">
              <h2 className="text-center">Quick Links</h2>
              <p className="text-white">Quick Links</p>
              <p className="text-white">Rentals</p>
              <p className="text-white">Sales</p>
              <p className="text-white">Contacts</p>
              <p className="text-white">Our Blogs</p>
            </div>
          </div>
          <div className="col-md-3">
            <h2 className="text-center">About</h2>
            <div className="text-center">
              <p className="text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
                voluptatem exercitationem ipsa aperiam veniam est!
              </p>
              <div className="social-media-icon">
                <a href="">
                  <img
                    src="https://image.flaticon.com/icons/png/512/1384/1384053.png"
                    alt=""
                  />
                </a>
                <a href="">
                  <img
                    src="https://image.flaticon.com/icons/png/512/1384/1384063.png"
                    alt=""
                  />
                </a>
                <a href="">
                  <img
                    src="https://image.flaticon.com/icons/png/512/1384/1384060.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center my-5">
        <hr style={{ color: "white", width: "70%" }} />
      </div>
      <p className="text-center text-white copyright">
        Copyright ©{new Date().getFullYear()} All Rights Reserved
      </p>
    </section>
  );
};

export default Footer;
