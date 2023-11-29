import React from 'react';

function Home() {
  return (
    <>
      <section className="banner bg-tertiary position-relative overflow-hidden">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="block text-center text-lg-start pe-0 pe-xl-5">
                <h1 className="text-capitalize mb-4">Zero-Food-Waste (ZFW) Management Platform</h1>
                <p className="mb-4">
                  A platform that furthers the movement of “Zero-Food-Waste”
                  by assisting restaurants with redistributing food waste through 
                  proper recycling processes and fair food distribution.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ps-lg-5 text-center">
                <img
                  loading="lazy"
                  decoding="async"
                  src="../about/ZeroWasteChalkBoard.png"
                  alt="zero waste chalkboard"
                  className="rounded w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="section-title pt-4">
                <p className="text-primary text-uppercase fw-bold mb-3">The Problem</p>
                <h1>Why is food waste detrimental?</h1>
                <p>
                  Food waste is a societal and humanitarian issue but most importantly an environmental issue.
                  This is due to CO2 emissions for food facilitation and methane emissions from waste filling landfills.
                  This adds to the food insecurities faced throughout the world, with the U.S. alone wasting $218 billion dollars.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 service-item">
              <div className="block">
                <span className="colored-box text-center h3 mb-4">01</span>
                <h3 className="mb-3 service-title">Confusing Labels</h3>
                <p className="mb-0 service-description">
                  Consumers waste a significant amount of food due to confusion over
                  food labels such as best-by, use-by, and sell-by dates.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 service-item">
              <div className="block">
                <span className="colored-box text-center h3 mb-4">02</span>
                <h3 className="mb-3 service-title">Oversized Servings & Containers</h3>
                <p className="mb-0 service-description">
                  Oversizing of food products in the U.S. results in waste, as consumers often cannot consume the excessive amounts.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 service-item">
              <div className="block">
                <span className="colored-box text-center h3 mb-4">03</span>
                <h3 className="mb-3 service-title">Consumer Behaviors</h3>
                <p className="mb-0 service-description">
                  This includes overpurchasing, seeking "perfect" produce, and poor food preparation practices.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 service-item">
              <div className="block">
                <span className="colored-box text-center h3 mb-4">04</span>
                <h3 className="mb-3 service-title">Inadequate Technologies</h3>
                <p className="mb-0 service-description">
                  The lack of technologies to reduce food waste includes insufficient food waste tracking and storage technologies.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 service-item">
              <div className="block">
                <span className="colored-box text-center h3 mb-4">05</span>
                <h3 className="mb-3 service-title">Lack of Food Rescue/Recycling Services</h3>
                <p className="mb-0 service-description">
                  Limited services for food donation or recycling cause accessibility issues, resulting in inaction from potential donors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5">
              <div className="section-title">
                <p className="text-primary text-uppercase fw-bold mb-3">Our Impact</p>
                <h1>How Are We Making An Impact?</h1>
                <div className="content mb-0 mt-4">
                  <p>
                    Our team has developed the Zero-Food-Waste Management Platform to connect various user types and enable
                    them to redistribute food, whether through donations for those in need or proper food waste recycling.
                  </p>
                  <p>
                    Once fully implemented and functioning, the system will provide insights into food waste patterns and enable
                    businesses to optimize their inventory management and reduce waste.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="difference-of-us-item p-3 rounded mr-0 me-lg-4">
                <div className="d-block d-sm-flex align-items-center m-2">
                  <div className="icon me-4 mb-4 mb-sm-0">
                    <i className="fas fa-network-wired mt-4" style={{ fontSize: '36px' }}></i>
                  </div>
                  <div className="block">
                    <h3 className="mb-3">Establishing a Connection</h3>
                    <p className="mb-0">
                      The platform enables various users to connect and redistribute food efficiently.
                    </p>
                  </div>
                </div>
              </div>
              <div className="difference-of-us-item p-3 rounded mr-0 me-lg-4">
                <div className="d-block d-sm-flex align-items-center m-2">
                  <div className="icon me-4 mb-4 mb-sm-0">
                    <i className="fas fa-desktop mt-4" style={{ fontSize: '36px' }}></i>
                  </div>
                  <div className="block">
                    <h3 className="mb-3">Simple User Interface</h3>
                    <p className="mb-0">
                      The platform's interface is intuitive, making it easy for users to navigate and access ZFW components.
                    </p>
                  </div>
                </div>
              </div>
              <div className="difference-of-us-item p-3 rounded mr-0 me-lg-4">
                <div className="d-block d-sm-flex align-items-center m-2">
                  <div className="icon me-4 mb-4 mb-sm-0">
                    <i className="fas fa-hamburger mt-4" style={{ fontSize: '36px' }}></i>
                  </div>
                  <div className="block">
                    <h3 className="mb-3">Easy Pick-Up Requests</h3>
                    <p className="mb-0">
                      The system facilitates easy submission of food availability and seamless communication of pick-up requests across the platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
