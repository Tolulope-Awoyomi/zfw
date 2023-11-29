import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="section-sm bg-tertiary">
      <div className="container">
        <div className="row justify-content-between">

          {/* About Column */}
          <div className="col-lg-2 col-md-4 col-6 mb-4">
            <div className="footer-widget">
              <h5 className="mb-4 text-primary font-secondary">Services</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><Link to="#">Food Business</Link></li>
                <li className="mb-2"><Link to="#">Food Waste Facilitator</Link></li>
                <li className="mb-2"><Link to="#">Food Requestor</Link></li>
              </ul>
            </div>
          </div>

          {/* About Column */}
          <div className="col-lg-2 col-md-4 col-6 mb-4">
            <div className="footer-widget">
              <h5 className="mb-4 text-primary font-secondary">About</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><Link to="#">Our Story</Link></li>
              </ul>
            </div>
          </div>

          {/* Help Column */}
          <div className="col-lg-2 col-md-4 col-6 mb-4">
            <div className="footer-widget">
              <h5 className="mb-4 text-primary font-secondary">Help</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          

        {/* Bottom Row */}
        <div className="row align-items-center mt-5 text-center text-md-start">
          <div className="col-lg-4">
            <Link to="/">
              <img loading="lazy" decoding="async" className="img-fluid" width="160" src={logo} alt="Brand Logo" />
            </Link>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}


function handleSubscribe(event) {
  event.preventDefault();
  console.log('Form Submitted');
}

export default Footer;
