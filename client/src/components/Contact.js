import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {

  return (
    <div>
      <section className="page-header bg-tertiary">
        <div className="container">
          <div className="row">
            <div className="col-8 mx-auto text-center">
              <h2 className="mb-3 text-capitalize">Contact Us</h2>
              <ul className="list-inline breadcrumbs text-capitalize" style={{ fontWeight: 500 }}>
                <li className="list-inline-item"><Link to="/">Home</Link></li>
                <li className="list-inline-item">/ &nbsp; <Link to="#">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <p className="text-primary text-uppercase fw-bold mb-3">Let's Get Connected</p>
                <h1>Get Access to Our Platform Today!</h1>
                <p>By filling out this form, we will be able to contact you and give you more information on our platform and how you can make use of it today.</p>
              </div>
            </div>
            <div className="col-lg-10">
              <div className="shadow rounded p-5 bg-white">
                <div className="row">
                  <div className="col-12 mb-4">
                    <h4>Leave Us A Message</h4> 
                  </div>
                  <div className="col-lg-6">
                    <div className="contact-form">
                      <form action="#">
                        <div className="form-group mb-4 pb-2">
                          <label htmlFor="contact_name" className="form-label">Full Name</label>
                          <input type="text" className="form-control shadow-none" id="contact_name" />
                        </div>
                        <div className="form-group mb-4 pb-2">
                          <label htmlFor="contact_email" className="form-label">Email address</label>
                          <input type="email" className="form-control shadow-none" id="contact_email" />
                        </div>
                        <div className="form-group mb-4 pb-2">
                          <label htmlFor="contact_phone" className="form-label">Phone Number</label>
                          <input type="tel" className="form-control shadow-none" id="contact_phone" />
                        </div>
                        <div className="form-group mb-4 pb-2">
                          <label htmlFor="usertype" className="form-label">You are:</label>
                          <select className="form-control shadow-none" id="usertype">
                            <option value="">Select an option</option>
                            <option value="Food Business">A Food Business owner who wants to donate excess food and dispose of it sustainably</option>
                            <option value="Food Requestor">An Individual or Organization who wants to request surplus food from restaurants</option>
                            <option value="Food Waste Facilitator">A Food Waste Facilitator who wants to manage waste pick-ups effectively</option>
                          </select>
                        </div>
                        <div className="form-group mb-4 pb-2">
                          <label htmlFor="exampleFormControlTextarea1" className="form-label">Write Message</label>
                          <textarea className="form-control shadow-none" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button className="btn btn-primary w-100" type="submit"><b>Send Message</b></button>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 mt-5 mt-lg-0">
                    <div className="contact-info">
                      <div className="block mt-0">
                        <h4 className="h5">Still Have Questions?</h4>
                        <div className="content">
                          Call Us and We Will Be Happy To Help
                          <br /><Link href="tel:+3301563965">+3301563965</Link>
                          <br />Monday - Friday
                          <br />9AM TO 8PM Eastern Time
                        </div>
                      </div>
                      <div className="block mt-4">
                        <h4 className="h5">Duques Hall</h4>
                        <div className="content">
                        2201 G St NW.
                          <br />20052
                          <br />Washington, DC
                        </div>
                      </div>
                      <div className="block">
                        <ul className="list-unstyled list-inline my-4 social-icons">
                          <li className="list-inline-item me-3">
                            <Link title="Explore Facebook Profile" className="text-black" to="https://facebook.com/">
                              <i className="fab fa-facebook-f"></i>
                            </Link>
                          </li>
                          <li className="list-inline-item me-3">
                            <Link title="Explore Twitter Profile" className="text-black" to="https://twitter.com/">
                              <i className="fab fa-twitter"></i>
                            </Link>
                          </li>
                          <li className="list-inline-item me-3">
                            <Link title="Explore Instagram Profile" className="text-black" to="https://instagram.com/">
                              <i className="fab fa-instagram"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
