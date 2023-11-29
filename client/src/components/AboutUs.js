import React from 'react';
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <>
    <section className="page-header bg-tertiary">
        <div className="container">
          <div className="row">
            <div className="col-8 mx-auto text-center">
              <h2 className="mb-3 text-capitalize">About</h2>
              <ul className="list-inline breadcrumbs text-capitalize" style={{ fontWeight: 500 }}>
                <li className="list-inline-item"><Link to="/">Home</Link></li>
                <li className="list-inline-item">/ &nbsp; <Link to="#">About</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-7">
              <div className="section-title">
                <p className="text-primary text-uppercase fw-bold mb-3">Our Initiative</p>
                <h2 className="h1 mb-4">Tackling Food Waste, <br /> One Business at a Time</h2>
                <div className="content pe-0 pe-lg-5">
                  <p>Zero-Food-Waste (ZFW) is a small environment-oriented start-up established to focus on the reduction of food waste and reduce environmental pollution that stems from the massive amounts of food that are thrown away.</p>
                  <p>To reach this goal we developed a platform to assist in facilitating waste management and empower restaurants and other industries in Washington, D.C. in hopes to address the detrimental impact food waste has on our planet.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-5 mt-lg-0">
              <img loading="lazy" decoding="async" src="../about/foodwaste.png" alt="Food Waste Example" className="rounded w-100" /> {/* Note the self-closing img tag */}
            </div>
          </div>
        </div>
      </section>

      <section className="about-section section bg-tertiary position-relative overflow-hidden">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-lg-5">
              <div className="section-title">
                <p className="text-primary text-uppercase fw-bold mb-3"></p>
                <h2>Our Company</h2>
                <div className="content">
                  <p className="lead">Zero-Food-Waste is a small environment-oriented start-up established to focus on the reduction of food waste and reduce environmental pollution that stems from the massive amounts of food that are thrown away.</p>
                  <p>The organization currently comprises a small number of team members but aims to expand as project development continues and the platform experiences sufficient support.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="section-title">
                <p className="text-primary text-uppercase fw-bold mb-3"></p>
                <h2>Our Expertise</h2>
                <div className="content">
                  <p className="lead">Our team has experience and expertise in various key areas to include:</p>
                  <ul>
                    <li>Environmental Sustainability</li>
                    <li>System Design & Development</li>
                    <li>Passion for the Plant</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* <section className="section teams">
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-12">
                <div className="section-title text-center">
                <h2>Our Team</h2>
                <p>Here's the passionate team that aims to take a stance against food waste and protecting our planet.</p>
                </div>
            </div>
            </div>
            <div className="row position-relative">
            <div className="col-xl-3 col-lg-4 col-md-6 mt-4">
                <div className="card bg-transparent border-0 text-center">
                <div className="card-img">
                    <img loading="lazy" decoding="async" src="../about/Woodside.jpeg" alt="Cassidy Woodside" className="rounded w-100" width="300" height="332" />
                </div>
                <div className="card-body">
                    <h3>Cassidy Woodside</h3>
                    <p>Title</p>
                </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 mt-4">
                <div className="card bg-transparent border-0 text-center">
                <div className="card-img">
                    <img loading="lazy" decoding="async" src="../about/Francesca.png" alt="Francesca Manfucci" className="rounded w-100" width="300" height="333" />
                </div>
                <div className="card-body">
                    <h3>Francesca Manfucci</h3>
                    <p>Title</p>
                </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 mt-4">
                <div className="card bg-transparent border-0 text-center">
                <div className="card-img">
                    <img loading="lazy" decoding="async" src="../about/Shuruq.png" alt="Shuruq Alyami" className="rounded w-100" width="300" height="333" />
                </div>
                <div className="card-body">
                    <h3>Shuruq Alyami</h3>
                    <p>Title</p>
                </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 mt-4">
                <div className="card bg-transparent border-0 text-center">
                <div className="card-img">
                    <img loading="lazy" decoding="async" src="../about/Tolu.jpg" alt="Tolulope Awoyomi" className="rounded w-100" width="300" height="332" />
                </div>
                <div className="card-body">
                    <h3>Tolulope Awoyomi</h3>
                    <p>Title</p>
                </div>
                </div>
            </div>
            </div> */}
        {/* </div>
        </section> */}

    </>
  );
}

export default AboutUs;
