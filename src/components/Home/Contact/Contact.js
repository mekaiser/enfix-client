import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <h1 className="section-title-red text-center">Contact</h1>
      <div className="contact-form">
        <form>
          <div className="mb-3">
            <label
              for="exampleInputEmail1"
              className="form-label contact-form-label"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label
                  for="exampleInputEmail1"
                  className="form-label contact-form-label"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label
                  for="exampleInputEmail1"
                  className="form-label contact-form-label"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label
              for="exampleInputPassword1"
              className="form-label contact-form-label"
            >
              Your Message
            </label>
            <textarea
              type="text"
              name="message"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="8"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-services-card my-4">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
